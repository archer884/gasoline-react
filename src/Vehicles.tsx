import * as React from 'react';
import * as axios from 'axios';

const Token = 'eyJleHAiOjE1MTc5NTA0MzIsInVpZCI6IjEiLCJ1c3IiOiJhcmNoZXI4ODQifQ'
    + '==.SF2Ir0+iBXW8Z5M6/RDMcOLZdLSl9Diq6ZArvkuFiak=';

class Vehicles extends React.Component<Props, State> {
    constructor(foo: Props) {
        super(foo);
        this.state = { vehicles: [] };
    }

    componentDidMount() {
        let client = axios.default.create({
            baseURL: 'http://localhost:1337',
            timeout: 1000,
            headers: { 'Authorization': 'Bearer ' + Token }
        });
        
        client
            .get<Collection<VehicleDisplay>>('/api/vehicles')
            .then(vehicles => this.setState({
                vehicles: vehicles.data.items
            }));
    }

    render() {
        let names = this.state.vehicles.map(v => <li key={v.id}>{v.name}</li>);
        return (
            <div>
                <ul>{names}</ul>
            </div>
        );
    }
}

interface State {
    vehicles: VehicleDisplay[];
}

interface Props { }

interface Collection<T> {
    count: number;
    items: T[];
}

interface VehicleDisplay {
    id: string;
    name: string;
    description: string;
}

export default Vehicles;
