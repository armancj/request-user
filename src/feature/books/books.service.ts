import { Injectable } from "@nestjs/common";

 
 @Injectable()
 export class BooksService{

    private books =[
        {
        id: 1,
        title: 'El señor de los anillos',
        author: 'J.R.R. Tolkien',
        year: 1954,
        genre: 'Fantasia'
     },
     {
        id: 2,
        title: 'La camaraaaaa de la mentira',
        author: 'George Orwell',
        year: 1984,
        genre: 'Drama'
     }
    ]

     getBooks(){
         return this.books;
     }
 }