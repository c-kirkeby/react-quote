import axios from "axios";

export default axios.create({
  baseURL: 'http://quotesondesign.com/wp-json'
})