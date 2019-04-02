import drawing from "./drawing";
import Draw, { User } from "./Draw";
import * as faker from "faker";
const users: User[] = []
const draws: Draw[] = [];


for (let i = 0; i < 100; ++i)
    users.push({ name: faker.name.firstName(), email: faker.name.lastName() });

for (let j = 0; j < 5; ++j) {
    draws.push(drawing(users, draws, draws[j - 1]))
}
console.log("SORTEIOS :", draws);