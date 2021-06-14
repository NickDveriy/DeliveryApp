import { Document } from "mongoose";
import { IDeliveryArea } from "./deliveryArea";
import { IPersonName } from "./personName";

export interface IDriver extends Document {
    isActive: boolean,
    vehichleType: string,
    VehiclColor: string,
    email: string,
    phone: string,
    name: IPersonName,
    deliveryAreas: Array<IDeliveryArea>
}
