export class OrderBy {
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  constructor() {}

  public startSort(property: any, order: any) {
    if (order === 'desc') {
      this.sortOrder = -1;
    }
    return (firstField: any, secondField: any) => {
      return (
        this.collator.compare(firstField[property], secondField[property]) *
        this.sortOrder
      );
    };
  }
}
