export interface ListItemData {
  name: string;
  quantity: number;
}

export function formatQuantity(quantity: number): string {
  return `Quantity: ${quantity}`;
}
