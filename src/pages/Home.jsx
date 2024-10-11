import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    {/* Hero Section Start */}
    {/* <section className="w3l-cover-3">
		<div className="cover top-bottom">
			<div className="container">
				<div className="middle-section text-center">
					<div className="section-width">
						<p>Official Partner of </p>
						<h2>AFC BOURNEMOUTH</h2>
						
						<form action="#" className="w3l-cover-3-gd" method="GET">
							<input type="search" name="text" placeholder="Enter keywords" required />
							<span className="input-group-btn">
								<select className="btn btn-default" name="ext" required>
									<option selected="">Office</option>
									<option>Villa</option>
									<option>Apartment</option>
									<option>Private house</option>
									<option>Building</option>
									<option>Shop</option>
									<option>Social housing</option>
									<option>Town house</option>
								</select>
							</span>
							<span className="input-group-btn">
								<select className="btn btn-default" name="ext" required>
									<option selected="">Select Country</option>
									<option>Australia</option>
									<option>London</option>
									<option>India</option>
									<option>Bangladesh</option>
									<option>Saudi Arabia</option>
									<option>America</option>
									<option>Srilanka</option>
								</select>
							</span>
							<button type="submit" className="btn-primary">Search</button>
						</form>
					</div>
					<section id="bottom" className="demo">
						<Link to="#bottom"><span></span>Scroll</Link>
					</section>
				</div>
			</div>
		</div>
	</section> */}
    {/* Hero Section End */}

    <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
            <div className="container pt-lg-5 py-3">
            </div>
        </div>
    </section>

    {/* Projects Listing Start */}
    <section className="locations-1" id="locations">
        <div className="locations py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="heading text-center mx-auto">
                    <h3 className="title-big">OUR PROJECTS</h3>
                </div>
                <div className="heading mx-auto mt-5">
                    <h4 className="title-big">JVC</h4>
                </div>
                <div className="row pt-md-3 pt-3">
                    <div className="col-lg-4 col-md-6">
                        <Link to="/single-property">
                            <div className="box16">
                                <img className="img-fluid" src="/assets/images/p1.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">Hadley Heights</h3>
                                    <span className="post">Hadley Heights - Jumeirah Village Circle - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p2.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS</h3>
                                    <span className="post">Weybridge Gardens - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p3.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">CAVENDISH SQUARE</h3>
                                    <span className="post">Jumeirah Village - Jumeirah Village Triangle - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="heading mx-auto mt-5">
                    <h4 className="title-big">MEYDAN</h4>
                </div>
                <div className="row pt-md-3 pt-3">
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p4.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS 2</h3>
                                    <span className="post">Dubailand, Weybridge Gardens 2 - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p5.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">KNIGHTSBRIDGE EXTERIORS</h3>
                                    <span className="post">meydan district 11 - Nad Al Sheba - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p6.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS 3</h3>
                                    <span className="post">Weybridge Gardens 2, Dubailand, Weybridge Gardens 2 - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="heading mx-auto mt-5">
                    <h4 className="title-big">WEYBRIDGE GARDENS</h4>
                </div>
                <div className="row pt-md-3 pt-3">
                    <div className="col-lg-4 col-md-6">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p1.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">Hadley Heights</h3>
                                    <span className="post">Hadley Heights - Jumeirah Village Circle - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p2.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS</h3>
                                    <span className="post">Weybridge Gardens - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p3.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">CAVENDISH SQUARE</h3>
                                    <span className="post">Jumeirah Village - Jumeirah Village Triangle - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="heading mx-auto mt-5">
                    <h4 className="title-big">HADLEY HEIGHTS</h4>
                </div>
                <div className="row pt-md-3 pt-3">
                    <div className="col-lg-4 col-md-6">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p1.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">Hadley Heights</h3>
                                    <span className="post">Hadley Heights - Jumeirah Village Circle - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p2.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS</h3>
                                    <span className="post">Weybridge Gardens - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p3.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">CAVENDISH SQUARE</h3>
                                    <span className="post">Jumeirah Village - Jumeirah Village Triangle - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p4.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS 2</h3>
                                    <span className="post">Dubailand, Weybridge Gardens 2 - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p5.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">KNIGHTSBRIDGE EXTERIORS</h3>
                                    <span className="post">meydan district 11 - Nad Al Sheba - Dubai</span>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <Link to="/single-property">
                            <div className="box16">
                                {/* <div className="rentext-listing-category"><span>Buy</span><span>Rent</span></div> */}
                                <img className="img-fluid" src="/assets/images/p6.jpg" alt="" />
                                <div className="box-content">
                                    <h3 className="title">WEYBRIDGE GARDENS 3</h3>
                                    <span className="post">Weybridge Gardens 2, Dubailand, Weybridge Gardens 2 - Dubai</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Project Listing End */}

  </>
  )
}

export default Home