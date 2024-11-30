import { Prosumer } from "../entities/prosumer";

describe("Prosumer", () => {
    it("should create a new Prosumer", () => {
        const prosumer = new Prosumer('prosumer1', 'Alice', 'alice@example.com');
        expect(prosumer.id).toBe('prosumer1');
        expect(prosumer.name).toBe('Alice');
        expect(prosumer.email).toBe('alice@example.com');
    });

    it("should create an energy listing", () => {
        const prosumer = new Prosumer('prosumer1', 'Alice', 'alice@example.com');
        const listing = prosumer.createListing(200, 80, 40);
        expect(listing.energyQuantity).toBe(200);
        expect(listing.price).toBe(80);
    });
});
