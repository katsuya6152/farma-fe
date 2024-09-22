import { z } from "zod";

export const cattleSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.string(),
  birthDate: z.string(),
  father: z.string(),
  mothersFather: z.string(),
  mothersGrandfather: z.string(),
  grandmothersGrandfather: z.string(),
  motherName: z.string(),
  motherRegistrationNumber: z.string(),
  motherScore: z.string(),
  motherBirthDate: z.string(),
  producerName: z.string(),
  status: z.string(),
  notes: z.string(),
});

export type Cattle = z.infer<typeof cattleSchema>;
