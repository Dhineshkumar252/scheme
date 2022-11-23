import "./Disability.css";
import { Link } from "react-router-dom";
import image9Arrow from "./assets/image9Arrow.png";
const CSSS = () => {
  return (
    <div className="disability">
      <Link to="/Natschemes">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      </Link>
      <center><h5>
      CENTRAL SECTOR SCHEME OF SCHOLARSHIP FOR COLLEGE AND UNIVERSITY STUDENTS
      </h5></center><br></br>
        <div className="rectangle-36" >
        <p className="the-department-of-em">
          It was introduced to provide financial assistance to the meritorious
          students, to meet a part of their day-to-day expenses while pursuing
          higher studies.
        </p>
        </div>
        <div className="rectangle-37">
        <p className="the-department-of-em-1"><p><b> Eligibility</b></p><p>1. Students who are above 80th percentile
          of successful candidates in the relevant stream from a particular
          Board of Examination in Class XII </p><p>2. Pursuing regular course </p><p>3.
          Having family income of less than Rs.6 lakh per annum </p><p>4. Not
          receiving any other scholarship</p>
          </p>
          </div>
          <div className="rectangle-38">
          <p className="the-department-of-em-2"><p><b> Document Required</b></p><p> 1. Aadhaar card </p><p>2.
          Class 12th marksheet</p><p> 3. Income certificate</p>
        </p>
        </div>
      <button className="rectangle-28">
        <p className="apply"><a href="https://scholarships.gov.in/">Apply</a></p>
      </button>
      </div>
  );
};
export default CSSS;
