# Project Name: Bookshelf API using Node.js with Hapi

## Description

The **Bookshelf API** project is a RESTful API designed to manage a book collection. It is built using Node.js with the Hapi framework. The primary goal of this project is to provide an interface for creating, retrieving, updating, and deleting books from a bookshelf.

The API allows users to perform various operations, such as adding new books, getting book details, updating book information, and deleting books. It provides endpoints to interact with the book collection and supports CRUD (Create, Read, Update, Delete) operations.

## Features

- **Create Book:** Users can add new books to the bookshelf by providing book details such as title, author, genre, and publication year.
- **Retrieve Book:** The API allows users to retrieve information about a specific book by its unique identifier or fetch a list of all books in the bookshelf.
- **Update Book:** Users can update the information of an existing book, such as modifying the title, author, genre, or publication year.
- **Delete Book:** The API provides an endpoint to delete a book from the bookshelf based on its unique identifier.
- **Validation:** Input data is validated to ensure that the required fields are provided.
- **Error Handling:** The API includes error handling mechanisms to provide meaningful error messages and appropriate HTTP status codes.

## Technologies Used

- Node.js
- Hapi framework
- JavaScript
- npm (Node Package Manager)

## Prerequisites

To run this project locally, ensure you have the following installed:

- Node.js (along with npm)

## Installation

1. Clone the repository:

```bash
https://github.com/indrawijayakusuma/bookShelf.git
```
2. Install dependencies:
```bash
cd bookshelf
npm install
```
3. Run the application:
```bash
npm start
```
4. Access the API:
The API will be available at http://localhost:9000. You can use tools like Postman or curl to interact with the endpoints.

## API Endpoints

The following endpoints are available:

- `GET /books`: Retrieve a list of all books.
- `GET /books/{id}`: Retrieve details of a specific book.
- `POST /books`: Create a new book.
- `PUT /books/{id}`: Update details of a specific book.
- `DELETE /books/{id}`: Delete a specific book.

For detailed information on request and response payloads explore the codebase.
