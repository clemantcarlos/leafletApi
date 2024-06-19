import { DB_PORT,DB_DATABASE,DB_HOST,DB_PASSWORD,DB_USER } from "../../src/config.js";
import fs from 'fs';
import Jimp from "jimp";
import pg from "pg";
const { Pool } = pg;

const config = {
    user:DB_USER,
    host:DB_HOST,
    password:DB_PASSWORD,
    database:DB_DATABASE
}

const pool = new Pool( config )

export class MapModel {
  static async getAll() {
    const {rows} = (await pool.query('SELECT * FROM coord WHERE id = 1'))
    return rows[0]
  }
  static async getPicture() {
    
    const {rows} = (await pool.query('SELECT * FROM picture WHERE id = 1'))
    // const buffer = rows[0].buffer
    // const base64Data = buffer.replace(/^data:image\/jpeg;base64,/, "");
    // fs.writeFile('mapa.jpeg', base64Data, 'base64', function(err) {
    //   console.log(err);
    // });
    return rows[0]
  }
  static async create({ input }){
    const { latitud, longitud } = input
    const query = {
        text: 'UPDATE coord SET latitud = $1, longitud = $2 WHERE id = 1',
        values: [ latitud,longitud ],
    }
    try{
        const res = await pool.query( query )
        return res
    }catch(e){
        return { error:e }
    }
  }
  static async createPicture({ input }){
    const { buffer } = input
    // return data
    const query = {
        text: 'UPDATE picture SET buffer = $1 WHERE id = 1',
        values: [ buffer ],
    }
    try{
        const res = await pool.query( query )
        return res
      }catch(e){
        return { error:e }
    }
  }
}
