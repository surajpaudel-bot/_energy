"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBalance = void 0;
// gridBalance.ts
class GridBalance {
    static update(energyQuantity) {
        this.currentBalance -= energyQuantity; // Example: Decrease balance after transaction
    }
}
exports.GridBalance = GridBalance;
GridBalance.currentBalance = 1000; // Initial grid balance
