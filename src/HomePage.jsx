import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TrendingSection from "./TrendingSection";
import { tempArr } from "./res";
import Carousel from "./Carousel";
import Carousel_medium from "./Carousel";
import StarRating from "./starRating";
import ReactPlayer from "react-player";
import Dashboard from "./Dashboard";
export default function HomePage() {
  const [temp, setTemp] = useState([]);
  //   let prefix = "https://image.tmdb.org/t/p/w500/"

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setTemp(response.data.results);
      })
      .catch(function (error) {
        // console.error(error);
      });
  }, []);

  // console.log(tempArr[0].results)

  useEffect(() => {
    setTemp(tempArr[0].results);
  }, []);

  //   setTemp(tempArr[0].results);
  return (
    <div>
      <Carousel_medium temp={temp} />
      <TrendingSection temp={temp} />
    </div>
  );
}
