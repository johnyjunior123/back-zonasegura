import { AppDataSource } from "../../data-source";
import { CreateOccurrenceDto } from "../dto/ocurrence.dto";
import { Occurrence } from "../entity/Occurrence";
import {
  ICreateOccurence,
  IDataOccurrence,
  occurrenceFactory,
} from "../entity/occurrence.factory";
import { UserService } from "./user.service";

const userService = new UserService();
const occurrenceRepository = AppDataSource.getRepository(Occurrence);

export class OccurrenceService {
  async create(data: IDataOccurrence) {
    const user = await userService.findById(data.userId);
    const newOccurence = occurrenceFactory.create({ ...data, user: user });
    try {
      return await occurrenceRepository.save(newOccurence);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findById(id: string, userId: string): Promise<Occurrence> {
    try {
      return await occurrenceRepository.findOneByOrFail({
        id: id,
        user: {
          id: userId,
        },
      });
    } catch {
      throw new Error("ocorrẽncia não encontrada");
    }
  }

  async findAll(userId: string): Promise<Occurrence[]> {
    return await occurrenceRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }
}
