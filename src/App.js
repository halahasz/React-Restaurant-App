/* eslint-disable object-curly-newline */
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context';
import MenuPage from './pages/MenuPage/MenuPage';
import NewsPage from './pages/NewsPage/NewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import soupImage from './assets/img/soup.jpg';
import friesImage from './assets/img/fries.jpg';

class App extends React.Component {
  state = {
    menu: [],
    news: [],
    gallery: [],
    isModalOpen: false,
    activeType: '',
  };

  componentDidMount() {
    this.initMenu();
    this.initNews();
    this.initGallery();
  }

  initMenu = () => {
    const init = [
      {
        title: 'Creamy roasted beetroot soup with pear',
        price: '14zl',
        image: soupImage,
        ingredients: 'vegan cream, toasted pumpkin seeds',
      },
      {
        title: 'Herbal polenta fries',
        price: '12zl',
        image: friesImage,
        ingredients: 'mayo dip',
      },
    ];
    const data = (() => {
      if (sessionStorage.menu != null) {
        return JSON.parse(sessionStorage.menu);
      }
      return init;
    })();

    this.setState({ menu: data });
  };

  initNews = () => {
    const data = (() => {
      if (sessionStorage.news != null) {
        return JSON.parse(sessionStorage.news);
      }
      return [];
    })();

    this.setState({ news: data });
  };

  initGallery = () => {
    const data = (() => {
      if (sessionStorage.gallery != null) {
        return JSON.parse(sessionStorage.gallery);
      }
      return [];
    })();

    this.setState({ gallery: data });
  };


  addItem = (e, newItem) => {
    e.preventDefault();
    const { activeType, menu, news, gallery } = this.state;
    this.setState((prevState) => ({
      [activeType]: [...prevState[activeType], newItem],
    }));
    this.closeModal();
    if (activeType === 'menu') {
      sessionStorage.menu = JSON.stringify([
        ...menu,
        newItem,
      ]);
    } if (activeType === 'news') {
      sessionStorage.news = JSON.stringify([
        ...news,
        newItem,
      ]);
    } if (activeType === 'gallery') {
      sessionStorage.gallery = JSON.stringify([
        ...gallery,
        newItem,
      ]);
    }
  };

  setActiveType = (type) => {
    this.setState({
      activeType: type,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      setActiveType: this.setActiveType,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={MenuPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/gallery" component={GalleryPage} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
