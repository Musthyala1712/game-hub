import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52be085eaf7f4775886b1bb22ae9b93e",
  },
});
