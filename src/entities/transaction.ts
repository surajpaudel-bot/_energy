// transaction.ts
import { Payment } from './payment';

export class Transaction {
    constructor(
        public id: string,
        public consumerId: string,
        public listingId: string,
        public energyQuantity: number,
        public price: number
    ) {}

    processPayment(amount: number): Payment {
        return new Payment(this.id, amount);
    }
}
