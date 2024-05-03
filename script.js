class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }

    toString() {
        console.log("Calling toString");

        return this
    }

    save() {
        console.log("Calling save");
    }
} 

const book = new Book("A Good Book", "John Doe")

console.log(book.toString().save());