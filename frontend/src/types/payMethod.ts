export type PayMethod = {
    _id: string,
    name: string | "card" | "transfer" | "qr" | "crypto";
    surcharge: number,
    isActive: boolean,
} 