import axios from "axios";

export default axios.create({
  baseURL: 'https://quotesondesign.com/wp-json'
})