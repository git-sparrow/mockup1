import React from 'react'
import './App.scss'

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
            <a className="post-card" href="#">
              <img className="post-card_img" src={img1} alt="1" />
            </a>
            <hr />
            <div className="post-footer">
              <div className="post-footer_info">
                <time className="post-time" dateTime="2014-08-12">
                  12 August 2014
                </time>
                <span>/</span>
                <span className="post-comment">3 Comment</span>
              </div>
              <div className="share-block">
                <ul className="share-block_list">
                  <li>
                    <a className="share mail" href="https://www.google.com/gmail/" />
                  </li>
                  <li>
                    <a className="share facebook" href="https://www.facebook.com/" />
                  </li>
                  <li>
                    <a className="share twitter" href="https://twitter.com/" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3 post">
            <a className="post-card" href="/">
              <img className="post-card_img" src={img2} alt="2" />
            </a>
            <hr />
            <div className="post-footer">
              <div className="post-footer_info">
                <time className="post-time" dateTime="2014-08-12">
                  12 August 2014
                </time>
                <span>/</span>
                <span className="post-comment">1 Comment</span>
              </div>
              <div className="share-block">
                <ul className="share-block_list">
                  <li>
                    <a className="share mail" href="https://www.google.com/gmail/" />
                  </li>
                  <li>
                    <a className="share facebook" href="https://www.facebook.com/" />
                  </li>
                  <li>
                    <a className="share twitter" href="https://twitter.com/" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3 post">
            <a className="post-card" href="#">
              <div className="post-card_description">
                <span className="post-card_description_hashtag">#design #inspirations</span>
                <span className="post-card_description_description">
                  However beautiful the strategy, you should occasionally look at the results.
                </span>
              </div>
            </a>
            <hr />
            <div className="post-footer">
              <div className="post-footer_info">
                <time className="post-time" dateTime="2014-08-12">
                  12 August 2014
                </time>
                <span>/</span>
                <span className="post-comment">7 Comment</span>
              </div>
              <div className="share-block">
                <ul className="share-block_list">
                  <li>
                    <a className="share mail" href="https://www.google.com/gmail/" />
                  </li>
                  <li>
                    <a className="share facebook" href="https://www.facebook.com/" />
                  </li>
                  <li>
                    <a className="share twitter" href="https://twitter.com/" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3 post">
            <a className="post-card" href="">
              <img className="post-card_img" src={img3} alt="3" />
            </a>
            <hr />
            <div className="post-footer">
              <div className="post-footer_info">
                <time className="post-time" dateTime="2014-08-12">
                  12 August 2014
                </time>
                <span>/</span>
                <span className="post-comment">12 Comment</span>
              </div>
              <div className="share-block">
                <ul className="share-block_list">
                  <li>
                    <a className="share mail" href="https://www.google.com/gmail/" />
                  </li>
                  <li>
                    <a className="share facebook" href="https://www.facebook.com/" />
                  </li>
                  <li>
                    <a className="share twitter" href="https://twitter.com/" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr />
          <div className="loadMorePosts">
            <button>
              <p>load more posts</p>
            </button>
          </div>
          <hr />
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
