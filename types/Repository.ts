export class Repository<Type> {
  private items: Type[];

  constructor(initialItems: Type[]) {
    this.items = initialItems;
  }

  add(item: Type): void {
    this.items.push(item);
  }

  getAll(): Type[] {
    return this.items;
  }
}
