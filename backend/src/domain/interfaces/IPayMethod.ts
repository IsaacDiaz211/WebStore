import { Document } from 'mongoose';

export interface IPayMethod extends Document {
    name: string;
    charge: number;
    deleted: boolean;
}