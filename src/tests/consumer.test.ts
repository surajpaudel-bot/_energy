import { Consumer } from "../entities/consumer";
import { Transaction } from "../entities/transaction";  // Import Transaction for proper checks

describe("Consumer", () => {
    it("should create a new Consumer", () => {
        const consumer = new Consumer('consumer1', 'Bob', 'bob@example.com');
        expect(consumer.id).toBe('consumer1');
        expect(consumer.name).toBe('Bob');
        expect(consumer.email).toBe('bob@example.com');
    });

    it("should browse listings", () => {
        const consumer = new Consumer('consumer1', 'Bob', 'bob@example.com');
        const listings = consumer.browseListings({ criteria: 'renewable' });
        expect(Array.isArray(listings)).toBe(true);
        // Additional checks, if applicable
        if (listings.length > 0) {
            expect(listings[0]).toHaveProperty('prosumerId');
            expect(listings[0]).toHaveProperty('energyQuantity');
            expect(listings[0]).toHaveProperty('price');
        }
    });

    it("should select a listing and create a transaction", () => {
        const consumer = new Consumer('consumer1', 'Bob', 'bob@example.com');
        const transaction = consumer.selectListing('prosumer1');

        // Check the properties of the Transaction object
        expect(transaction).toHaveProperty('id'); // Check for 'id' instead of 'transactionId'
        expect(transaction).toHaveProperty('consumerId', 'consumer1');
        expect(transaction).toHaveProperty('listingId', 'prosumer1'); 
        expect(transaction).toHaveProperty('energyQuantity');
        expect(transaction.energyQuantity).toBeGreaterThan(0);
        expect(transaction).toHaveProperty('price');
        expect(transaction.price).toBeGreaterThan(0);
    });
});
