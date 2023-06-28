import db from "../database/database.connection";
import { Person } from "protocols";

export async function randomPersonRepository() {
  const person = await db.query<Person>(`
    SELECT * 
    FROM people
    ORDER BY RANDOM()
    LIMIT 1;`);
  const { rows, rowCount } = person;
  return { rows, rowCount };
}
