import React, { useState } from "react";
import FilterItems from './FilterItems';

type Props = {
    onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    saveDriver: (e: React.FormEvent, formData: IDriver | any) => void,
    show: boolean,
    driversData: IDriver[]
};

const AddDriver: React.FC<Props> = ({ onClose, saveDriver, show, driversData }) => {
    const [formData, setFormData] = useState<IDriver | any>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })
    };

    const setSelectedValue = (selectedOption: object | any): void => {
        Object.keys(selectedOption).forEach((key: string) => {
            setFormData({
                ...formData,
                [key]: selectedOption[key] && selectedOption[key].value
            });
        });

    };

    const isFormDataFilled = (): boolean => {
        return formData &&
            formData.first && formData.last && 
            formData.email && formData.phone && 
            formData.area && formData.vehicleType && formData.vehicleColor;
    };


    if (!show) {
        return null;
    }

    return (
        <form className='Form' onSubmit={(e) => saveDriver(e, formData)}>
            <div>
                <div className="modal" id="modal">
                    <h2>Add driver</h2>
                    <div className="content">
                        <div>
                            <div>
                                <label htmlFor="first">First Name</label>
                                <input type="text" id="first" onChange={handleForm} />
                            </div>
                            <div>
                                <label htmlFor="last">Last Name</label>
                                <input type="text" id="last" onChange={handleForm} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={handleForm} />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" onChange={handleForm} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="vehicleColor">Vehicle color</label>
                                <input type="text" id="vehicleColor" onChange={handleForm} />
                            </div>
                            <FilterItems driversData={driversData} runFilter={setSelectedValue} inModal={true} />
                        </div>
                    </div>
                    <div className="actions">
                        <button className="toggle-button" onClick={onClose}>
                            Close
                        </button>
                        <button className="toggle-button" disabled={!isFormDataFilled()} >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddDriver;