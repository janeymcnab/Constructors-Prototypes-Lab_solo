const Transaction = function(amount, date, merchant){
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
}

Transaction.prototype.formatted = function () {
    return this.amount.toLocaleString('gb-GB', {
      style: 'currency',
      currency: 'GBP',
    });
  }

module.exports = Transaction;