import { validatePartialMap, validateMap} from "../schemas/map.js";
import {validatePicture} from '../schemas/picture.js'
export class MapController {
  constructor({ mapModel }) {
    this.mapModel = mapModel;
  }
  // GENERO
  getCoord = async (req, res) => {
    const coords = await this.mapModel.getAll()
    res.json(coords)
  };
  createCoord = async (req,res) =>{
    const result = validatePartialMap(req.body)

    if (result.error) {
      return res.status(422).json({ error: JSON.parse(result.error.message) })
    }

    const newCoord = await this.mapModel.create({ input: result.data })

    res.status(201).json(newCoord)
  }
  getPicture = async(req,res)=>{
    const picture = await this.mapModel.getPicture()
    res.json(picture)
  }
  createPicture= async (req,res) =>{
    const result = validatePicture(req.body)

    if (result.error) {
      return res.status(422).json({ error: JSON.parse(result.error.message) })
    }

    const newPicture = await this.mapModel.createPicture({ input: result.data })

    res.status(201).json(newPicture)
  }
}

const mapController = new MapController({});
