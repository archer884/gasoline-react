import * as axios from 'axios';
import { Token } from '../shared/Token';
import { Collection, VehicleModel } from '../shared/Model';

class VehicleService {
    client: axios.AxiosInstance;

    constructor(token: Token) {
        this.client = axios.default.create({
            baseURL: 'http://localhost:1337',
            timeout: 1000,
            headers: { 'Authorization': 'Bearer ' + token.token }
        });
    }

    get(): Promise<Collection<VehicleModel>> {
        return this.client
            .get<Collection<VehicleModel>>('/api/vehicles')
            .then(response => response.data);
    }
}

export default VehicleService;
