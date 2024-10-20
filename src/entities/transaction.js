"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
// transaction.ts
const payment_1 = require("./payment");
class Transaction {
    constructor(id, consumerId, listingId, energyQuantity, price) {
        this.id = id;
        this.consumerId = consumerId;
        this.listingId = listingId;
        this.energyQuantity = energyQuantity;
        this.price = price;
    }
    processPayment(amount) {
        return new payment_1.Payment(this.id, amount);
    }
}
exports.Transaction = Transaction;
