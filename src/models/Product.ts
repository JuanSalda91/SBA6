// ----- Definning product ----- //

export interface IProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string;
}

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string;

    constructor (data: IProductData) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.description = data.description;
    this.category = data.category;
    this.discountPercentage = data.discountPercentage;
    this.rating = data.rating;
    this.stock = data.stock;
    this.tags = data.tags
}

getPriceWithDiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    return this.price - discountAmount;
}

displayDetails(): void {
    console.log(`
      ID: ${this.id}
      Title: ${this.title}
      Category: ${this.category}
      Original Price: $${this.price}
      Discount: ${this.discountPercentage}%
      Sale Price: $${this.getPriceWithDiscount().toFixed(2)}
      Description: ${this.description}
    `);
  }

}