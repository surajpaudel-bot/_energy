//Testing workflow with small change 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const prosumer_1 = require("./entities/prosumer");
const consumer_1 = require("./entities/consumer");
const gridBalance_1 = require("./entities/gridBalance");
const marketData_1 = require("./entities/marketData");
const energyStorage_1 = require("./entities/energyStorage");
// Example Usage:
let prosumer = new prosumer_1.Prosumer('prosumer1', 'Alice', 'alice@example.com');
let consumer = new consumer_1.Consumer('consumer1', 'Bob', 'bob@example.com');
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
    gridBalance_1.GridBalance.update(transaction.energyQuantity);
    console.log('Updated Grid Balance:', gridBalance_1.GridBalance.currentBalance);
    // Manage energy storage (example)
    energyStorage_1.EnergyStorage.manageEnergy('store', transaction.energyQuantity);
    console.log('Current Energy Level:', energyStorage_1.EnergyStorage.currentLevel);
}
// Fetch market insights
let insights = marketData_1.MarketData.getInsights();
console.log('Market Insights:', insights);
