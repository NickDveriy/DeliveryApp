import React, { useState } from "react";
import Select from 'react-select';

type Props = {
    runFilter: (filterParams: object | any) => void,
    driversData: object | any,
    inModal: boolean
};

type FilterParams = {
    area: string,
    vehicleType: string
};

let deliveryAreasNames: string[] = [];
let vehicleTypes: string[] = [];

const FilterItems: React.FC<Props> = ({ runFilter, driversData, inModal }) => {

    const [selectedOption, setSelectedOption] = useState<FilterParams | any>({});

    const handleChange = (e: {} | any, targetName: string) => {        
        if ( !e ) {
            setSelectedOption({
                ...selectedOption,
                [targetName]: null
            });
            runFilter({
                ...selectedOption,
                [targetName]: null
            });
        } else {
            setSelectedOption({
                ...selectedOption,
                [targetName]: e
            });
            runFilter({
                ...selectedOption,
                [targetName]: e
            });
        }        
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
            value: type,
            label: type
        };
    });

    const deliveryAreaOptions: object[] = deliveryAreasNames.map((name: string) => {
        return {            
            value: name,
            label: name
        };
    });

    const SelectVehicleType = function () {
        return (
            <Select
                isClearable={true}
                name='one'
                className="select-custom-class"
                placeholder="Select vehicle type"
                value={selectedOption.vehicleType || ''}
                options={vehicleTypeOptions}
                onChange={e => handleChange(e, 'vehicleType') }
            />);
    };

    const SelectDeliveryArea = () => (
        <Select
            isClearable={true}
            className="select-custom-class"
            placeholder="Select delivery area"
            value={selectedOption.area || ''}
            options={deliveryAreaOptions}
            onChange={e => handleChange(e, 'area')}
        />
    );

    return (
        <div className={inModal ? 'filterItemsInModal' : 'filterItemsGeneral'}>
            <SelectVehicleType />
            <SelectDeliveryArea />
        </div>
    );
};

export default FilterItems;