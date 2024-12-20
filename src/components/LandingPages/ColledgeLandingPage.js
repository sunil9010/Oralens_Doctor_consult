import React from 'react';
import '../Styles/College.css'

function CollegeLandingPage() {
  return (
    <>
    <div className="college-landing-page">
      <h1 className=''college-heading>Smile with Confidence: AI-Enhanced Dental Solutions for Students and Faculty.</h1>
      <p className='college-description'>Convenient, Affordable, and Advanced Dental Care on Campus.</p>
      
      <h2 className='benifits'>Why Choose LuxySmile for Colleges?</h2>
      <ul className='benifits-list'>
        <li className='each-benifit'>Boost students’ confidence with clear aligners.</li>
        <li className='each-benifit'>Affordable packages for students and staff.</li>
        <li className='each-benifit'>Onsite treatment and flexible scheduling.</li>
      </ul>
      <h3 className='heading-steps'>Steps to Get Started</h3>
      <div>
        <div>
            <span className='inner'>Step:-1</span>
        </div>
        <p className='consult'>Free screening and assesment</p>
      </div>
      <div>
        <div>
            <span className='inner'>Step:-2</span>
        </div>
        <p className='consult'>AI-powered reports</p>
      </div>
      
    </div>
    <div className='subscribe-container'>
    <button type='button' className='subscribe'>Book Your Free Dental Screening Today!</button>
    </div>
    
    </>
  );
}

export default CollegeLandingPage;
