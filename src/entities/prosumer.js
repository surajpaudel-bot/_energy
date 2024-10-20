"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prosumer = void 0;
// prosumer.ts
const user_1 = require("./user");
const energyListing_1 = require("./energyListing");
class Prosumer extends user_1.User {
    constructor(id, name, email) {
        super(id, name, email);
    }
    createListing(energyQuantity, price, duration) {
        return new energyListing_1.EnergyListing(this.id, energyQuantity, price, duration);
    }
}
exports.Prosumer = Prosumer;
