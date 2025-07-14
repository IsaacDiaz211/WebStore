import { Document, ObjectId } from 'mongoose';

export interface ISale extends Document {
    userId: ObjectId
    date: Date;
    payId: ObjectId;
    total: number;
    detail_books: [{
        bookId: ObjectId,
        quantity: number,
        price: number
    }];
}