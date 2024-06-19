import { Router } from "express";
import { MapController } from "../controllers/map.js";

export const createMapRouter = ({ mapModel }) => {
  const mapRouter = Router()

  const mapController = new MapController({ mapModel })
  // GETTERS
  mapRouter.get('/',mapController.getCoord)
  mapRouter.post('/',mapController.createCoord)
  mapRouter.get('/picture',mapController.getPicture)
  mapRouter.post('/picture',mapController.createPicture)
  return mapRouter;
}
