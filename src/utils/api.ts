import axios from 'axios';

export const fetchBooks = async (search: string): Promise<ResponseFetchBooks> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCnBa70VLlYIhBDTfqmoP0jFlT_jUKS_ts`
    );

    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при запросе к API Google Books:', error);
    throw error;
  }
};
