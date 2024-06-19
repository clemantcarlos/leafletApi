import z from 'zod'
const pictureSchema = z.object({
  buffer:z.string({
    invalid_type_error: 'buffer must be a string',
    required_error: 'buffer is required',    
  })
})

export function validatePicture(input) {
  return pictureSchema.safeParse(input)
}

export function validatePartialPicture(input) {
  return pictureSchema.partial().safeParse(input)
}
