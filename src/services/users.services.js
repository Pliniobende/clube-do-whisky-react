import api from './api';

class DataService {

    create(data) {
        return api.post('/users', data);
    }
}

export default new DataService;