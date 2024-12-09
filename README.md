# _energy Project

[![CI](https://github.com/surajpaudel-bot/_energy/actions/workflows/ci.yml/badge.svg)](https://github.com/surajpaudel-bot/_energy/actions/workflows/ci.yml)

This project automates energy grid management with continuous integration testing using GitHub Actions.


##Distributed Renewable Energy Trading Platform:

 This project is a simulation of a Distributed Renewable Energy Trading Platform where users, including Prosumers and Consumers, can trade renewable energy. 
Prosumers can create energy listings, and Consumers can browse, select, and perform transactions.
The system updates the grid balance and manages energy storage accordingly.

###Prerequisites: 

    Node.js (Version 14 or higher)
    TypeScript (npm install -g typescript)

###Setup Instructions
 1.Clone the repository:
 
     Bash 
     Code:  git clone https://github.com/surajpaudel-bot/_energy.git)

2.Navigate to the project directory:

    Bash Code : cd _energy
3.Install dependencies:

    (Add external dependencies as required for this basic setup, but if there are, this step would include npm install).
4.Compile TypeScript files:

    The TypeScript files must be compiled into JavaScript
    Bash CODE: tsc
    This will generate the corresponding JavaScript files in the dist/ directory (if set up in tsconfig.json).
5.Run the application:

    Run the compiled TypeScript application with Node.js.
    code: node dist/app.js


####Project Structure:
      
       The project is structured into the following TypeScript files:


    /src
    |-- user.ts
    |-- prosumer.ts
    |-- consumer.ts
    |-- energyListing.ts
    |-- transaction.ts
    |-- payment.ts
    |-- gridBalance.ts
    |-- marketData.ts
    |-- energyStorage.ts
    |-- app.ts  // Main entry point
##### Once the application is running, it simulates the following process:

    A Prosumer creates an energy listing.
    A Consumer browses and selects a listing.
    A transaction is created, and payment is processed.
    The grid balance and energy storage are updated accordingly.
    Market insights can be fetched.


##### Test Cases performed and it's Overview
     It contains test cases for the Energy App, which includes functionality for Consumer, Prosumer, Energy Storage, Market Data, and related modules. This README outlines how to run the tests, explains what each test 
     case verifies, and provides a summary of recent changes and test runs.

#Tests Overview
     
     The test suite ensures that all core features of the app work correctly. The tests focus on verifying the behavior of key classes and methods, including Consumer, Prosumer, EnergyStorage, and MarketData.

# Install project file from NPM
 
     bash -  npm i energy_app_ts


#Instruction to run jest test
 
    #Install Jest and TypeScript (if not already installed):
    bash --   npm install --save-dev jest ts-jest @types/jest

#Configure Jest
      
       module.exports = {
       preset: 'ts-jest',
       testEnvironment: 'node',
     };
#Create Test Files
  
     For example: consumer.test.ts

#Run all tests:
      
      bash - npm test
#Run tests for a specific file:
 
      bash - npx jest src/tests/consumer.test.ts

#View the Test Results

  
     PS C:\Users\soora\energy\_energy> npm test

     > energy_app_ts@1.0.2 test
     > jest

    PASS  src/tests/prosumer.test.ts
    PASS  src/tests/energyStorage.test.ts
    PASS  src/tests/gridBalance.test.ts
    PASS  src/tests/consumer.test.ts
    PASS  src/tests/marketData.test.ts

    Test Suites: 5 passed, 5 total
    Tests:       8 passed, 8 total
    Snapshots:   0 total
    Time:        2.606 s, estimated 3 s
    Ran all test suites.
    PS C:\Users\soora\energy\_energy> 






#Test cases/Expected output for each test.
  
    #consumer.test.ts
    √ should create a new Consumer: Verifies the creation of a new Consumer object.
    √ should browse listings: Ensures that the Consumer can browse available energy listings.
    √ should select a listing and create a transaction: Confirms that the Consumer can select an energy listing and create a transaction.

   #energyStorage.test.ts
   
    √ should manage energy storage: Tests the functionality of the EnergyStorage class, ensuring it correctly stores and releases energy.

   #gridBalance.test.ts
   
    √ should update grid balance: Verifies that the GridBalance updates as expected during transactions and energy changes.

   #marketData.test.ts
    
    √ should fetch market insights: Ensures the MarketData class fetches the correct market insights, such as average price and total listings.
      prosumer.test.ts
    √ should create a new Prosumer: Verifies the creation of a new Prosumer object.
    √ should create an energy listing: Confirms that the Prosumer can create an energy listing with specified attributes.










    
