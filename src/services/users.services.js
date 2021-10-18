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

  restorePassword(data) {
    return api.post("/users/restore", data);
  }
}

export default new DataService();
