import { instance } from './instance';

export const BooksService = {
  getBooks: async (
    search: string,
    categories: CategoryType,
    orderBy: OrderByType
  ): Promise<ResponseFetchBooks> => {
    try {
      const params = {
        orderBy,
        maxResults: 30
      };

      const response = await instance.get(
        `/volumes?q=${search}${
          categories !== 'all' ? `+subject:${categories}` : ''
        }&key=AIzaSyBeMW7rzQGK_AeFQ2nFYPVyWv710DbkzUU`,
        { params }
      );

      return response.data;
    } catch (error) {
      console.error('Произошла ошибка при запросе к API Google Books:', error);
      throw error;
    }
  },

  getBook: async (id: string): Promise<Book> => {
    try {
      const response = await instance.get(
        `/volumes/${id}?key=AIzaSyBeMW7rzQGK_AeFQ2nFYPVyWv710DbkzUU`
      );

      return response.data;
    } catch (error) {
      console.error('Произошла ошибка при запросе к API Google Books:', error);
      throw error;
    }
  }
};
