"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drivers_1 = require("../controllers/drivers");
const router = express_1.Router();
router.get('/drivers', drivers_1.getAllDrivers);
router.post('/add-driver', drivers_1.addDriver);
exports.default = router;
