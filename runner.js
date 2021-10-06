const Tag = require('./tag.js')
const Account = require ('./account.js')
const Transaction = require ('./transaction.js')
const Merchant = require ('./merchant.js')

const groceries = new Tag ('Groceries', 200)
const eatingOut = new Tag ('Eating Out', 100)
const newClothes = new Tag ('New Clothes', 50)

const lidl = new Merchant ('Lidl', groceries)
const morrisons = new Merchant ('Morrisons', groceries)
const zara = new Merchant ('Zara', newClothes)
const topshop = new Merchant ('Topshop', newClothes)
const pizzaPosto = new Merchant ('Pizza Posto', eatingOut)
const makiRamen = new Merchant ('Maki & Ramen', eatingOut)

const transaction1 = new Transaction (10.00, '06/10/21', lidl)
const transaction2 = new Transaction (20.00, '02/10/21', morrisons)
const transaction3 = new Transaction (35.00, '29/09/21', zara)
const transaction4 = new Transaction (40.00, '15/09/21', topshop)
const transaction5 = new Transaction (80.00, '06/09/21', pizzaPosto)
const transaction6 = new Transaction (12.00, '01/10/21', makiRamen)
const transaction7 = new Transaction (3.50, '01/10/21', lidl)
const transaction8 = new Transaction (5.00, '20/09/21', morrisons)

const transactions = [
    transaction1,
    transaction2,
    transaction3,
    transaction4,
    transaction5,
    transaction6,
    transaction7,
    transaction8
]

//check the currency format
for (const transaction of transactions){
    console.log(transaction.formatted());
}

const account = new Account ('Janey');

account.addTransaction(transaction1);
account.addTransaction(transaction2);
account.addTransaction(transaction3);
account.addTransaction(transaction4);
account.addTransaction(transaction5);
account.addTransaction(transaction6);
account.addTransaction(transaction7);
account.addTransaction(transaction8);

//check account
console.log(account);

//check filter by merchant
const merchantTransactions = account.filterByMerchant('Lidl');
console.log('Merchant Filter:', merchantTransactions);

//check filter by tag
const tagTransactions = account.filterByTag('Groceries');
console.log('Tag Filter:', tagTransactions);

//check filter by amount
const transactionsBetween = account.transactionsBetween(10, 70);
console.log('Amount Filter:', transactionsBetween);



