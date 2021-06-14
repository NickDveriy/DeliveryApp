import axios, { AxiosResponse } from "axios";

const baseUrl: string = "";

export const getDrivers = async ( params?: any ): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const drivers: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/drivers", {
            params: {
                isActive: true,
                vehicleType: params && params.vehicleType && params.vehicleType.value,
                deliveryAreas: params && params.area && params.area.value
            }            
        });

        return drivers;
    } catch (error) {
        throw new Error(error);
    }
};

export const addDriver = async (formData: IDriver | any): Promise<AxiosResponse<ApiDataType>> => {

    try {
        const driver: Omit<IDriver, "_id"> = {
            name: {
                last: formData.last,
                first: formData.first
            },
            isActive: true,
            phone: formData.phone,
            email: formData.email,
            vehichleType: formData.vehicleType,
            VehiclColor: formData.vehicleColor,
            deliveryAreas: [{name: formData.area}]
        };

        const saveDriver: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/add-driver", driver);

        return saveDriver;
    } catch (error) {
        throw new Error(error);
    }
};