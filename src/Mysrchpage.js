import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';
import {Link } from 'react-router-dom'
import Mymainpage from './Mymainpage'

class Mysrchpage extends React.Component {
    state = {
        query : '',
        searchedbooks : []
    }

    updatetheQuery = (query) => {
        this.setState({
            query: query
        })
        this.Updatethissearchedbooks(query);
    }

    Updatethissearchedbooks = (query) => {
        if(query){
            BooksAPI.search(query).then((searchedbooks)=> {
                if(searchedbooks.error){
                    this.setState({searchedbooks : []});
                }
                else{
                    this.setState({searchedbooks: searchedbooks});
                }
                
            })  

        }else{
            this.setState({searchedbooks : []})
        }
        
    }

    render(){
        
        if(this.state.query){
            const match = new RegExp(escapeRegex(this.state.query), 'i')
        }
        else{

        } 
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                    to ="/"
                    className="close-search" 
                    >Close</Link>
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input 
                            type="text" placeholder="Search by title or author"
                            value ={this.state.query}
                            onChange={(event) => this.updatetheQuery(event.target.value)}
                            
                            />

                        </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid"> {/*Updating the books from srch page */}
                {
                    this.state.searchedbooks.map(searchedbook => {
                        let shelf ="None";
                        this.props.books.map(book => (
                            book.id === searchedbook.id ? shelf = book.shelf : ''

                        ));
                        return(
                            <li key ={searchedbook.id}>
                                <Book 
                                movetoshelf = {this.props.movebooktothishelf}
                                    book = {searchedbook}
                                    currentshelf = {shelf}
                                />
                            </li>
                        );
                    }
                    )
                }
                </ol>
                </div>
          </div>
        );
    }
}

export default Mysrchpage