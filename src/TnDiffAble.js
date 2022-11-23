import React from 'react'
import './styles.css'
import back from './back.png'
function TnDiffAble() {
  return (
    <div>
        <a href='#'><img id='back' src={back} /></a>
        
        <h2 id='topic'> SCHOLARSHIP FOR DIFFERENTLY ABLED STUDENTS FROM CLASS 9TH ONWARDS, TAMIL NADU</h2>
        <p id='desc'>Eligibility
        The candidate must be a differently-abled person. Also, they must have an identity card issued by the Welfare Board Of Differently Abled.
The students studying in class 11th till Postgraduate level ( including ITI/Polytechnic Diploma course) can apply for this scholarship.

        </p>
        <br></br>
        <p id='details'>
        Document Required
1. Mark Sheet of standard Xth /XIIth / others as applicable.
2. Annual family Income Certificate for the preceding financial year in the prescribed
format issued by not below the rank of Tahsildar.
3. Admission letter issued by Directorate of Technical Education for the admission in
Diploma/Degree course.
        </p>
        <br></br>
        <a target='_blank' href='http://escholarship.tn.gov.in/'><button>Apply</button></a>
    </div>
  )
}

export default TnDiffAble