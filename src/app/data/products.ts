import { faker } from "@faker-js/faker";

export const products = Array.from({ length: 100 }).map((product) => ({
    id: faker.number.int({ min: 10000, max: 99999 }),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
}));