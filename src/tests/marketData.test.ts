import { MarketData } from "../entities/marketData";

describe("MarketData", () => {
    it("should fetch market insights", () => {
        const insights = MarketData.getInsights();
        // Assert that insights is an object
        expect(typeof insights).toBe("object");

        // Assert that the object contains the expected properties
        expect(insights).toHaveProperty("averagePrice");
        expect(insights).toHaveProperty("totalListings");

        // Assert specific values
        expect(insights.averagePrice).toBe(60);
        expect(insights.totalListings).toBe(10);
    });
});
