import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
}  from "./layout.module.css"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    return (
    <div className= {container}>
        <StaticImage src='../images/icon.png' width={100} />
        <nav>
            <ul className= {navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Mi Blog</Link></li>
                <li className={navLinkItem}><Link to="/SobreMi" className={navLinkText}>Sobre Mi</Link></li>
                <li className={navLinkItem}><a href='https://github.com/danieltandem' className={navLinkText}>GitHub</a></li>
            </ul>
        </nav>
        <main>
            <h1 className= {heading}>{pageTitle}</h1>
            {children}
        <footer>
        <p className='footer'>&copy; danieltandem {new Date().getFullYear()} </p> 
        </footer>
        </main>
    </div>

    )
}


export default Layout


