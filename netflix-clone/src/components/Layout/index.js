import React, { useEffect, useState } from 'react';

import api from '../../Services/api';

import Header from '../Header';
import FeaturedMovie from '../FeaturedMovie';
import MovieRow from '../MovieRow';
import Footer from '../Footer';
import Loading from '../Loading';

function Layout() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
      const loadAll = async () => {
        //Pegando a lista todal
        let list = await api.getHomeList();
        setMovieList(list)

        //Pegando o Featured
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

        setFeaturedData(chosenInfo);
      }
  
      loadAll();
    }, []);

    useEffect(() => {
      const scrollListener = () => {
        if (window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
      }
      window.addEventListener('scroll', scrollListener);

      const removescrollListener = () => {
        window.removeEventListener('scroll', scrollListener);
      }

      return removescrollListener;
    }, []);
  
    return (
      <div className="page">

        <Header black={blackHeader} />

        {featuredData && 
          <FeaturedMovie item={featuredData} />
        }

        <section className="lists" style={{marginTop: '-150px'}}>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>

        <Footer />

        {/*LOADING*/}

        {movieList.length <= 0 &&
          <Loading />
        }
        
      </div>
  );
}

export default Layout;