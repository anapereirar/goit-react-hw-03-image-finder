import React, { Component } from 'react'
import css from './Searchbar.module.scss'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class Searchbar extends Component {
    constructor(){
        super()
    }

    state = {
      searchQuery: ''
    };

    handleChange = event => {
      this.setState({searchQuery: event.target.value.toLowerCase()})
      // const {searchQuery, value} = event.currentTarget;
      // this.setState({[searchQuery]:value})
    }

    handleSubmit = event => {
      event.preventDefault();
      // console.log(`Search Query: ${this.state.searchQuery}`);
      if(this.state.searchQuery.trim() === ''){
        Notify.warning("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      this.props.onSubmit(this.state.searchQuery)
      this.reset();
    }

    reset = ()=>{
      this.setState({searchQuery: ''})
    };

  render() {
    const { searchQuery } = this.state;
    return (
        <header className={css["searchbar"]} onSubmit={this.handleSubmit}>
        <form className={css["searchForm"]}>
          <button type="submit" className={css["searchForm-button"]}>
          <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 32 32"
            >
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
            <span className={css["searchForm-button-label"]}>Search</span>
          </button>
      
          <input
            className={css["searchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar