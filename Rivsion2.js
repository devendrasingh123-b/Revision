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



const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title && !book.author && !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    this.books.push(book);
    
     }
     //,
    
    // findBookByTitle(title) {
    
    // return this.books.find(book => book.title === title);
    
    // },
    
    // removeBook(title) {
    
    // const index = this.books.findIndex(book => book.title === title);
    
    // if (index !== -1) {
    
    // this.books.splice(index, 1);
    
    // } else {
    
    // console.log("Book not found.");
    
    // } 
    //}
     };
    
    library.addBook({ author: "George Orwell", year: 1949 });
    
    console.log();
    
    