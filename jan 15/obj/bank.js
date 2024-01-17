function BankAccount(holderName, initialBalance){
    this.holderName = holderName;
    this.balance= initialBalance;

    this.deposit = function(amount){
        if(amount>0){
            this.balance += amount
            console.log(`Deposited $${amount}. New Balance is $${this.balance}`);
        }else{
            console.log(`Invalid Amount`);
        }
    };

    this.withdraw = function(amount){
        if(amount<= this.balance){
            this.balance -= amount
            console.log(`Withdraw $${amount}. New Balance is ${this.balance}`);

        }else{
            console.log('Insufficient Balance');
        }
    }  

    this.checkBalance = function(){
        console.log(`Dear ${this.holderName}, your current balance is $${this.balance}`);
    }
}

let account1 = new BankAccount("Jagadip Lamsal", 2500)
let account2 = new BankAccount("Bishworaj Poudel", 2400)


console.log(typeof(account1));


account1.deposit(2500)
account1.withdraw(400)
account2.deposit(5000)
account1.checkBalance()
account2.checkBalance()