import React from 'react'

const Header = () => {
  return (
    <>
    {/* Header Section Start */}
    <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg stroke px-0">
                <h1><a className="navbar-brand" href="/">
                        {/* <span className="fa fa-home"> LEOS</span> INTERNATIONAL */}
                        <span><img src="../assets/images/logo.png" /></span>
                    </a></h1>
                    {/* if logo is image enable this   
                    <a className="navbar-brand" href="#index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                    </a> */}
                <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-lg-5 mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item @@listing__active">
                            <a className="nav-link" href="listing.html">Listing</a>
                        </li>
                        <li className="nav-item dropdown @@property__active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Property <span className="fa fa-angle-down"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item @@ps__active" href="property-single.html">Single property</a>
                            </div>
                        </li>
                    </ul>
                    {/* <div className="top-quote mt-lg-0">
                        <a href="#buytheme" className="btn btn-style btn-primary"><span className="fa fa-home"></span> Add
                            listiing</a>
                    </div> */}
                    {/*/search-right*/}
                    {/* <div className="search mx-3">
                        <input className="search_box" type="checkbox" id="search_box" />
                        <label className="fa fa-search" for="search_box"></label>
                        <div className="search_form">
                            <form action="error.html" method="GET">
                                <input type="text" placeholder="Search" />
                                <input type="submit" value="search" />
                            </form>
                        </div>
                    </div> */}
                    {/*//search-right*/}
                </div>

                {/* toggle switch for light and dark theme */}
                {/* <div className="mobile-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div> */}
                {/* //toggle switch for light and dark theme */}
            </nav>
        </div>
    </header>
    {/* Header Section  End */}
    </>
  )
}

export default Header