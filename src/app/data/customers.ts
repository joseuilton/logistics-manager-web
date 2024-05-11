import { faker } from "@faker-js/faker";

export const customers = Array.from({ length: 100 }).map(() => ({
  id: faker.number.int({ min: 10000, max: 99999 }),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 }),
  createdAt: faker.date.recent({ days: 30 }),
  checkedInAt: faker.date.recent({ days: 7 })
}))