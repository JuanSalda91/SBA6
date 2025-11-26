import { fetchProducts } from './services/apiService.ts';
import { Product } from './models/Product.ts';
import { calculateTax } from './utils/taxCalculator.ts';
import { handleError } from './utils/errorHandler.ts';

const run = async () => {
    console.log("Fetching product data...");

    try {
        const productsData = await fetchProducts();

        const products = productsData.map((data: any) => new Product(data));

        products.forEach((product) => {
            product.displayDetails();

            const tax = calculateTax(product.price, product.category);
            console.log(` -> Estimated Tax: $${tax.toFixed(2)}`);
            console.log('------------------');
        });
    } catch (error) {
        handleError(error);
    }
};

run();