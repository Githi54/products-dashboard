export const useProcessData = () => {
  // use binary search. Now we have only 3 categories, but this function for scaling
  const findCategoryByID = (categoryID, categories) => {
    let min = 0;
    let max = categories.length;

    while (max >= min) {
      const mid = Math.floor((min + max) / 2);

      if (categories[mid].id === categoryID) {
        return categories[mid].name;
      }

      categories[mid].id > categoryID ? (max = mid - 1) : (min = mid + 1);
    }

    return "Unknown";
  };

  return { findCategoryByID };
};
