const Account = function (name){
    this.name = name;
    this.transactions = [];
}
Account.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction);
}

Account.prototype.filterByMerchant = function (merchantName){
    const merchantResults = [];
    for (const transaction of this.transactions){
        if (transaction.merchant.name === merchantName){
            merchantResults.push(transaction)
        }
    }
    return merchantResults;
}
Account.prototype.filterByTag = function (tagName){
    const tagResults = [];
    for (const transaction of this.transactions){
        if (transaction.merchant.tag.name === tagName){
            tagResults.push(transaction)
        }
    }
    return tagResults;
}

Account.prototype.transactionsBetween = function (min, max){
    const amountResults = [];
    for (const transaction of this.transactions){
        if (transaction.amount > min 
            && transaction.amount < max){
            amountResults.push(transaction)
        }
    }
    return amountResults;
}


module.exports = Account;