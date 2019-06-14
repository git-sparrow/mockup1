import React from 'react'
import './App.css'

import img1 from '../src/img/posts/img1.jpg'
import img2 from '../src/img/posts/img2.jpg'
import img3 from '../src/img/posts/img3.jpg'

function App() {
  return (
    <div className="pagge-wrapper container-fluid">
      <header id="header">
        <div className="container">
          <nav className="header-top-line navbar pt-4 px-2">
            <div className="menu">
              <div className="hamburger-menu" />
            </div>
            <div className="search">
              <div className="search-glass" />
              <span className="search-text">Search...</span>
            </div>
          </nav>
          <ul className="social-links">
            <li>
              <a className="social-header dribbble-logo" href="https://dribbble.com/" />
            </li>
            <li>
              <a className="social-header linkedin-logo" href="https://www.linkedin.com/" />
            </li>
            <li>
              <a className="social-header instagram-logo" href="https://www.instagram.com/" />
            </li>
            <li>
              <a className="social-header twitter-logo" href="https://twitter.com/" />
            </li>
          </ul>
          <div className="header-content">
            <h1>constellation</h1>
            <p>If I create from heart, nearly everything works; if from head, almost nothing.</p>
          </div>
        </div>
      </header>

      <main className="main-content container">
        <div className="row">
          <div className="col-3 post">
            <div className="post-card">
              <a className="post-link" href="#">
                <img className="post-card_img" src={img1} alt="1" />
              </a>
            </div>
            <div className="post-info">
              <time className="post-time" dateTime="2014-08-12">
                12 August 2014
              </time>
              <span>/</span>
              <span>1 Comment</span>
            </div>
            <ul className="share-block">
              <li>
                <a className="share mail" href="" />
              </li>
              <li>
                <a className="share facebook" href="" />
              </li>
              <li>
                <a className="share twitter" href="" />
              </li>
            </ul>
          </div>

          <div className="col-3 post">
            <div className="post-card">
              <a className="post-link">
                <img className="post-card_img" src={img2} alt="2" />
              </a>
            </div>
            <div className="post-info">
              <time className="post-time" dateTime="2014-08-12">
                12 August 2014
              </time>
              <span>/</span>
              <span>1 Comment</span>
            </div>
            <ul className="share-block">
              <li>
                <a className="share mail" href="" />
              </li>
              <li>
                <a className="share facebook" href="" />
              </li>
              <li>
                <a className="share twitter" href="" />
              </li>
            </ul>
          </div>

          <div className="col-3 post">
            <div className="post-card">
              <a className="post-link">
                <img className="post-card_img" src="" alt="3" />
              </a>
            </div>
            <div>
              02 August 2014 / <span>1 Comment</span>
            </div>
            <ul className="share-block">
              <li>
                <a className="share mail" href="" />
              </li>
              <li>
                <a className="share facebook" href="" />
              </li>
              <li>
                <a className="share twitter" href="" />
              </li>
            </ul>
          </div>

          <div className="col-3 post">
            <div className="post-card">
              <a className="post-link">
                <img className="post-card_img" src={img3} alt="3" />
              </a>
            </div>
            <div>
              01 August 2014 / <span>3 Comment</span>
            </div>
            <ul className="share-block">
              <li>
                <a className="share mail" href="" />
              </li>
              <li>
                <a className="share facebook" href="" />
              </li>
              <li>
                <a className="share twitter" href="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="loadMorePosts">
          <p>load more posts</p>
        </div>
      </main>

      <footer>
        <div className="container">
          <ul className="social-links ">
            <li>
              <a href="https://dribbble.com/" className="social-footer dribbble-logo" />
            </li>
            <li>
              <a href="https://www.linkedin.com/" className="social-footer linkedin-logo" />
            </li>
            <li>
              <a href="https://www.instagram.com/" className="social-footer instagram-logo" />
            </li>
            <li>
              <a href="https://twitter.com/" className="social-footer twitter-logo" />
            </li>
          </ul>

          <div className="footer-content">
            <p>Made with love at EL Passion 2014</p>
            <p>
              This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives
              4.0 International License.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
