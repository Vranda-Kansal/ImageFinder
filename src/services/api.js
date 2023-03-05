import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getImages = async (text, count) => {
    try{
       return await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`)
    }catch(err){
        console.log("error while calling api ", err.message);
    }
}