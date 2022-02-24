export interface IProducts {
  name: string,
  amount: string,
}

export interface IProductsWithId {
  item: {
    id: number,
    name: string,
    amount: string,
  }
}