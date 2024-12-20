import { Link } from 'react-router-dom';
import '../Styles/Cta.css'

function CtaSection() {
    return (
      <div className="cta-section">
        <h3 className='heading-sections'>Scalable Massage Solutions for Business & Healthcare</h3>
        <div className='buttons-container'>
          <Link to='/school' className='link'>
            <div className="school-button">
              <img className='school-image' alt='school-image' src='https://res.cloudinary.com/dufyrxyey/image/upload/v1734322190/Children-Dentist_fi9vsx.png'/>

              <p className='strong-selection'>Schools</p> 
            <span className='span-cat'>Explore Solutions for Schools</span>
              </div>
            </Link>
            <Link to='/college'  className='link'>
            <div  className="college-button">
              <img alt='college-image' className='college-image' src='https://res.cloudinary.com/dufyrxyey/image/upload/v1734323414/iStock-1147579605-1-scaled-1_mdpy9w.png'/>
            <p className='strong-selection'>College</p> 
           <span className='span-cat'>Discover College Plans</span> 
           </div>
            </Link>
            <Link to='/corporate'  className='link'>
            <div  className="employee-button">
              <img alt="corporate" className='corporate-image' src="https://res.cloudinary.com/dufyrxyey/image/upload/v1734323932/laughing-doctors-in-white-coats-showing-thumbs-up_mxny4r.png"/>
            <p className='strong-selection'>Employers</p> 
            <span className='span-cat'>Corporate Wellness Programs</span>
            </div>
            </Link>
            </div>
            
      </div>
    );
  }
  
  export default CtaSection;