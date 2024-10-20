// prosumer.ts
import { User } from './user';
import { EnergyListing } from './energyListing';

export class Prosumer extends User {
    constructor(
        id: string,
        name: string,
        email: string
    ) {
        super(id, name, email);
    }

    createListing(energyQuantity: number, price: number, duration: number): EnergyListing {
        return new EnergyListing(this.id, energyQuantity, price, duration);
    }
}
