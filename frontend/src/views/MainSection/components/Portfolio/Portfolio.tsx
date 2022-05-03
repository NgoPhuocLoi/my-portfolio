import React from 'react'
import "./Portfolio.scss"
import projectThumb from "../../../../assets/images/about01.png"

const Portfolio = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="section-title padd-15">
                <h2>Portfolio</h2>
            </div>
        </div>
        <div className="row">
            <div className="portfolio-heading">
                <h2>My Last Project: </h2>
            </div>
        </div>

        <div className="row">
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={projectThumb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio