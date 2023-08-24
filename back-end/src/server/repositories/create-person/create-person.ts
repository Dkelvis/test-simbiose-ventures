import { Internal_Server_Error } from "../../errors/api-errors";
import { PersonDTO } from "../../interfaceDTO/person";
import { Person } from "../../models/Person";
import { ICreatePersonRepository, IPerson } from "./protocols";

class MongoCreatePersonRepository implements ICreatePersonRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async create(params: IPerson): Promise<PersonDTO> {
    const person = await this.Person.create(params);

    if (!person) {
      throw new Internal_Server_Error("Erro, pessoa não criada");
    }

    const { _id, name, email, birth_date } = person;

    return { id: _id.toHexString(), name, email, birth_date };
  }
}

export { MongoCreatePersonRepository };
