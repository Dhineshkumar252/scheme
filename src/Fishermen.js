import "./Disability.css";
import { Link } from "react-router-dom";
import image9Arrow from "./assets/image9Arrow.png";
const Fishermen = () => {
  return (
    <div className="disability">
      <Link to="/Natschemes">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      </Link>
      <center><h5>
      NATIONAL SCHEME OF WELFARE OF FISHERMEN
      </h5></center><br></br>
        <div className="rectangle-36" >
        <p className="the-department-of-em"><p>The Centrally Sponsored 'National Scheme of Welfare of Fishermen'
          provided financial assistance to fishers for construction of house
          among other things.</p></p>
        </div>
        <div className="rectangle-37">
        <p className="the-department-of-em-1"><p><b>Eligibility</b> </p><p>1. Beneficiary should be a member of
          a functional local fishers cooperative
          society&#x2F;Federation&#x2F;any other registered body. </p><p>2. Beneficiary
          should be Below Poverty Line (BPL) and of between 18 and 60 years of
          age. </p><p>3. Engaged in full-time fishing in the sea. </p></p>
          </div>
          <div className="rectangle-38">
          <p className="the-department-of-em-2"><p><b>Document Required</b> </p><p>1.
          Aadhaar Card </p><p>2. Voter ID Card</p><p>3. Income Certificate </p><p>4. Registration as
          a fisherman under the State or Central Government
        </p></p>
        </div>
      <button className="rectangle-28">
        <p className="apply"><a href="https://dahd.nic.in/related-links/centrally-sponsored-national-scheme-welfare-fishermen#:~:text=Under%20this%20component%20Rs%2050,State%20and%20Central%20Governments%20separately.">Apply</a></p>
      </button>
      </div>
  );
};
export default Fishermen;
