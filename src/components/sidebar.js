import { Link } from 'gatsby'
import React from 'react'

import Logo from './profile-photo.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <p>{siteMetadata.description}</p>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contact me</h3>
          <ul>
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
