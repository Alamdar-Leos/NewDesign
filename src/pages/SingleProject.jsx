import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleProjectTabs from '../components/singleProject/SingleProjectTabs';

const SingleProject = () => {
  return (
    <>
    <section className="w3l-blog">
      <div className="container">
              {/* Testing Tabs Start */}
              <SingleProjectTabs />
              {/* Testing Tabs End */}
        </div>
    </section>
    </>
  );
};

export default SingleProject;
