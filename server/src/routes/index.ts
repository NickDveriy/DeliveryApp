import { Router } from "express";
import { getAllDrivers, addDriver } from "../controllers/drivers";

const router: Router = Router();

router.get("/drivers", getAllDrivers);

router.post("/add-driver", addDriver);

export default router;
