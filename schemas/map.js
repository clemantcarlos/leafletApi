import z from 'zod'
const mapSchema = z.object({
  latitud:z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required',    
  }).max(255),
  longitud:z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required',    
  }).max(255)
})

export function validateMap(input) {
  return mapSchema.safeParse(input)
}

export function validatePartialMap(input) {
  return mapSchema.partial().safeParse(input)
}
