import { useEffect } from "react";
import logo from "../../assets/images/bbs.svg";
import "./Header.css";

const Header = ({ lang, base, setBase }) => {
  const API_KEY = "39c5cc20ab7343b5ae242b9a1141fb55";

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    const result = evt.target.elements.news.value;
    fetch(
      `https://newsapi.org/v2/everything?q=${result}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBase(data);
      })
      .catch((error) => {
        console.error(error);
      });
      evt.target.elements.news.value = ""
  };

  const handleSelect = (evt) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${evt.target.value}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBase(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCategory = (evt) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${lang}&category=${evt.target.id}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBase(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="py-3 shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo">
              <img src={logo} alt="logo" width="100px" />
            </a>
            <nav className="header-menu">
              <ul className="menu d-flex align-items-center gap-5">
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    href="#"
                    id=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    href="#"
                    id="business"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    id="sports"
                  >
                    Sport
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    id="technology"
                    href="#"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    id="science"
                    href="#"
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    id="health"
                    href="#"
                  >
                    Health
                  </a>
                </li>
                <li>
                  <a
                    onClick={(evt) => handleCategory(evt)}
                    className="nav-link"
                    id="entertainment"
                    href="#"
                  >
                    Entertainment
                  </a>
                </li>
              </ul>
            </nav>
            <form onSubmit={(evt) => handlerSubmit(evt)}>
              <div className="input-box">
                <input
                  className="input"
                  name="news"
                  type="search"
                  placeholder="Search ...."
                />
                <button type="submit" className="news-btn">
                  Search
                </button>
              </div>
            </form>
            <select
              onChange={(evt) => handleSelect(evt)}
              className="custom-select "
            >
              <option value="ru">Russia</option>
              <option value="us">USA</option>
              <option value="fr">Frans</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
