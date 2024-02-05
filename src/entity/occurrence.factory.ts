import { v4 } from "uuid";
import { IOccurrence, Occurrence } from "./Occurrence";

export type IDataOccurrence = {
  date: Date;
  genrer: string;
  local: string;
  subject: string;
  userId: string;
};
export type ICreateOccurence = Omit<Occurrence, "id">;

export class occurrenceFactory {
  static create(data: ICreateOccurence) {
    return new Occurrence({
      id: v4(),
      date: data.date,
      genrer: data.genrer,
      local: data.local,
      subject: data.subject,
      user: data.user,
    });
  }
}
