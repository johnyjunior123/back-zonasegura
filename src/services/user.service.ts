import { ICreateUser, userFactory } from "../entity/user.factory";
import { AppDataSource } from "../../data-source";
import { User } from "../entity/User";
const userRepository = AppDataSource.getRepository(User);

export class UserService {
  async createUser(data: ICreateUser): Promise<User | Error> {
    const newUser = userFactory.create(data);
    try {
      const user = await userRepository.save(newUser);
      return user;
    } catch (e) {
      return e;
    }
  }

  async findById(id: string): Promise<User> {
    return await userRepository.findOneByOrFail({
      id: id,
    });
  }

  async findByCpf(cpf: string): Promise<User> {
    return await userRepository.findOneByOrFail({
      cpf: cpf,
    });
  }

  async findAll(): Promise<User[]> {
    return await userRepository.find();
  }
}
