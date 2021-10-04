import api from './api';

class DataService {

    signup(data) {
        return api.post('/users', data);
    }
}

export default new DataService;