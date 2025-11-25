import { APIError } from '../utils/errorHandler.ts'

export const fetchProducts = async (): Promise<any[]> => {
    try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new APIError(`Failed to fetch product. Status: ${response.status}`);
        }

        const data = await response.json();
        return data.products;
    } catch (error) {
        throw error;
    }
};