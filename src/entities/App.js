"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var prosumer_1 = require("./prosumer");
var consumer_1 = require("./consumer");
var gridBalance_1 = require("./gridBalance");
var marketData_1 = require("./marketData");
var energyStorage_1 = require("./energyStorage");
// Example Usage:
var prosumer = new prosumer_1.Prosumer('prosumer1', 'Alice', 'alice@example.com');
var consumer = new consumer_1.Consumer('consumer1', 'Bob', 'bob@example.com');
// Prosumer creates an energy listing
var energyListing = prosumer.createListing(200, 80, 40);
console.log('Energy Listing:', energyListing);
// Consumer browses listings and selects one
var listings = consumer.browseListings({ criteria: 'renewable' });
console.log('Listings:', listings);
if (listings.length > 0) {
    var selectedListing = listings[0];
    var transaction = consumer.selectListing(selectedListing.prosumerId);
    console.log('Transaction:', transaction);
    // Process payment for the transaction
    var payment = transaction.processPayment(selectedListing.price * transaction.energyQuantity);
    console.log('Payment:', payment);
    // Update grid balance
    gridBalance_1.GridBalance.update(transaction.energyQuantity);
    console.log('Updated Grid Balance:', gridBalance_1.GridBalance.currentBalance);
    // Manage energy storage (example)
    energyStorage_1.EnergyStorage.manageEnergy('store', transaction.energyQuantity);
    console.log('Current Energy Level:', energyStorage_1.EnergyStorage.currentLevel);
}
// Fetch market insights
var insights = marketData_1.MarketData.getInsights();
console.log('Market Insights:', insights);
