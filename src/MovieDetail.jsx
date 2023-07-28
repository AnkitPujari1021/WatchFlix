import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
export default function MovieDetail() {
  const [temp, setTemp] = useState([]);
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };
  const { idx } = useParams();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setTemp(response.data?.results);
      })
      .catch(function (error) {
        // console.error(error);
      });
  }, []);
  //   console.log("temp",temp)
  //   console.log("idx",idx)
  let fil = temp?.filter((item, indx) => item?.id === +idx);
  //   console.log("fil",fil)
  return (
    <>
      <div className="Movie">
        <div style={{ marginBottom: "1.3rem" }}>
          <Header />
        </div>
        <div className="MovieImage">
          <img
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              width: "80rem",
              height: "40.75rem",
              flexShrink: "0",
              borderRadius: "1.00494rem",
              // backgroundColor: "#da3714",
            }}
            key={temp?.results?.id}
            // style={{ height: "50vh", width: "100%",opacity:"50%", }}
            src={`https://image.tmdb.org/t/p/w500/${fil?.[0]?.backdrop_path}`}
          />
        </div>
        <p className="MovieTitle">{fil?.[0]?.title}</p>

        
      </div>

      <Footer />
    </>
  );
}
