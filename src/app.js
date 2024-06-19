import  express, {json} from "express";
import { createMapRouter } from "../routes/map.js";
import cors from 'cors'
import bodyParser from "body-parser";

export const createApp=({mapModel})=>{
  // Setup the app
  const app=express()
  app.use(json())
  app.use(cors())
  app.disable('x-powered-by')

  app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit:100000,
    limit: "500mb",
  }));
  // Home page
  app.get('/', (req, res) => {
    res.sendFile('mapFront/index.html', { root: '.' })
  })

  // Personal router
  app.use('/map',createMapRouter({mapModel}))
  
  // App port  
  const PORT = process.env.PORT ?? 3500

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  })
}