// Creating bank account,check balance and withdraw
function BankAccount(holderName, initialBalance){
    this.holderName = holderName;
    this.balance    = initialBalance;
     
    this.deposit = function(amount){
        if(amount>0){
            this.balance += amount
            console.log(`Deposited $${amount}.New balance is $${this.balance}`)
        }else{
            console.log(`Invalid Amount`)
        }
    };
    this.withdraw = function(amount){
        if(amount<= this.balance){
        this.balance -= amount
        console.log(`withdraw ${amount}.New balance is $${this.balance}`)
        }else{
            console.log(`Insufficient Balance`)
        }
       
    }
    this.checkBalance = function(){
        console.log(`Dear ${this.holderName}, your current balance is $${this.balance}`)
    }
}
let account1 = new BankAccount("Jagadip Lamsal",5000)
let account2 = new BankAccount("Prajiya Lamsal",7000)

account1.deposit(2000)
account2.deposit(3000)
account1.checkBalance()
account2.withdraw(1000)
