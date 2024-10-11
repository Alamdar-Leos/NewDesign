import React from 'react'

import { Link } from 'react-router-dom';
import WG3GeneralTabsComponent from '../components/wg3/WG3GeneralTabsComponent';
import WG3TestingTabs from '../components/wg3/WG3TestingTabs';


const SingleProject = () => {
  return (
    <>

    <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
            <div className="container pt-lg-5 py-3">
            </div>
        </div>
    </section>

     {/* Search Section Start */}
     <section className="w3l-cover-3">
        <div className="container">
            <div className="section-width">
                <form action="#" className="w3l-cover-3-gd" method="GET">
                    {/* <input type="search" name="text" placeholder="Enter keywords" required /> */}
                    <span className="input-group-btn">
                        <select className="btn btn-default" name="ext" required>
                            <option selected="">Room</option>
                            <option>Studio</option>
                            <option>1 Bedroom</option>
                            <option>2 Bedroom</option>
                            <option>3 Bedroom</option>
                            <option>4 Bedroom</option>
                            <option>5 Bedroom</option>
                            <option>6 Bedroom</option>
                        </select>
                    </span>
                    <span className="input-group-btn">
                        <select className="btn btn-default" name="ext" required>
                            <option selected="">Units</option>
                            <option>201 Studio</option>
                            <option>202 1 Bedroom</option>
                            <option>203 3 Bedroom</option>
                            <option>204 4 Bedroom</option>
                            <option>205 2 Bedroom</option>
                            <option>206 6 Bedroom</option>
                            <option>207 5 Bedroom</option>
                        </select>
                    </span>
                    <span className="input-group-btn">
                        <select className="btn btn-default" name="ext" required>
                            <option selected="">Select Country</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>New Zealand</option>
                            <option>China</option>
                        </select>
                    </span>
                    <button type="submit" className="btn-primary">Search</button>
                </form>
            </div>
        </div>
	</section>
    {/* Search Section End */}

    <section className="w3l-blog post-content py-5">
        <div className="container py-lg-4 py-md-3 py-2">
            <div className="post-content mb-5">
                <h2 className="title-single text-center">WEYBRIDGE GARDENS 3</h2>
            </div>
            <div className="row">
                <div className="col-lg-12 w3l-news">
                    <div className="blog-single-post">
                        
                        {/* Testing Tabs Start */}
                        {/* <WG3TestingTabs /> */}
                        {/* Testing Tabs End */}

                        {/* Component of WG3 General Tabs Start */}
                        <WG3GeneralTabsComponent />
                        {/* Component of WG3 General Tabs End */}

                        

                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default SingleProject;