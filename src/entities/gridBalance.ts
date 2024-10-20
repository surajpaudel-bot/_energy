// gridBalance.ts
export class GridBalance {
    static currentBalance: number = 1000; // Initial grid balance

    static update(energyQuantity: number): void {
        this.currentBalance -= energyQuantity; // Example: Decrease balance after transaction
    }
}
