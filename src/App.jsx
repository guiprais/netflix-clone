import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(({ slug }) => slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map(({ title, items }) => (
          <MovieRow key={title} title={title} items={items} />
        ))}
      </section>

      <footer>
        Feito com
        {' '}
        <span role="img" aria-label="coração">❤️</span>
        {' '}
        pela B7Web e @guiprais
        <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos no site Themoviedb.org
      </footer>

      {movieList.length <= 0
            && (
            <div className="loading">
              <img
                src="https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif"
                alt="Carregando"
              />
            </div>
            )}

    </div>
  );
}

export default App;
