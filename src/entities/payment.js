"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// payment.ts
class Payment {
    constructor(transactionId, amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }
}
exports.Payment = Payment;
