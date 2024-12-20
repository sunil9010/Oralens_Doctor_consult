import React from 'react';
import '../Styles/Corporate.css'
function CorporateLandingPage() {
  return (
    <div className="corporate-landing-page">
      <h1 className='corporate-heading'>Enhance Employee Wellness with Onsite, Specialist-Led Dental Care.</h1>
      <p className='corporate-description'>Premium Preventive and Aesthetic Treatments for Your Workforce.</p>

      <h2 className=''>Corporate Benefits:</h2>
      <ul className='benifits-contaier'>
        <li className='each-benifit'>Dedicated oral care programs enhanced by AI-driven diagnostics.</li>
        <li className='each-benifit'>Advanced diagnostics and treatments onsite for convenience.</li>
        <li className='each-benifit'>Custom wellness performance tracking for stakeholders.</li>
      </ul>
      <h3 className='heading-steps'>Steps to Get Started</h3>
      <div>
        <div>
            <span className='inner'>Step:-1</span>
        </div>
        <p className='consult'>Schedule a free consultation with our experts</p>
      </div>
      <div>
        <div>
            <span className='inner'>Step:-2</span>
        </div>
        <p className='consult'>Relax as our team manages the entire process, from initial screeings to diagnostics and treatment delivery, all onsite with precision.</p>
      </div>
      <div className='subscribe-container'>
      <button type='button' className='subscribe'>Request a Proposal Today!</button>
      </div>
      
    </div>
  );
}

export default CorporateLandingPage;
