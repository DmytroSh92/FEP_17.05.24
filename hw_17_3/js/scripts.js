class BankAccount {

    constructor(amount) {
        this.amount = amount;
    }

    getBalance() {
        return this.amount;
    }

    deposit(sum) {
        this.amount += sum;
    }

    withdraw(sum) {
        this.amount -= sum;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());