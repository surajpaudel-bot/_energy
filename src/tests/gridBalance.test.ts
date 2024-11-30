import { GridBalance } from "../entities/gridBalance";

describe("GridBalance", () => {
    it("should update grid balance", () => {
        GridBalance.update(100);
        expect(GridBalance.currentBalance).toBeGreaterThan(0);
    });
});
