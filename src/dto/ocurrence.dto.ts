import { Ocurrence } from "../entity/Occurrence";

export type createOcurrenceDto = Omit<Ocurrence, 'id' | 'created_at' | 'updated_at' >
export type updateOcurrenceDto = Partial<Ocurrence>
