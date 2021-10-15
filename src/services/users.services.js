import api from "./api";

class DataService {
  signup(data) {
    return api.post("/users", data);
  }

  signin(data) {
    return api.post("/users/login", data);
  }
}

export default new DataService();
