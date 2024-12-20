import "../Styles/Hero.css";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HeroSection = () => {
  return (
    <>
     <div className="hero-section"> 
            <h1 className="main-heading">Revolutionizing Oral Care with Premium Onsite Dental Solutions</h1>
              {/* <img className="dental-image" alt="dental" src="https://odoutor.com.br/wp-content/uploads/2023/05/Especialidades-12.png.webp"/> */}
      </div>
     
    <Carousel  showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              interval={3000}
              transitionTime={500}
              stopOnHover={true}
              showIndicators={false}
              >
                <div>
                    <img className="carousel-image" alt="AI" src="https://supplydoc.com/cdn/shop/articles/oral-health-trends-2024-whats-next-for-dental-practices-962593.webp?v=1705941601&width=1100" />
                    <div className="carousel-caption">
                    <p>AI-Powered Diagnostics</p>
                  </div>
                </div>
                <div>
                    <img className="carousel-image" alt="Treat" src="https://thornhilldental.ca/wp-content/uploads/2020/08/dental-treatment.jpg" />
                    <div className="carousel-caption">
                    <p className="legend-1">Aesthetic Treatments</p>
                    </div>
                </div>
                <div>
                    <img className="carousel-image" alt="school" src="https://www.canyoncreekortho.com/wp-content/uploads/2023/04/man-doctor-is-giving-hi-five-to-little-girl-after-a-successful-dental-examination--1536x1024.jpg" />
                    <div className="carousel-caption">
                    <p >Seamless Onsite
                    Services for Schools</p>
                    </div>
                </div>
                <div>
                    <img className="carousel-image" alt="school" src="https://rdc.ac.in/wp-content/uploads/2018/12/1-6.jpg" />
                    <div className="carousel-caption">
                    <p >Seamless Onsite
                    Services for Colleges</p>
                    </div>
                </div>
                <div>
                    <img className="carousel-image" alt="school" src="https://onsitedental.com/images/care-teams.png" />
                    <div className="carousel-caption">
                    <p>Seamless Onsite
                    Services for Corporates</p>
                    </div>

                </div>
            </Carousel>
           
    </>
  );
};

export default HeroSection;
