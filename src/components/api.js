import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

const KEY = "";

export const fetchSearch = async (search, page, per_page) => {
    const response = await axios.get(`?key=${KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
    return response.data
}