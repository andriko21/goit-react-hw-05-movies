import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import {NavLink} from 'react-router-dom'
import { fetchByTrends } from "../../helpers/api";


const Home = () => {

const [TrendsFilmsList, setTrendsFilmsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const objectTrendsFilmsList = await (await fetchByTrends()).data.results;
        setTrendsFilmsList(objectTrendsFilmsList)
      } catch {
        console.log("error");
      }
    })();
  }, []);

  return (
    <>
      <h1 className={style.title}>Treending news</h1>
      <ul className={style.list}>
        {TrendsFilmsList && TrendsFilmsList.map((film) => (
          <li className={style.item} key={film.id}>
            <NavLink to={`/movie/${film.id}`} className={style.link}>
               <span className={style.span_content}>{film.title ?? film.name}</span>
            </NavLink>
          </li>
        ))} 
      </ul>
    </>
  );
};
export default Home;
