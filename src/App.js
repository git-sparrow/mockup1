import React from 'react'
import './App.scss'

import img1 from '../src/img/posts/img1.jpg'
import img2 from '../src/img/posts/img2.jpg'
import img3 from '../src/img/posts/img3.jpg'

function App() {
  function handleSidebarCollapse() {
    const element = document.getElementById('sidebar')
    if (element.style.left === '0px') {
      element.style.left = '-540px'
    }
    element.style.left = '0px'
  }

  function handleSidebarClose() {
    const element = document.getElementById('sidebar')
    element.style.left = '-540px'
  }

  function handleSearchClick() {
    const overlay = document.getElementById('page-overlay')
    overlay.style.opacity = '0.9'
    overlay.style.display = 'block'
    const searchModal = document.getElementById('search-modal')
    searchModal.style.display = 'flex'
  }

  function handleCloseSearch() {
    const overlay = document.getElementById('page-overlay')
    overlay.style.opacity = '0'
    overlay.style.display = 'none'
    const searchModal = document.getElementById('search-modal')
    searchModal.style.display = 'none'
  }

  return (
    <div className="pagge-wrapper container-fluid">
      <header id="header">
        <div className="container">
          <nav className="header-top-line navbar pt-4 px-2">
            <div className="menu">
              <button className="hamburger-menu" type="button" onClick={handleSidebarCollapse} />
            </div>
            <button className="search" type="button" onClick={handleSearchClick}>
              <div className="search-glass" />
              <span className="search-text">Search...</span>
            </button>
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
            <p>
              If I create from heart, nearly everything works; if from the head, almost nothing.
            </p>
          </div>
        </div>
      </header>

      <aside className="sidebar" id="sidebar">
        <button className="closeSidebar" type="button" onClick={handleSidebarClose} />
        <div className="sidebarContentWrapper">
          <div className="sidebar-info">
            <h5 className="sidebar-info_greeting">Hello,</h5>
            <p className="sidebar-info_text">
              Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in,
              dolor.
            </p>
            <p className="sidebar-info_text">
              Pellentesque facilisis.
              <br />
              Nulla imperdiet sit amet magna.
            </p>
            <div className="share-block">
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
            </div>
          </div>
          <hr />
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
              <li>
                <a href="#">Galery</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="main-content container">
        <div className="content row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="/">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
              <div className="post-card_description">
                <span className="post-card_description_hashtag">#design #inspirations</span>
                <span className="post-card_description_text">
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="/">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
              <div className="post-card_description">
                <span className="post-card_description_hashtag">#design #inspirations</span>
                <span className="post-card_description_text">
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="/">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="#">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
              <div className="post-card_description">
                <span className="post-card_description_hashtag">#design #inspirations</span>
                <span className="post-card_description_text">
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

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 post">
            <a className="post-card" href="">
              <div className="post-card_overlay">
                <span className="hashtag">#design #inspirations</span>
                <span className="viewGallery">View Gallery</span>
              </div>
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

        <div className="loadBlock">
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

      <div className="page-overlay" id="page-overlay" />

      <div className="search-modal" id="search-modal">
        <span className="search-modal_input_glass" />
        <input className="search-modal_input" type="search" placeholder="Type something..." />
        <button className="search-modal_button" type="button" onClick={handleCloseSearch} />
      </div>
    </div>
  )
}

export default App
