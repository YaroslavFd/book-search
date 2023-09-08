import { instance } from './instance';

export const BooksService = {
  getBooks: async (search: string): Promise<ResponseFetchBooks> => {
    try {
      const response = await instance.get(
        `/volumes?q=${search}&key=AIzaSyCnBa70VLlYIhBDTfqmoP0jFlT_jUKS_ts`
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
