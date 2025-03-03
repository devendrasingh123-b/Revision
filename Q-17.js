function createBankAccount(N){

    let Amount=N;

    return {

deposit:function(Am){
          Amount=Amount+Am
         return Amount
},

withdraw:function(Amoun){
    if(Amoun>Amount){
        return "this Amout is big and we have low balnced"
    }else{
        Amount=Amount-Amoun
        return Amount
    }
},

getBalance:function(){
    return Amount
}


    }



}


let Amount=createBankAccount(1000)

console.log(Amount.deposit(1000))
console.log(Amount.withdraw(5000))
console.log(Amount.getBalance())