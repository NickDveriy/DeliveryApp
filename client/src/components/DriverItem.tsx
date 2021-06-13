import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquare, faMotorcycle, faCarSide, faPeopleCarry, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Driver: React.FC<DriverProps> = ({ driver }) => {
    let vehicleIcon = faPeopleCarry;
    const deliveryAreasNames = (driver.deliveryAreas || []).map(item => item.name).join(', ');
    switch (driver.vehichleType) {
        case 'car':
            vehicleIcon = faCarSide;
            break;
        case 'scooter':
            vehicleIcon = faMotorcycle;
            break;
    }
    return (
        <div className="driverItem">
            <div>
                <h2>{driver.name.first} {driver.name.last}</h2>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>&nbsp;{driver.email}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhoneSquare} />
                    <span>&nbsp;{driver.phone}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    <span>&nbsp;Delivery areas:</span>
                    <span>&nbsp;{deliveryAreasNames}</span>
                </p>
            </div>
            <div className="vehicle">
                <p style={{ color: driver.VehiclColor }}>
                    <FontAwesomeIcon icon={vehicleIcon} />
                </p>
                <span className="tooltipText">{driver.VehiclColor} {driver.vehichleType}</span>
            </div>

        </div>
    );
};

export default Driver;