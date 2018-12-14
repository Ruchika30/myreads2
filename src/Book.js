import React from 'react'

import './App.css'

class Book extends React.Component {

        render(){
            let showthumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
            return(
                <div className="book">
                    <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${showthumbnail})` }}>
                          </div>
                        <div className="book-shelf-changer">

                              <select onChange={(event) => this.props.movebooktothishelf(
                                  this.props.book, event.target.value
                              )}
                              value={this.props.currentshelf}
                              >

                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{this.props.book.author}</div>
                 </div>
            );

    }
}
/* To get the book state frorm "Mainpage" to "Book" - this.props.book*/

export default Book;
