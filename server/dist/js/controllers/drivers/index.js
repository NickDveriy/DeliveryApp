"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDriver = exports.getAllDrivers = void 0;
const driver_1 = __importDefault(require("../../models/driver"));
const getAllDrivers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drivers = yield driver_1.default.find();
        res.status(200).json({ drivers });
    }
    catch (e) {
        throw e;
    }
});
exports.getAllDrivers = getAllDrivers;
const addDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const driver = new driver_1.default({
            name: body.name,
            vehichleType: body.vehichleType,
            VehiclColor: body.VehiclColor,
            email: body.email,
            phone: body.phone,
            deliveryAreas: body.deliveryAreas
        });
        const newDriver = yield driver.save();
        const allDrivers = yield driver_1.default.find();
        res.status(201).json({
            message: "Driver was added succesfully",
            driver: newDriver,
            drivers: allDrivers
        });
    }
    catch (e) {
        throw e;
    }
    ;
});
exports.addDriver = addDriver;
