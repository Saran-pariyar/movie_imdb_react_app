import React from "react";

const MovieDetail = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const poster_path = "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
  const backdrop_path = "/9JGS0O9wAr7c56VwSEPyeKT6Xac.jpg"
  const belong_to_collection_poster_path = "/jcUXVtJ6s0NG0EaxllQCAUtqdr0.jpg"
  const belong_to_poster_backdrop_path = "/njFixYzIxX8jsn6KMSEtAzi4avi.jpg"
  
  
  return (
    <>
    <div className="flex justify-center my-4">
        {/* saran_78888 is my wifi password */}
      {/* <img
        className="h-3/4 "
        src={API_IMG + backdrop_path}
        alt="backdrop_path"
      />
      <img
        className="h-3/4 "
        src={API_IMG + belong_to_collection_poster_path}
        alt="backdrop_path"
      />
      <img
        className="h-3/4 "
        src={API_IMG + belong_to_poster_backdrop_path}
        alt="backdrop_path"
      />
      <img
        className="h-3/4 "
        src={API_IMG + poster_path}
        alt="p"
      /> */}
<div className="container movie-detail-container">
Make a style object that contains background image with api and put it in useEffect

</div>

    </div>
    </>
  );
};

export default MovieDetail;
