// energyListing.ts
export class EnergyListing {
    constructor(
        public prosumerId: string,
        public energyQuantity: number,
        public price: number,
        public duration: number
    ) {}
}
