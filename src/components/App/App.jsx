import style from './App.module.scss'
import api from "../../services/api"
import { Component } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';


class App extends Component {
  constructor(){
    super();
    console.log("CONSTRUCTOR");
  }
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
  };


  formSubmitHandler = data =>{
    console.log(`Datos desde el formulario: ${data}`);
    if(this.state.searchQuery === data){
      return;
    }
    this.resetState();
    this.setState({searchQuery:data})
    
  }

  resetState = ()=> {
    this.setState({
      searchQuery: '',
      images: [],
      page: 1,
      error: null,
      isLoading: false,

    })
  }

  async componentDidUpdate(_, prevState){
    const {searchQuery, page} = this.state;
    if(prevState.searchQuery !== searchQuery || prevState.page !== page){
      this.setState({isLoading: true});
      try{
        const imagesData = await api.fetchImageWithQuery(searchQuery, page);
        const imagesHits = imagesData.hits;
        if(!imagesHits.length){
          Notify.warning("No results were found for your search, please try something else.");
        }
        this.setState(({images})=>({
          images: [...images, ...imagesHits]
        }))
        if (page > 1) {
          const CARD_HEIGHT = 300; // preview image height
          window.scrollBy({
            top: CARD_HEIGHT * 2,
            behavior: 'smooth',
          });
        }
      }catch(error){
        Notify.failure(`Sorry something went wrong. ${error.message}`);
        this.setState({error});
      }finally{
        this.setState({isLoading:false})
      }
    }
  }


  loadMore = () =>{
    this.setState(prevState =>({
      page:prevState.page+1,
    }));
  };

  render(){
    console.log("RENDER");
    return (
      <div className={style['app']}>
        <Searchbar onSubmit={this.formSubmitHandler}/>
        <ImageGallery>
        {this.state.images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                url={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
              />
            ))}
        </ImageGallery>
        {this.state.isLoading && <Loader/>}
        {this.state.images.length !== 0 && <Button onClick={this.loadMore}/>}
      </div>
    )
  }
}

export default App
