import React from 'react';
import '../Styles/SchoolLanding.css'

function SchoolLandingPage() {
  return (
    <div className="school-landing-page">
        <div className='school-holding-container'>
      <h1 className='school-heading'>Empowering Young Smiles with Comprehensive Oral Care Solutions!</h1>
      <p className='school-description'>Preventive care and seamless treatments delivered directly to your school premises.</p>
      
      <h2 className='benifits'>Benefits for Schools:</h2>
      <ul className='benifits-list'>
        <li className='each-benifit'>End-to-end oral care programs using AI-assisted diagnostics.</li>
        <li className='each-benifit'>No need for parents to visit external clinics.</li>
        <li className='each-benifit'>Improved Smile Scores with recognition for schools.</li>
      </ul>
      <h3>How it Works</h3>
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
        <p className='consult'>Enjoy a stress-free process as our team manages everthing</p>
      </div>
      <div>
        <div>
            <span className='inner'>Step:-3</span>
        </div>
        <p className='consult'>Recevie tailored treatment plans delivered seamlessly within the school</p>
      </div>
      <div>
        <div>
            <span className='inner'>Step:-4</span>
        </div>
        <p className='consult'>Track your child's treatment progress through our dedicated mobile app</p>
      </div>
      <button className='subscribe'>Partner with Us Today and Transform Your Students' Oral Health! →</button>
      </div>
    </div>
  );
}

export default SchoolLandingPage;
