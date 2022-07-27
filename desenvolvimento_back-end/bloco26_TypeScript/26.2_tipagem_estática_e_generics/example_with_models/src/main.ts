// import connection  from './models/connection';

// const main = async () => {
//   const result = await connection.execute('SELECT * FROM books');
//   const [rows] = result;
//   console.log(rows);
// }

// main();


import BookModel from "./models/Book";
import connection  from './models/connection';
import { Book } from "./models/Book";

const main = async () => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books)
}

main();