import axios from "axios";

export default {
  getBooks: () => {
    console.log("searching title 1");
    return axios.get("/api/books");
  },
  searchBooks: title => {
    console.log("searching title " + title);
    return axios.post("/search", { title: title });
  },
  addBookToDB: bookData => {
    return axios.post("/api/books", bookData);
  },
  deleteBook: id => {
    return axios.delete(`/api/books/${id}`);
  }
};
