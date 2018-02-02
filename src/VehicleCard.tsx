import { VehicleModel } from './shared/Model';
import * as React from 'react';

class VehicleCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {

    }

    get vehicle(): VehicleModel {
        return this.state.vehicle;
    }

    get hasDescription(): boolean {
        return this.vehicle.description !== undefined
            && this.vehicle.description.length > 0;
    }

    render() {
        let descriptionDiv = this.hasDescription
            ? (
                <div>
                    <p><strong>{this.vehicle.description}</strong></p>
                </div>
            )
            : (
                <div>
                    <p>&nbsp;</p>
                </div>
            );

        return (
            <div className="vehicle-card">
                <div className="vehicle-card-name">{this.vehicle.name}</div>
                {descriptionDiv}
            </div>
        );
    }
}

interface Props {
    vehicle: VehicleModel;
}

interface State {
    vehicle: VehicleModel;
}

export default VehicleCard;
