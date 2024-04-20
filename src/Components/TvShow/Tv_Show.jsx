import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "../Component.css";
const TvShow = () => {
  const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const url = "https://api.themoviedb.org/3";
  const AiringToday = "airing_today";
  const topRated = "top_rated";
  const popular = "popular";
  const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
  const Row = ({ title, arr = [] }) => {
    return (
      <div className="row">
        <h1>{title}</h1>
        <div>
          {arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    );
  };

  const [popularTvSeries, setpopularTvSeries] = useState([]);
  const [AiringTodaySeries, setAiringTodaySeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      const response = await axios.get(
        `${url}/tv/${popular}?api_key=${apiKey}`
      );
      setpopularTvSeries(response.data.results);
    };

    const fetchAiringToday = async () => {
      const response = await axios.get(
        `${url}/tv/${AiringToday}?api_key=${apiKey}`
      );
      console.log("res", response);

      setAiringTodaySeries(response.data.results);
    };
    const fetchTopRated = async () => {
      const response = await axios.get(
        `${url}/tv/${topRated}?api_key=${apiKey}`
      );
      setTopRatedSeries(response.data.results);
    };

    fetchPopular();
    fetchAiringToday();
    fetchTopRated();
  }, []);
  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: popularTvSeries[0]
            ? `url(${`${imgUrl}/${popularTvSeries[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularTvSeries[0] && <h1>{popularTvSeries[0].original_name}</h1>}
        {popularTvSeries[0] && <p>{popularTvSeries[0].overview}</p>}

        <div>
          <button>
            <BiPlay
              style={{
                fontSize: "1.3rem",
                paddingRight: ".5rem",
              }}
            />
            Play
          </button>
          <button className="mylistbtn">
            My List
            <AiOutlinePlus
              style={{ fontSize: "1.3rem", paddingLeft: ".5rem" }}
            />
          </button>
        </div>
      </div>
      <Row title={"Airing Today"} arr={AiringTodaySeries} />
      <Row title={"Popular"} arr={popularTvSeries} />
      <Row title={"Top Rated"} arr={topRatedSeries} />
    </section>
  );
};
export default TvShow;
