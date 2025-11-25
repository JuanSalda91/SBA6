// ----- Error handling ----- //

export class APIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "APIError";
    }
}

export function handleError(error: any): void {
    if (error instanceof APIError) {
        console.error(`[API Error]: ${error.message}`);
    } else if (error instanceof Error) {
        console.error(`[System Error]: ${error.message}`);
    } else {
        console.error("[Unknown Error]: An unspected error occurred.");
    }
}