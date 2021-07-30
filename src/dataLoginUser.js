import faker from "faker";
faker.locale = "en";

export const ContinueLearnData = [
  {
    id: 1,
    name: faker.lorem.slug(),
    thumbnail: faker.image.technics(),
    timeLearned: 35,
    summary: faker.lorem.sentences(),
  },
  {
    id: 2,
    name: faker.lorem.slug(),
    thumbnail: faker.image.technics(),
    timeLearned: 35,
    summary: faker.lorem.sentences(),
  },
  {
    id: 3,
    name: faker.lorem.slug(),
    thumbnail: faker.image.technics(),
    timeLearned: 35,
    summary: faker.lorem.sentences(),
  },
  {
    id: 4,
    name: faker.lorem.slug(),
    thumbnail: faker.image.technics(),
    timeLearned: 35,
    summary: faker.lorem.sentences(),
  },
  {
    id: 5,
    name: faker.lorem.slug(),
    thumbnail: faker.image.technics(),
    timeLearned: 35,
    summary: faker.lorem.sentences(),
  },
];
