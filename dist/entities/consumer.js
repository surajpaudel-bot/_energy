"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = void 0;
// consumer.ts
const user_1 = require("./user");
const energyListing_1 = require("./energyListing");
const transaction_1 = require("./transaction");
class Consumer extends user_1.User {
    constructor(id, name, email) {
        super(id, name, email);
    }
    browseListings(criteria) {
        // Logic to fetch listings based on criteria (dummy implementation)
        return [
            new energyListing_1.EnergyListing('prosumer1', 100, 50, 30),
            new energyListing_1.EnergyListing('prosumer2', 150, 70, 45)
        ];
    }
    selectListing(listingId) {
        // Logic to create a transaction (dummy implementation)
        return new transaction_1.Transaction("transactionId", this.id, listingId, 1, 100);
    }
}
exports.Consumer = Consumer;
