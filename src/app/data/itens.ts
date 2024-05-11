import { faker } from "@faker-js/faker";

export const itens = Array.from({ length: 100 }).map((product) => ({
    id: faker.number.int({ min: 10000, max: 99999 }),
    eanCode: faker.number.int({ min: 1000000000000, max: 9999999999999})
}));