import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link } from 'react-router-dom'
import Book from './Book';


class Mymainpage extends React.Component {
    render(){
        console.log(this.props.books);  /*Books prop being taken from App.js */
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                         .filter(book => book.shelf === 'wantToRead')
                         /*For each element of this newly created array we will create li*/
                         .map(book => (
                                    <li key = {book.id}>
                                        <Book
                                        book= {book}
                                        movebooktothishelf ={this.props.movebooktothishelf}
                                        currentshelf="wantToRead"
                                        />  {/* book property being passed to Book Component*/}
                                    </li>
                            ))
                    }

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                         .filter(book => book.shelf === 'currentlyReading')
                         /*For each element of this newly created array we will create li*/
                         .map(book => (
                                    <li key = {book.id}>
                                       <Book
                                        book= {book}
                                        movebooktothishelf ={this.props.movebooktothishelf}
                                        currentshelf="currentlyReading"
                                        />  {/* book property being passed to Book Component*/}

                                    </li>
                            ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                         .filter(book => book.shelf === 'read')
                         /*For each element of this newly created array we will create li*/
                         .map(book => (
                                    <li key = {book.id}>
                                       <Book
                                        book= {book} /* book property being passed to Book Component*/
                                        movebooktothishelf ={this.props.movebooktothishelf}
                                        currentshelf="read"
                                    />
                                    </li>
                            ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
              to="search"><button>Add a book</button>
              </Link>
            </div>
          </div>

        );
    }
}


export default Mymainpage;
