import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=718e954dd8f241ee9f408e1662752633&q=india")
      .then((response) => {
        // console.log(response);
        setData(response.data.articles)
      })
  }
  return (
    <>
      <div classname="container my-3">
        <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
      </div>


      <div className='container'>
        <div className='row'>
          {
            data.map((value) => {
              return (
                <div className='col-3'>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{value.title}</h5>
                      <p class="card-text">{value.description}</p>
                      <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;