import VehicleService from './service/VehicleService';
import * as React from 'react';
import { VehicleModel } from './shared/Model';
import './Vehicles.css';

class Vehicles extends React.Component<Props, State> {
    service;

    constructor(props: Props) {
        super(props);
        this.state = { vehicles: [] };
        this.service = props.service;
    }

    componentDidMount() {
        this.service
            .get()
            .then(response => this.setState({ vehicles: response.items }));
    }

    render() {
        if (this.state.vehicles.length >= 0) {
            let names = this.state.vehicles.map(v => <li key={v.id}>{v.name}</li>);
            return (
                <div className="Vehicles">
                    <h4>Vehicles</h4>
                    <p>Here are the vehicles you have stored.</p>
                    <ul>{names}</ul>
                </div>
            );
        } else {
            return (
                <div className="Vehicles">
                    <h4>Vehicles</h4>
                    <p>Looks like you have not stored any vehicles yet!</p>
                </div>
            );
        }
    }
}

interface Props {
    service: VehicleService;
}

interface State {
    vehicles: VehicleModel[];
}

export default Vehicles;
