import axios from "axios";


export default {

  // Gets all
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
  },

  // Get one
  getTopById: function(id) {
    return axios.get(`/api/clothes/tops/${id}`);
  },
  getShoeById: function(id) {
    return axios.get(`/api/clothes/shoes/${id}`);
  },
  getOneOuterwearById: function(id) {
    return axios.get(`/api/clothes/outerwear/${id}`);
  },
  getBottomById: function(id) {
    return axios.get(`/api/clothes/bottoms/${id}`);
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
