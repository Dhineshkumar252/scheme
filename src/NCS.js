import "./Disability.css";
import { Link } from "react-router-dom";
import image9Arrow from "./assets/image9Arrow.png";
const NCS = () => {
  return (
    <div className="disability">
      <Link to="/Natschemes">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      </Link>
      <center><h4>
      NATIONAL CAREER SERVICE(NCS)
      </h4></center><br></br>
        <div className="rectangle-36" >
        <p className="the-department-of-em">
        <p>
          National Career Service (NCS) focuses to provide various services
          related to employment and career-related services such as job
          matching, career counseling, vocational guidance, information on skill
          development courses, apprenticeships, internships, etc to the citizens
          of India through an online portal.</p>
        </p>
        </div>
        <div className="rectangle-37">
        <p className="the-department-of-em-1"> <p><b> Eligibility</b></p><p>1. HS Pass Or Any
          Graduate Can Apply .</p><p> 2. Age Between 18 Years To 30 Years </p><p>3. Good
          Communication Skills </p><p>4. Basic Computer Knowledge.</p><p> 5. Role And
          Responsibility Core Banking Responsibility.</p><p> 6. Branch Banking
          Responsibility. </p><p>7. Benefit - PF. </p><p>8. ESI</p>
          </p>
          </div>
          <div className="rectangle-38">
          <p className="the-department-of-em-2"><p><b>Document Required </b></p><p>1. Aadhaar
          card </p><p>2. Class 12th marksheet</p>
        </p>
        </div>
      <button className="rectangle-28">
        <p className="apply"><a href="https://www.ncs.gov.in/pages/about-us.aspx">Apply</a></p>
      </button>
      </div>
  );
};
export default NCS;
