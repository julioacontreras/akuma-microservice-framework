export declare class MicroServiceError extends Error {
    private type;
    constructor(message: string, type: string);
    getData(): {
        message: string;
        type: String;
    };
}
