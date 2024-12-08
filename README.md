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


    
