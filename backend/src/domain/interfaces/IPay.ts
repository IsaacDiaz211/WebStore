import { Document } from 'mongoose';

export interface IPay extends Document {
    name: string;
    charge: number;
    deleted: boolean;
}