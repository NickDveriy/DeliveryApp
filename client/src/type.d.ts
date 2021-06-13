interface IDriver {
    _id: string,
    isActive: boolean,
    vehichleType: string,
    VehiclColor: string,
    name: {
        first: string,
        last: string
    },    
    phone: string, 
    email: string,
    deliveryAreas: [
        {name: string}
    ]
}

interface DriverProps {
    driver: IDriver
}

type ApiDataType = {
    message: string,
    status: string,
    drivers: IDriver[],
    driver?: IDriver
}

