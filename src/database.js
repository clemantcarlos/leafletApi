import {Low } from 'lowdb'
import {JSONFile} from 'lowdb/node'
import {join,dirname } from 'path'
import {fileURLToPath} from 'url'

let db;

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function lowCreateConnection(){
    const file = join(__dirname,'../db/escueladb.json');
    const adapter = new JSONFile(file);
    
    db =new Low(adapter,null);

    await db.read()

    db.data ||= {
        docente:[],
        alumno:[],
        personal:[],
        representante:[],
        representante_alumno:[],
        tipo_personal:[],
        genero:[],
        grado_academico:[],
        seccion:[],
        turno:[],
        grado_escolar:[],
        docente_seccion:[]
    }

    await db.write()
}

export const getConnection = () => db;