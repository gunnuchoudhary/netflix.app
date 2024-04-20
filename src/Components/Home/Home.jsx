import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Component.css";

const Home = () => {
  const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const url = "https://api.themoviedb.org/3";
  const upcoming = "upcoming";
  const topRated = "top_rated";
  const nowPlaying = "now_playing";
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

  const [PopularMovies, setPopularMovies] = useState([]);

  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await axios.get(
        `${url}/movie/${popular}?api_key=${apiKey}`
      );
      setPopularMovies(response.data.results);
    };

    const fetchUpcoming = async () => {
      const response = await axios.get(
        `${url}/movie/${upcoming}?api_key=${apiKey}`
      );
      setUpcomingMovies(response.data.results);
    };
    const fetchTopRated = async () => {
      const response = await axios.get(
        `${url}/movie/${topRated}?api_key=${apiKey}`
      );
      setTopRatedMovies(response.data.results);
    };
    const fetchNowPlaying = async () => {
      const response = await axios.get(
        `${url}/movie/${nowPlaying}?api_key=${apiKey}`
      );
      setNowPlayingMovies(response.data.results);
    };
    
    fetchPopular();
    fetchUpcoming();
    fetchTopRated();
    fetchNowPlaying();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: PopularMovies[0]
            ? `url(${`${imgUrl}/${PopularMovies[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {PopularMovies[0] && <h1>{PopularMovies[0].original_title}</h1>}
        {PopularMovies[0] && <p>{PopularMovies[0].overview}</p>}

        <div>
          <button>
            <BiPlay style={{ fontSize: "1.3rem", paddingRight: ".5rem" }} />
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
      <Row title={"Upcoming"} arr={UpcomingMovies} />
      <Row title={"Now Playing"} arr={NowPlayingMovies} />
      <Row title={"Popular"} arr={PopularMovies} />
      <Row title={"Top Rated"} arr={TopRatedMovies} />
    </section>
  );
};
export default Home;
