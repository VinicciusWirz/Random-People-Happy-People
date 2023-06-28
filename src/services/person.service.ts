import { QueryResponse } from "../protocols";
import * as personRepository from "../repositories/person.repository";
import * as errors from "../errors/errors";

export async function randomPersonService() {
  const { rows: list, rowCount }: QueryResponse =
    await personRepository.randomPersonRepository();
  if (rowCount < 1) throw errors.notFoundError("Person");

  return list;
}
