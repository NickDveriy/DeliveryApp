import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getDrivers = async ( params?: any ): Promise<AxiosResponse<ApiDataType>> => {
    try {
        console.log('par', params);
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

export const addDriver = async (formData: IDriver): Promise<AxiosResponse<ApiDataType>> => {

    try {
        const driver: Omit<IDriver, "_id"> = {
            name: formData.name,
            isActive: false,
            phone: formData.phone,
            email: formData.email,
            vehichleType: formData.vehichleType,
            VehiclColor: formData.VehiclColor,
            deliveryAreas: formData.deliveryAreas
        };

        const saveDriver: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/add-driver", driver);

        return saveDriver;
    } catch (error) {
        throw new Error(error);
    }
};