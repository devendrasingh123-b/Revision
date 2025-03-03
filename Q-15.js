function factorial(N){


    if(N<0  || Number.isNaN(N)){
        return "Invalid input"
        
    }else if(N==0){
      return "O"
    }else{
        if(N==1){
            return 1
        }else{
            return N*(factorial(N-1))
        }
    }




}





let a=(factorial("3"))
console.log(a)