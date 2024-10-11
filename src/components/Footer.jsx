import React from 'react';

const Footer = () => {
  return (
    <>
    {/* footers Section Start */}
    <section className="w3l-footers-20">
        <div className="container">
            <div className="d-grid grid-col-3 grids-content1 bottom-border">
                <div className="columns copyright-grid align-self text-center">
                    <p className="copy-footer-29">© 2024 LEOS INTERNATIONAL. All rights reserved</p>
                </div>
            </div>
        </div>
    {/*move top */}
    <button onclick="topFunction()" id="movetop" title="Go to top">
        &#10548;
    </button>
    {/* <script>
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
        scrollFunction()
        };

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
    </script> */}
    {/*/move top */}
    </section>
    </>
  )
}

export default Footer