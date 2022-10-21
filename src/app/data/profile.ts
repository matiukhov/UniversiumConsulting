import { Phone } from "./phone";

export interface Profile {
    firstName: string;
    lastName: string;
    phones: Phone[];
    email: string;
    job: string;
    address: string;
    brands:string[];
}
