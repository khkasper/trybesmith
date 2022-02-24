export interface IUserProducts {
  userId: number,
  products: number[],
}

export interface IIdProducts {
  id: number,
  products: number[],
}

export interface IIdProduct {
  id: number,
  product: number,
}

export interface IIdOrdersOrder {
  id: number,
  orders: {
    order: {
      userId: number,
      products: number[],
    }
  }
}

export interface IOrder {
  order: {
    userId: number,
    products: number[],
  }
}