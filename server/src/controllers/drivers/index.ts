import { Response, Request } from "express";
import { IDriver } from "../../types/driver";
import Driver from "../../models/driver";

const getAllDrivers = async (req: Request, res: Response): Promise<void> => {
    console.log('REQUEST', req.query)
    try {
        const query = req.query || {};

        if (query.deliveryAreas) {
            query.deliveryAreas = { $elemMatch: { name: query.deliveryAreas } };
        }

        if (query.vehicleType) {
            query.vehichleType = query.vehicleType;
            delete query.vehicleType;
        }

        const drivers: IDriver[] = await Driver.find(query);
        res.status(200).json({ drivers });
    } catch (e) {
        throw e;
    }
};

const addDriver = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IDriver, "vehichleType" | "VehiclColor" | "email" | "phone" | "name" | "deliveryAreas">;

        const driver: IDriver = new Driver({
            name: body.name,
            vehichleType: body.vehichleType,
            VehiclColor: body.VehiclColor,
            email: body.email,
            phone: body.phone,
            deliveryAreas: body.deliveryAreas
        });

        const newDriver: IDriver = await driver.save();
        const allDrivers: IDriver[] = await Driver.find();

        res.status(201).json({
            message: "Driver was added succesfully",
            driver: newDriver,
            drivers: allDrivers
        });
    } catch (e) {
        throw e;
    };

};

export { getAllDrivers, addDriver };