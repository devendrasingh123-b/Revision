


function createCounter(){

    let Count=0;

   
return {
    increment:function(){
        Count++
        return Count
    }
,
    getCount:function(){
        return Count
    }


}

}

let counte= createCounter()
console.log(counte.increment())
console.log(counte.getCount())