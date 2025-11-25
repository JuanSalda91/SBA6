// ----- Tax Calculation ----- //
 export function calculateTax(price: number, category: string): number {
    let taxRate = 0.0475;

    if (category.toLowerCase() === 'groseries' ) {
        taxRate = 0.03;
    }
    return price * taxRate
 }