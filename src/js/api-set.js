import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export async function getData(searchQuery, currentPage) {
    try {
        const response = await axios.get('', {
            params: {
                key: '41276375-72924d408c12669f14b6a4fd4',
                q: searchQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: currentPage,
                per_page: '40',
            },
        });
        return response.data
    } catch (error) {
        console.log(error.message);
    } 
}
