import { z } from "zod";

export const shipmentPlanSchema = z.object({
  id: z.string(),
  shipmentDate: z.string(),
  cattleId: z.string(),
  name: z.string(),
  destination: z.string(),
  status: z.string(),
});

export const shipmentRecordSchema = z.object({
  id: z.string(),
  actualShipmentDate: z.string(),
  cattleId: z.string(),
  name: z.string(),
  destination: z.string(),
  price: z.number(),
});

export const shipmentDataSchema = z.object({
  shipmentPlans: z.array(shipmentPlanSchema),
  shipmentRecords: z.array(shipmentRecordSchema),
});

export type ShipmentPlan = z.infer<typeof shipmentPlanSchema>;
export type ShipmentRecord = z.infer<typeof shipmentRecordSchema>;
export type ShipmentData = z.infer<typeof shipmentDataSchema>;
