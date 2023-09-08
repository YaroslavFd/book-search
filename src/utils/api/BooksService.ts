import { instance } from './instance';

export const BooksService = {
  getBooks: async (
    search: string,
    categories: CategoryType,
    orderBy: OrderByType,
    quantity: number
  ): Promise<ResponseFetchBooks> => {
    try {
      const params = {
        orderBy,
        maxResults: quantity
      };

      const response = await instance.get(
        `/volumes?q=${search}${
          categories !== 'all' ? `+subject:${categories}` : ''
        }&key=AIzaSyCnBa70VLlYIhBDTfqmoP0jFlT_jUKS_ts`,
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
        `/volumes/${id}?key=AIzaSyCnBa70VLlYIhBDTfqmoP0jFlT_jUKS_ts`
      );

      return response.data;
    } catch (error) {
      console.error('Произошла ошибка при запросе к API Google Books:', error);
      throw error;
    }
  }
};
