import api from "./api";

class DataService {
  signup(data) {
    return api.post("/users", data);
  }

  signin(data) {
    return api.post("/users/login", data);
  }

  signout() {
    return api.post("/users/logout");
  }

  userData(data, token) {
    return api.get(`/users/${data}`, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new DataService();
