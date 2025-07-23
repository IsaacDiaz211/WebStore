import { Document } from 'mongoose';

export interface IUser {
    name?: string;
    lastname?: string;
    email: string;
    password: string;
    role: 'admin' | 'customer';
    deleted?: boolean;

  };