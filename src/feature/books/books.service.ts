import { Injectable } from "@nestjs/common";
import { BookModel } from "./model/books.model";
import { CreateBook } from './dto/create-book.dto';

 
 @Injectable()
 export class BooksService{

    private books =[]

     
    create(createBook:CreateBook ) {
        const book = {
          ...CreateBook,
          id: this.books.length + 1,
        };
        this.books.push(book);
        return book;
      }
     getBooks(){
        return this.books;
    }
     updatebooks(){
        return "Libros act"
     }
     deletebooks(){
        return "Libros eliminados"
     }
     updateBooksStatus(){
    
        return "Actualizando el estado de los libros"

     }
     
 }