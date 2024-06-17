import { Router } from "express";
import { ConfigController } from "../controllers/config.js";

export const createMapRouter = ({ mapModel }) => {
  const mapRouter = Router()

  const mapController = new ConfigController({ mapModel })
  // GETTERS
  mapRouter.get('/',mapController.getMap)
  
  // configRouter.get('/genero', configController.getGenero)
  // configRouter.get('/genero/:id',configController.getGeneroByID)
  
  // configRouter.get('/seccion', configController.getSeccion)
  // configRouter.get('/seccion/:id',configController.getSeccionByID)
  
  // configRouter.get('/turno', configController.getTurno)
  // configRouter.get('/turno/:id',configController.getTurnoByID)
  
  // configRouter.get('/gradoAcademico', configController.getGradoAcademico)
  // configRouter.get('/gradoAcademico/:id',configController.getGradoAcademicoByID)
  
  // configRouter.get('/gradoEscolar', configController.getGradoEscolar)
  // configRouter.get('/gradoEscolar/:id',configController.getGradoEscolarByID)
  
  // configRouter.get('/tipoPersonal', configController.getTipoPersonal)
  // configRouter.get('/tipoPersonal/:id',configController.getTipoPersonaByID)
  
  // // POST - CREATE
  // configRouter.post('/genero', configController.createGenero)
  // configRouter.post('/seccion', configController.createSeccion)
  // configRouter.post('/turno', configController.createTurno)
  // configRouter.post('/gradoAcademico', configController.createGradoAcademico)
  // configRouter.post('/gradoEscolar', configController.createGradoEscolar)
  // configRouter.post('/tipoPersonal', configController.createTipoPersonal)

  // //DELETE 
  // configRouter.delete('/genero/:id', configController.deleteGenero)
  // configRouter.delete('/seccion/:id', configController.deleteSeccion)
  // configRouter.delete('/turno/:id', configController.deleteTurno)
  // configRouter.delete('/gradoAcademico/:id', configController.deleteGradoAcademico)
  // configRouter.delete('/gradoEscolar/:id', configController.deleteGradoEscolar)
  // configRouter.delete('/tipoPersonal/:id', configController.deleteTipoPersonal)

  // return
  return mapRouter;
}
