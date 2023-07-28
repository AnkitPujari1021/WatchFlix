import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ReactPlayer from "react-player";
import { useState } from "react";
import { CloseButton } from "@chakra-ui/react";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Carousel_medium({ temp }) {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [isPlaying, setIsPlaying] = useState(false);
  //
  return (
    <Carousel showThumbs={false} showIndicators={false}>
      {/* <div> */}
      {temp?.map((movie, index) => {
        return (
          <div
            key={index}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              // width: "83.90625rem",
              // height: "41.76563rem",
            }}
          >
            <div
              style={{
                zIndex: "1500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            >
              {isPlaying && (
                <ReactPlayer
                  width="83.90625rem"
                  height="42.96563rem"
                  playing={false}
                  controls={true}
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4"
                />
              )}
              {isPlaying && (
                <CloseButton
                  className="closeButton"
                  style={{}}
                  onClick={() => setIsPlaying(false)}
                />
              )}
            </div>

            <div
              className="descriptionTitle"
              style={{
                gap: "10px",
                visibility: isPlaying ? "hidden" : "visible",
              }}
            >
              <div className="CarouselImage">
                <img
                  key={index}
                  // style={{ height: "50vh", width: "100%",opacity:"50%", }}
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
              </div>
              
                <div>
                  <p className="title">{movie.title}</p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ position: "absolute", top: "10em" }}>
                    <p className="description">{movie.overview}</p>
                  </div>
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      position: "absolute",
                      top: "19rem",
                      left: "3rem",
                      width: "8.78125rem",
                      height: "1.64063rem",
                      flexShrink: "0",
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={movie?.vote_average / 2}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{
                            backgroundColor: "grey",
                            borderRadius: "12px",
                          }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Box sx={{ ml: 2 }}>{labels[movie?.vote_average / 2]}</Box>
                  </Box>
                </div>

                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap :"100px",
                    // top: "22rem",
                    // left: "8rem",
                    // // backgroundColor: "grey",
                    // // borderRadius: "50%",
                    // width: "5.88rem",
                    // // border: "1px solid black",
                    // borderRadius: "10px",
                  }}
                >
                  <div
                    className="PlayButton"
                    style={{
                      position: "absolute",
                      // display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "22rem",
                      left: "1.24rem",
                      // backgroundColor: "grey",
                      // borderRadius: "50%",
                      // width: "5.88rem",
                      // height:"3.5rem",
                      // border: "1px solid black",
                      borderRadius: "1.6875rem",
                    }}
                    onClick={() => setIsPlaying(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        d="M14.75 7.70096C15.75 8.27831 15.75 9.72169 14.75 10.299L2.375 17.4438C1.375 18.0211 0.125 17.2994 0.125 16.1447L0.125 1.85529C0.125 0.700587 1.375 -0.0210977 2.375 0.556252L14.75 7.70096Z"
                        fill="white"
                      />
                    </svg>
                    <p style={{ padding: "4px" }}>Watch</p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "22rem",
                      left: "14.14rem",
                      // backgroundColor: "grey",
                      // borderRadius: "50%",
                      // width: "5.88rem",
                      // border: "1px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="plusButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_170)">
                          <path
                            d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_170">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0.75 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p
                      style={{
                        color: "#FFF",
                        fontFamily: "Overpass",
                        fontSize: "0.9375rem",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "1.5rem" /* 160% */,
                        letterSpacing: "0.02813rem",
                      }}
                    >
                      WatchList
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "22rem",
                      left: "20.64rem",
                      // backgroundColor: "grey",
                      // borderRadius: "50%",
                      // width: "5.88rem",
                      // border: "1px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="shareButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_176)">
                          <path
                            d="M17.7408 21.3255L12.0933 18.2453C11.5512 18.7834 10.8619 19.149 10.1123 19.2959C9.36274 19.4429 8.58644 19.3646 7.88129 19.071C7.17614 18.7774 6.5737 18.2816 6.14992 17.6461C5.72614 17.0106 5.5 16.2638 5.5 15.5C5.5 14.7362 5.72614 13.9894 6.14992 13.3539C6.5737 12.7184 7.17614 12.2226 7.88129 11.929C8.58644 11.6354 9.36274 11.5571 10.1123 11.7041C10.8619 11.851 11.5512 12.2166 12.0933 12.7547L17.7408 9.67453C17.5471 8.76576 17.687 7.81765 18.1349 7.00355C18.5828 6.18946 19.3088 5.56379 20.1801 5.24097C21.0514 4.91814 22.0098 4.91973 22.88 5.24545C23.7502 5.57116 24.4741 6.19923 24.9193 7.01481C25.3645 7.83038 25.5012 8.77896 25.3045 9.68707C25.1078 10.5952 24.5908 11.4022 23.848 11.9604C23.1052 12.5186 22.1863 12.7909 21.2593 12.7273C20.3323 12.6637 19.4592 12.2686 18.7996 11.6141L13.152 14.6943C13.2647 15.2255 13.2647 15.7745 13.152 16.3057L18.7996 19.3859C19.4592 18.7314 20.3323 18.3363 21.2593 18.2727C22.1863 18.2091 23.1052 18.4814 23.848 19.0396C24.5908 19.5978 25.1078 20.4048 25.3045 21.3129C25.5012 22.221 25.3645 23.1696 24.9193 23.9852C24.4741 24.8008 23.7502 25.4288 22.88 25.7546C22.0098 26.0803 21.0514 26.0819 20.1801 25.759C19.3088 25.4362 18.5828 24.8105 18.1349 23.9964C17.687 23.1824 17.5471 22.2342 17.7408 21.3255Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_176">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0.25 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p
                      style={{
                        color: "#FFF",
                        fontFamily: "Overpass",
                        fontSize: "0.9375rem",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "1.5rem",
                        letterSpacing: "0.02813rem",
                      }}
                    >
                      Share
                    </p>
                  </div>
                </div>
              
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
