//q==11

// let arr=(a)=>({ squar:a**2,cube:a**3})
  
//     console.log(arr(3))

//q=12

// function muliLevel(arr){

// let obj=arr.map((ele)=>{
//     return `${ele.name} lives in ${ele.address.city} on ${ele.address.street.name}`
// })

// return obj

// }

// const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
//      { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
// let arr=muliLevel(people)
// console.log(arr)


// const library = {

//     books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
//     addBook(book) {
    
//     if (!book.title || !book.author || !book.year) {
    
//     console.log("Book information is incomplete.");
    
//     return;
    
//     }
//     this.books.push(book);
    
//     },
    
//     findBookByTitle(title) {
    
//     return this.books.find((ele,index,arr)=>{
//           if(ele.title==title){
//             return ele
//           }else{
//             return "book is not find"
//           }
//     });
    
//     },
    
//     removeBook(title) {

//         this.books.map((ele)=>{
//             if(ele.title==title){
//                 ele.pop()
//             }else{
//                 console.log("ele not found")
//             }
//         })
    
//      } };
    
//     library.addBook({ author: "George Orwell", year: 1949,title:"this" });
    
//     let add=library.findBookByTitle("The Hobbit")
// console.log(add)
// console.log(library.removeBook("George Orwell"))
// console.log(library.books.length);
    
    

