import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(({ slug }) => slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData
      && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map(({ title, items }) => (
          <MovieRow key={title} title={title} items={items} />
        ))}
      </section>
    </div>
  );
}

export default App;
