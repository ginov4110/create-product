import React from 'react'

export default function Footer() {
  return (
    <>
  <div className="footer1">
    <div className="row d-flex justify-content-between">
      <div className="col-3">
            <p className="footerTitle" style={{ fontWeight: 800 }}>
            ARSHA
            </p>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <br />
            <br />
            <p>
            <strong>Phone: </strong>+1 5589 55488 55
            </p>
            <p>
            <strong>Email: </strong>info@example.com
            </p>
        </div>
        <div className="col-3">
            <p className="footerTitle">Useful Links</p>
            <a href="#" className="footerItems">
            Home
            </a>
            <br />
            <a href="#" className="footerItems mt-5">
            About us
            </a>
            <br />
            <a href="#" className="footerItems mt-5">
            Services
            </a>
            <br />
            <a href="#" className="footerItems mt-5">
            Term of service
            </a>
            <br />
            <a href="#" className="footerItems mt-5">
            Privacy policy
            </a>
        </div>
        <div className="col-3">
            <p className="footerTitle">Our Services</p>
            <a href="#" className="footerItems">
            Web Design
            </a>
            <br />
            <a href="#" className="footerItems">
            Web Developement
            </a>
            <br />
            <a href="#" className="footerItems">
            Product Management
            </a>
            <br />
            <a href="#" className="footerItems">
            Marketing
            </a>
            <br />
            <a href="#" className="footerItems">
            Graphic Design
            </a>
        </div>
        <div className="col-3">
            <p className="footerTitle">Our Social Network</p>
            <p className="footerItems">
            Cras frementum odio eu feugiat lide par naso tierra videa magna derita
            valies
            </p>
            <div className="cover">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            </div>
        </div>
        </div>
    </div>
    {/* End Footer1 */}
    {/* Footer2 */}
    <footer>
        <div className="footer2">
        <p>
            Copyright <b style={{ fontWeight: 700 }}>Arsha</b>. All Rights Reserved
        </p>
        <p>
            Designed by <a href="">BootstrapMade</a>
        </p>
        </div>
    </footer>
    </>

  )
}
