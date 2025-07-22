type WithId = { id: string };
export const createAddUpdater =
  <T extends WithId>(item: T) =>
  (items: T[]) => [...items, item];

export const createEditUpdater =
  <T extends WithId>({ item, id }: { item: T; id: T["id"] }) =>
  (items: T[]) => {
    const itemIndex = findByKey(items, id, { index: true });

    const updatedItems = deepClone(items);
    updatedItems[itemIndex] = item;

    return updatedItems;
  };

export const createDeleteUpdater =
  <T extends WithId>(id: T["id"]) =>
  (items: T[]) =>
    items.filter((item) => item.id !== id);
