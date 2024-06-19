import z from 'zod'
const mapSchema = z.object({
  latitud:z.string({
    invalid_type_error: 'latitud must be a string',
    required_error: 'latitud is required',    
  }).max(255),
  longitud:z.string({
    invalid_type_error: 'longitud must be a string',
    required_error: 'longitud is required',    
  }).max(255),
  geoJSON:z.string({
    invalid_type_error: 'geoJSON must be a string',
    required_error: 'geoJSON is required',  
  })
})

export function validateMap(input) {
  return mapSchema.safeParse(input)
}

export function validatePartialMap(input) {
  return mapSchema.partial().safeParse(input)
}
