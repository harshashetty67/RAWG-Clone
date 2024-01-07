import axios from "axios";

export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
  key: 'd517af47e7974accb2b37a02e3764228'
}
});