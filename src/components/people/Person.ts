import { Address } from "../common/types";

export interface Person {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    id: string;
    version: number;
    address: Address;
    [index: string]: string | number | Address;
}
