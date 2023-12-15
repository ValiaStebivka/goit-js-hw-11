import axios from 'axios';

const API_KEY = '41276375-72924d408c12669f14b6a4fd4';
const API_URL = 'https://pixabay.com/api/';

export default class NewApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  async fetchPictures() {
    const dataPictures = await axios(
      `${API_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
    );

    const pictures = dataPictures.data.hits;

    return dataPictures;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}