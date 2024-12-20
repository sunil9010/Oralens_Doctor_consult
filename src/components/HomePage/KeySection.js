import '../Styles/KeySection.css'
import { LuBrainCircuit } from "react-icons/lu";
import { FaTooth,FaSmileBeam, FaAlignCenter , FaGooglePlay } from 'react-icons/fa';
import { CiStethoscope } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

const KeySection = () =>{

    return(
        <div className="key-sections">
        <section>
        <h2 className='side-heading'>Why Choose LuxySmile..?</h2>
          <div className='why-choose-align-container'>
          <ul className="why-choose-container">
            <li className='why-choose-cards-1'>
                <LuBrainCircuit className='icon'/>
                <div className='hr-line-container'>
                <hr className='line'/>
                </div>
               <span> AI-powered diagnostics for precision care.</span>
            </li>
            <li className='why-choose-cards-2'>
                
                <span>Preventive and aesthetic treatments delivered onsite.</span>
                <hr className='line'/>
                <CiStethoscope className='icon-stet'/>
               
            </li>
            <li className='why-choose-cards-3'>
                <FaClipboardCheck className='icon'/>
                <hr className='line'/>
                <span>Internationally recognized treatment protocols.</span>
            </li>
            <li className='why-choose-cards-4'>
                <span>Simplified reporting and treatment plans</span>
                
                <hr className='line'/>
                <FaFileAlt className='icon'/>
                
            </li>
          </ul>
          </div>
        </section>
        <section>
          <h2 className='side-heading'>Core Services</h2>
          <ul className='core-services-container'>
            <li className='core-services-cards'>
                < FaTooth className='icon-core'/>
                <strong>Preventive Care</strong>
                <span>Ensuring oral health through screenings and cleanings.</span></li>
            <li className='core-services-cards'>

                <FaSmileBeam className='icon-core'/>
                <strong>Aesthetic Treatments</strong>
                 <span>Personalized aligners and smile makeovers.</span></li>
            <li className='core-services-cards'>
                <LuBrainCircuit className='icon-core'/>
               <strong>Diagnostic Services</strong> 
                 <span>Advanced AI diagnostics.</span></li>
            <li className='core-services-cards'> 
                < FaGooglePlay className='icon-core'/>
                <strong>Seamless Expeience</strong>
                <span>Advanced AI diagnostics.</span></li>
          </ul>
        </section>
      </div>
    )
}
export default KeySection