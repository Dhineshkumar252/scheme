import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import back from './back.png'
import image9Arrow from "./assets/image9Arrow.png";

function Stateschemes() {
  return (
    <div>
       <Link to="/Home">
        <img className="image-9-arrow" src={image9Arrow} alt="9" />
        </Link>

         {/* <a href='#'><img id='back' src={back} /></a>  */}
        
        <h2 id='topic'> Scheme for integrated textile parks Under the Scheme for setting up of Integrated Textile Parks</h2>
        <p id='desc'>The objective of the Scheme is to provide financial assistance to the poor and meritorious students belonging to minority communities to enable them to pursue professional and technical courses
        Eligibility
 To be eligible, an applicant must - 
   1. belong to Minority communities (Muslims, Sikhs, Christians, Buddhists, Jain, and Parsis/Zoroastrians)
   2. be pursuing a technical or professional course at the undergraduate or postgraduate level from a recognized institution
        </p>
        <br></br>
        <p id='details'>
        Document Required
   1. Domicile Certificate
   2. Student Photograph
   3. Self Declaration of minority community certificate by the student
   4. Self-attested copy of previous academic marksheet
   5. Fee receipt of current course year
   6. Scanned copy of Aadhar Enrollment/Aadhar Card
        </p>
        <br></br>
        <a target='_blank' href='https://scholarships.gov.in/'><button>Apply</button></a>
    </div>
  )
}

export default Stateschemes