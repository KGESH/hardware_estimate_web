import { z } from 'zod';

export const currencySchema = z
  .union([
    z.literal('KRW').describe('South Korea default currency.'),
    z.literal('USD').describe('United States default currency'),
    z.literal('JPY').describe('Japan default currency'),
  ])
  .describe('The currency of the hardware.');

export const referenceModelSchema = z.object({
  name: z.string().describe(`The hardware's model name`),
  tablePrice: z.number().positive().describe(`The hardware's table price.`),
  buyingPrice: z
    .number()
    .positive()
    .describe(`The hardware's buying price. tablePrice's * 0.5`),
});

export const aiAnswerSchema = z.object({
  name: z.string().nullable().describe(`The hardware's model name`),
  tablePrice: z
    .number()
    .positive()
    .nullable()
    .describe(`The hardware's table price.`),
  buyingPrice: z
    .number()
    .positive()
    .nullable()
    .describe(`The hardware's buying price. tablePrice's * 0.5`),
});
