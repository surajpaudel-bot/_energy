import { EnergyStorage } from "../entities/energyStorage";

describe("EnergyStorage", () => {
    it("should manage energy storage", () => {
        // Store 50 energy
        EnergyStorage.manageEnergy('store', 50);
        expect(EnergyStorage.currentLevel).toBe(3050); // Current level should be 3050 after storing 50

        // Release 20 energy
        EnergyStorage.manageEnergy('release', 20);
        expect(EnergyStorage.currentLevel).toBe(3030); // Current level should be 3030 after releasing 20
    });
});
