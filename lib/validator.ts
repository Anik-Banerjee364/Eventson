import { z } from "zod";

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be atleast 3 char'),
    description: z.string().min(3, 'Description must be min 3 char').max(400, 'Description must be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 char'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })
