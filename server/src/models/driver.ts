import { model, Schema } from "mongoose";
import { IDriver } from "../types/driver";

const driverSchema: Schema = new Schema({
  isActive: {
    type: Boolean,
    default: false,
  },
  vehichleType: {
    type: String,
    required: true,
  },
  VehiclColor: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    first: { type: String },
    last: { type: String },
  },
  deliveryAreas: {
    type: [{
      name: { type: String },
    }],
  },

});

export default model<IDriver>("Driver", driverSchema);
