import React, { useState } from "react";

type Props = {
    saveDriver: (e: React.FormEvent, formData: IDriver | any) => void
};

const AddDriver: React.FC<Props> = ({ saveDriver }) => {

    const [formData, setFormData] = useState<IDriver | {}>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })
    };


    return (
        <form className='Form' onSubmit={(e) => saveDriver(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="vehicleColor">Vehicle Color</label>
                    <input type="text" id="vehicleColor" onChange={handleForm} />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>Add driver</button>
        </form>
    );
};

export default AddDriver;