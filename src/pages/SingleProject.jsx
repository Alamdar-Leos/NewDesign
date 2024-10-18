import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WG3TestingTabs from '../components/wg3/WG3TestingTabs';

const SingleProject = () => {
  return (
    <>
    
      <section className="w3l-blog py-3">
        <div className="container py-lg-4 py-md-3 py-2 mb-5">
          <div className="post-content mb-4">
            <h2 className="title-single heading-gold text-center">WEYBRIDGE GARDENS 3</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
                {/* Testing Tabs Start */}
                <WG3TestingTabs />
                {/* Testing Tabs End */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
