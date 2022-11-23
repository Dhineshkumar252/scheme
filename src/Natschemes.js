import "./Natschemes.css";
import {Link} from 'react-router-dom';
import image21 from "./assets/image21.png";
import image9Arrow from "./assets/image9Arrow.png";
import image23 from "./assets/image23.png";
import image27 from "./assets/image27.png";
import image13 from "./assets/image13.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";
import image26 from "./assets/image26.png";
const Natschemes = () => {
  return (
    <>
    <div className="nat-schemes">
        <Link to="/Home">
        <img className="image-9-arrow" src={image9Arrow} alt="9" />
        </Link>
      <div className="rectangle-19">
      <Link to="/Pragati">
        <p className="pragati-scholarship" >
          Pragati Scholarship Scheme for Girl Students (Technical Degree) All
          India Council for Technical Education
        </p>
        </Link>
        <img className="image-11" src={image11} alt="11" />
      </div>
      <div className="rectangle-19">
      <Link to="/Meritcum">
        <p className="merit-cum-means-scho">
          Merit Cum Means Scholarship for Professional and Technical Courses CS
          Mininstry of Minority Affairs
        </p>
        </Link>
        <img className="image-12" src={image12} alt="12"/>
      </div>
      <div className="rectangle-19">
      <Link to="/Disability">
        <p className="scholarships-for-top">
          Scholarships for Top Class Education for students with disabilities
          Department of Empowerment of Persons with disabilities
        </p>
        </Link>
        <img className="image-21" src={image21} alt="21"/>
      </div>
        <div className="rectangle-19">
        <Link to="/RPF">
          <p className="prime-ministers-scho">
            Prime Minister's Scholarship Scheme for RPF&#x2F;RPSF Ministry of
            Railways
          </p>
          </Link>
          <img className="image-13" src={image13} alt="13"/>
        </div>
      <div className="rectangle-19">
      <Link to="/CSSS">
        <p className="central-sector-schem">
          Central Sector Scheme of Scholarships for College and University
          Students Department of Higher Studies
        </p>
        </Link>
        <img className="image-11" src={image11} alt="11" />
      </div>
      <div className="rectangle-19">
      <Link to="/Fishermen">
        <p className="national-scheme-on-w">
          National Scheme on Welfare of Fisherman Ministry of Agriculture and
          Farmers Welfare(MoA)
        </p>
        </Link>
        <img className="image-23" src={image23} alt="23" />
      </div>
      <div className="rectangle-19">
      <Link to="/NCS">
        <p className="national-career-serv">
          National Career Service(NCS) Ministry of Labour and Employement
        </p>
        </Link>
        <img className="image-27" src={image27} alt="27" />
      </div>
      <div className="rectangle-19">
      <Link to="/PMJJBY">
        <p className="pm-jeevan-jyoti-bima">
          PM Jeevan Jyoti Bima Yojana(PMJJBY,Life light Insurance Scheme)
          Ministry of Finance
        </p>
        </Link>
        <img className="image-26" src={image26} alt="26" />
      </div>
    </div>
    </>
  );
};
export default Natschemes;

