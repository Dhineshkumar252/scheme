import "./Disability.css";
import { Link } from "react-router-dom";
import image9Arrow from "./assets/image9Arrow.png";
const Disability = () => {
  return (
    <div className="disability">
      <Link to="/Natschemes">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      </Link>
      <center><h5>
      SCHOLARSHIPS FOR TOP CLASS EDUCATION FOR STUDENTS WITH DISABILITIES
      </h5></center><br></br>
        <div className="rectangle-36" >
        <p className="the-department-of-em">
          The Department of Empowerment of Persons with Disabilities, Government
          of India is offering Scholarships for Top Class Education for Students
          with Disabilities 2021-22 to promote quality education among students
          who are pursuing studies at graduate&#x2F;post graduate&#x2F;diploma
          level.
        </p>
        </div>
        <div className="rectangle-37">
        <p className="the-department-of-em-1"> <p><b>Eligibility </b></p><p>    To be eligible, an applicant must - </p><p>1. be pursuing
          studies at the graduate&#x2F;postgraduate&#x2F;diploma level in
          notified institutions of excellence in education</p><p> 2. have more than 40%
          disability and a valid certificate for the same </p><p>3. have an annual
          family income of less than INR 6 lakh.</p>
          </p>
          </div>
          <div className="rectangle-38">
          <p className="the-department-of-em-2"><p><b> Document Required</b></p><p> 1. Photo of
          the applicant </p><p>2. Certificate of previous academic marksheet</p> <p>3. Fee
          receipt of current course year</p> <p>4. Age proof certificate </p><p>5. Income
          certificate of the family </p><p>6. Bank account details </p><p>7. Disability
          Certificate</p>
        </p>
        </div>
      <button className="rectangle-28">
        <p className="apply"><a href="https://scholarships.gov.in/">Apply</a></p>
      </button>
      </div>
  );
};
export default Disability;

