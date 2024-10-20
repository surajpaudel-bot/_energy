// consumer.ts
import { User } from './user';
import { EnergyListing } from './energyListing';
import { Transaction } from './transaction';

export class Consumer extends User {
    constructor(
        id: string,
        name: string,
        email: string
    ) {
        super(id, name, email);
    }

    browseListings(criteria: any): EnergyListing[] {
        // Logic to fetch listings based on criteria (dummy implementation)
        return [
            new EnergyListing('prosumer1', 100, 50, 30),
            new EnergyListing('prosumer2', 150, 70, 45)
        ];
    }

    selectListing(listingId: string): Transaction {
        // Logic to create a transaction (dummy implementation)
        return new Transaction("transactionId", this.id, listingId, 1, 100);
    }
}
