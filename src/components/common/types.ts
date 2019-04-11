export interface Address {
    "street": string;
    "city": string;
    "state": string;
    "zip": string;
}

// Dao<ReturnType, CriteriaType>
export interface Dao<T, C> {
    search: (criteria?: C) => Promise<T[]>;
    getById: (id: string) => Promise<T>;
}

export interface AppError {
    message: string;
}
