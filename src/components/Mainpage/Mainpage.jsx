import React, { useEffect, useState } from "react";

const Mainpage = ({ lang, base, setBase }) => {
 
  const API_KEY = "39c5cc20ab7343b5ae242b9a1141fb55";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBase(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [lang]);

  return (
    <div className="container pt-5">
      <div className="row">
        {base.articles &&
          base.articles.map((article, index) => (
            <div className="col-md-4 " key={index}>
              <div className="card mb-3 border-0 shadow">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt="News"
                  style={{ width: "450px", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <div className="d-flex justify-content-between mt-4">
                    <a href={article.url} className="btn btn-primary">
                      Read More
                    </a>
                    <span>{article.publishedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mainpage;
