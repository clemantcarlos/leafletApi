import {config} from 'dotenv'

config()

export const DB_PORT = process.env.DB_PORT || 3500
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || '01'
export const DB_DATABASE = process.env.DB_DATABASE || 'mapa'
