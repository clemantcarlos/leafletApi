import  express, {json} from "express";
import { createMapRouter } from "../routes/map.js";

import cors from 'cors'

import {lowCreateConnection} from './database.js'
export const createApp=({mapModel})=>{
  // Setup the app
  const app=express()
  app.use(json())
  app.use(cors())
  app.disable('x-powered-by')

  // Home page
  app.get('/', (req, res) => {
    res.json({ message: 'hola mundo' })
  })

  // Personal router
  app.use('/map',createMapRouter({mapModel}))
  
  // App port  
  const PORT = process.env.PORT ?? 3000

  // lowdb connection
  lowCreateConnection()

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  })
}