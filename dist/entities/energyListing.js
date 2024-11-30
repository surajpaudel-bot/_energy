"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyListing = void 0;
// energyListing.ts
class EnergyListing {
    constructor(prosumerId, energyQuantity, price, duration) {
        this.prosumerId = prosumerId;
        this.energyQuantity = energyQuantity;
        this.price = price;
        this.duration = duration;
    }
}
exports.EnergyListing = EnergyListing;
