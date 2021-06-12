"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const driverSchema = new mongoose_1.Schema({
    isActive: {
        type: Boolean,
        default: false
    },
    vehichleType: {
        type: String,
        required: true,
    },
    VehiclColor: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        first: { type: String },
        last: { type: String }
    },
    deliveryAreas: {
        type: [{
                name: { type: String }
            }]
    }
});
exports.default = mongoose_1.model("Driver", driverSchema);
