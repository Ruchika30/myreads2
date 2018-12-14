import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'
import Mysrchpage from './Mysrchpage';
import Mymainpage from './Mymainpage'

class BooksApp extends React.Component {
 /*  States will be :
 List books , Query, List books(searched) */
  state = {
    books: []
  }

  /* method to fetch any data */
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books})
    })
  }

  movebooktothishelf = (book, shelf) => {
    BooksAPI.update(book, shelf); /* We need to refresh the page if we used only update method*/
    //Hence we call the method again
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books}) ;
    })
  }

  render() {

    return (
      <div className="app">

      <Route exact path="/" render={() => (
        <Mymainpage
            books ={this.state.books}
            //we pass this to mainpage to give it to Book component
            movebooktothishelf = {this.movebooktothishelf}
        />
      )} />

      <Route  path="/search" render={() => (
       <Mysrchpage
          movebooktothishelf = {this.movebooktothishelf}
          books = {this.state.books}
        />
      )} />

      </div>
    )
  }
}

export default BooksApp
