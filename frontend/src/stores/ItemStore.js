import { writable } from 'svelte/store';

let currentId = 0; // Start with 0

function generateUniqueId() {
  currentId += 1; // Increment the ID for each new item
  return currentId;
}

const items = writable([]);

export function addItem(itemType, itemProps = {}) {
    const newItemId = generateUniqueId();
    items.update(currentItems => {
      const newItems = [...currentItems, { id: newItemId, type: itemType, props: { ...itemProps, id: newItemId } }];
      console.log('Adding item:', newItems); // Log to check the updated store
      return newItems;
    });
    return newItemId;
}
  

export function removeItem(itemId) {
    items.update(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
}
  

export default items;
