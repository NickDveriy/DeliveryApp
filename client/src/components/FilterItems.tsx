import React, { useState } from "react";
import Select from 'react-select';

type Props = {
    runFilter: (filterParams: object | any) => void,
    driversData: object | any
};

type FilterParams = {
    area: string,
    vehicleType: string
};

let deliveryAreasNames: string[] = [];
let vehicleTypes: string[] = [];

const FilterItems: React.FC<Props> = ({ runFilter, driversData }) => {

    const [selectedOption, setSelectedOption] = useState<FilterParams | any>({});

    const handleChange = (e: {} | any) => {
        console.log({
            ...selectedOption,
            [e.target]: e.value
        });

        setSelectedOption({
            ...selectedOption,
            [e.target]: e
        });
        runFilter({
            ...selectedOption,
            [e.target]: e
        });
    };



    for (const driver of driversData) {
        for (const deliveryArea of driver.deliveryAreas) {
            if (!deliveryAreasNames.includes(deliveryArea.name)) {
                deliveryAreasNames.push(deliveryArea.name);
            }
        }
        if (!vehicleTypes.includes(driver.vehichleType)) {
            vehicleTypes.push(driver.vehichleType);
        }
    }

    const vehicleTypeOptions: object[] = vehicleTypes.map((type: string) => {
        return {
            target: 'vehicleType',
            value: type,
            label: type
        };
    });

    const deliveryAreaOptions: object[] = deliveryAreasNames.map((name: string) => {
        return {
            target: 'area',
            value: name,
            label: name
        };
    });

    const SelectVehicleType = () => (
        <Select
            placeholder="Select vehicle type"
            value={selectedOption.vehicleType}
            options={vehicleTypeOptions}
            onChange={handleChange}
        />
    );

    const SelectDeliveryArea = () => (
        <Select
            placeholder="Select delivery area"
            value={selectedOption.area}
            options={deliveryAreaOptions}
            onChange={handleChange}
        />
    );


    return (
        <div>
            <SelectVehicleType />
            <SelectDeliveryArea />
        </div>
    );
};

export default FilterItems;