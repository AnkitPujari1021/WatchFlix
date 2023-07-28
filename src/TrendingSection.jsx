import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";
export default function TrendingSection({ temp }) {
  // console.log("props",props);
  // let imageURL=

  const navigate = useNavigate();

  return (
    <>
      {/* <div style={{width:"100vw",boxSizing:"border-box",overflow:"scroll"}}> */}
      <div
        style={{
          //   marginTop: "200px",
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          // paddingTop: "2rem",
          paddingLeft: "2rem",
          // width:"100vw",
          // boxSizing:"border-box"
          //   height:"100%",
          //   position: "fixed",
          //   overflow:"scroll"
        }}
      >
        <span>Trending Now</span>
      </div>
      <div className="TrendingOuterContainer">
        {temp?.map((movie, index) => {
          return (
            <div class="container">
              {/* <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;"> */}

              <div>
                <img
                  className="trendingImage"
                  key={index}
                  style={{
                    border: "5px solid black",
                    borderRadius: "5px",
                    objectFit: "cover",
                    height: "13.54975rem",
                    width: "9.14331rem",
                  }}
                  onClick={() => {navigate(`/movies/${movie?.id}`)}}
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
