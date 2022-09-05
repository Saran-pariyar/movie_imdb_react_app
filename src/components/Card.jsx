import "../style/card.css"


/*
i
: 
{height: 1100, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg', width: 770}
id : "tt1981115"
l :  "Thor: The Dark World"
q :  "feature"
qid : "movie"
rank: 2010

: 
*/
const Card = ({movie}) => {
    return (
        <section className="parent-card-section">
          <div className="card-section">
            <div class="card-container">
              {movie.map((element, index) => {
                return (
                  <div class="card" key={index}>
                    <div class="card-header">
                      <img
                        src={element.i.imageUrl}
                        alt="rover"
                      />
                    </div>
                    <div class="card-body">
                      <span class="tag tag-teal">{element.rank}</span>
                      <h4>{element.l}</h4>
                      <p>{element.qid}</p>
                      <a href={element.url} target="_blank" className="visit-btn">
                        Visit
                      </a>
                      <div class="user">
                        <img
                          src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                          alt="user"
                        />
                        <div class="user-info">
                          <h5>{ element.rank ? element.rank : "Not found"}</h5>
                          <small>{ element.q ? element.q : "Not found"}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="prev_and_next_btn_section">
            <button disabled={page <= 1}>Previous</button>
            <button disabled={page >= 1} onClick={nextPageBtn()}>
              Next
            </button>
          </div> */}
        </section>
      );
    };


export default Card