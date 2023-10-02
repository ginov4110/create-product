import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'

import "../styles/landing-page-style.css"

export default function LandingPage() {
    const navigate= useNavigate()

    const nextPage = () => {
        navigate("/create-product")
    }

  return (
    <>
    <div className="container-fluid">
        <div className="row topHero d-flex flex-row justify-content-around align-items-center p-4">
            <div className="col-5">
                <div className="hero mt-4">
                <h5
                    className="tag-line1"
                >
                    Best Solution For Your Business
                </h5>
                <p
                    className="tag-line2"
                >
                    We are team of talented designers making website with Bootstrap
                </p>
                <Button
                    label= "Get Started"
                    className="btn btn-info text-light"
                    onClick= {nextPage}
                />
                <Button
                    label= "Watch"
                    className="btn btn-dark"
                    style={{ backgroundColor: "transparent" }}
                />
                    </div>
                </div>
                <div className="col-6">
                    <img
                    src="../assets/images/hero-img.png"
                    className="rounded float-end"
                    alt="hero-img"
                    />
                </div>
                </div>
            </div>
            {/* End Hero */}
            {/* Carousel */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                fill="#37517E"
                fillOpacity={1}
                d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,144C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
            </svg>
            <div className="container">
                <div className="row carousel">
                <div className="col">
                    <h2
                    className="fs-2 text-center"
                    >
                    Our Projects
                    </h2>
                    <p
                    className="fs-6 text-center"
                    >
                    Check out our work!
                    </p>
                    <div id="carouselExample" className="carousel slide">
                    <div
                        className="carousel-inner"
                    >
                        <div className="carousel-item active">
                        <img
                            src="../assets/images/project3.png"
                            className="d-block w-100"
                            alt="..."
                        />
                        </div>
                        <div className="carousel-item">
                        <img
                            src="asstes/project4.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        </div>
                        <div className="carousel-item">
                        <img
                            src="asstes/project5.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                fill="#F3F5FA"
                fillOpacity={1}
                d="M0,224L60,229.3C120,235,240,245,360,213.3C480,181,600,107,720,96C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
            </svg>
            {/* End Carousel */}
            {/* Join Section */}
            <div className="joinSection">
                <p>Join Our Newsletter</p>
                <label htmlFor="joinInput" className="join">
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </label>
                <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control textInput"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                />
                <button
                    className="btn btn-info text-light"
                    type="button"
                    id="button-addon1"
                >
                    Subscribe
                </button>
                </div>
            </div>
            {/* Footer */}
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
    </>
  )
}
