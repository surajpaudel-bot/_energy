// app.ts
import { Prosumer } from './entities/prosumer';
import { Consumer } from './entities/consumer';
import { Transaction } from './entities/transaction';
import { GridBalance } from './entities/gridBalance';
import { MarketData } from './entities/marketData';
import { EnergyStorage } from './entities/energyStorage';

// Example Usage:
let prosumer = new Prosumer('prosumer1', 'Alice', 'alice@example.com');
let consumer = new Consumer('consumer1', 'Bob', 'bob@example.com');

// Prosumer creates an energy listing
let energyListing = prosumer.createListing(200, 80, 40);
console.log('Energy Listing:', energyListing);

// Consumer browses listings and selects one
let listings = consumer.browseListings({ criteria: 'renewable' });
console.log('Listings:', listings);

if (listings.length > 0) {
    let selectedListing = listings[0];
    let transaction = consumer.selectListing(selectedListing.prosumerId);
    console.log('Transaction:', transaction);

    // Process payment for the transaction
    let payment = transaction.processPayment(selectedListing.price * transaction.energyQuantity);
    console.log('Payment:', payment);

    // Update grid balance
    GridBalance.update(transaction.energyQuantity);
    console.log('Updated Grid Balance:', GridBalance.currentBalance);

    // Manage energy storage (example)
    EnergyStorage.manageEnergy('store', transaction.energyQuantity);
    console.log('Current Energy Level:', EnergyStorage.currentLevel);
}

// Fetch market insights
let insights = MarketData.getInsights();
console.log('Market Insights:', insights);
