import { faker } from "@faker-js/faker";
import { describe, expect, test } from "vitest";
import { useProcessData } from "@shared/hooks";

describe("Test useProcessData hook", () => {
  const { findCategoryByID } = useProcessData();

  describe("findCategoryByID test", () => {
    test("Should return 'Uknown' if category not found", () => {
      const categories = new Array(15).fill({
        id: faker.number.int(100),
        name: faker.string.sample(),
      });
      const res = findCategoryByID(-9, categories);

      expect(res).toEqual("Unknown");
    });

    test("Should return correct name if ID is correct", () => {
      const categories = new Array(1000).fill({
        id: faker.number.int(100),
        name: faker.string.sample(),
      });
      const { id, name } = categories[Math.floor(Math.random() * 1000)];
      const res = findCategoryByID(id, categories);

      expect(res).toEqual(name);
    });
  });
});
