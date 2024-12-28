import { Injectable } from "@nestjs/common";

 
 @Injectable()
 export class BooksService{

     getBooks(){
         return ['Libro 1', 'Libro 2', 'Libro 3'];
     }
 }