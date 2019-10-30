import axios from "axios";


export default {
  // Gets all books
  getClothes: function() {
    return axios.get("/api/clothes");
  },

  createUser: function(newUser) {
    return axios({
      method: 'post',
      url: "/api/users",
      data: newUser
    })
  },
  logUser: function(userDetails) {
    return axios({
      method: 'post',
      url: "/api/login/",
      data: userDetails
    })
  },
  getTops: function() {
    return axios.get("/api/clothes/tops");
  },
  getShoes: function() {
    return axios.get("/api/clothes/shoes");
  },
  getOuterwear: function() {
    return axios.get("/api/clothes/outerwear");
  },
  getBottoms: function() {
    return axios.get("/api/clothes/bottoms");
  }

  // getAll: function(array) {
  //   return axios
  //     .get("/api/clothes/tops")
  //     .then(res => array.push(res))
  //     .then(axios.get("/api/clothes/shoes").then(res => array.push(res)))
  //     .then(axios.get("/api/clothes/outerwear").then(res => array.push(res)))
  //     .then(axios.get("/api/clothes/bottoms").then(res => array.push(res)));
  // },
  // // Gets the book with the given id
  // searchBook: function(bookTitle) {
  //   return axios.get(
  //     `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=10`
  //   );
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // } hello

};
