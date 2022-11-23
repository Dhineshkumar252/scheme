import "./Campsfront.css";
// import back1 from "./back1.png";
import logo from "./logo.jpeg";
// import image9Arrow from "./image9Arrow.png"
 import {Link} from 'react-router-dom'

const Camps = () => {
  return (
    <div className="nat-schemes">
      <div className="flex-container">
      {/* <Link to="/Home">
        <img className="image-9-arrow" src={image9Arrow} alt="9" />
        </Link> */}
      {/* <a href ="#"><img src={back1}></img></a> */}
      <img id = "logo1" src={logo}></img>
      </div>
      <div className="rectangle-19">
        
        <a className="pragati-scholarship" href="https://namakkal.nic.in/paathayai-maatrum-bothai-awareness-program-training-camp-for-college-professors-was-held-under-the-district-collector-at-namakkal-arignar-anna-arts-college/">

        Drug Awareness Campaign<br></br>
National Centre For Drug Abuse Prevention     
        </a>
      </div>
      <br>
      </br>
      <div className="rectangle-19">
        <a className="merit-cum-means-scho" href="https://www.mygov.in/campaigns/national-road-safety/">
        Road Safety Awareness Camp<br></br>
        Ministry of Road Transport & Highways
        </a>
      </div>
      <br></br>
      <div className="rectangle-19">
        <a className="scholarships-for-top" href="https://www.cisa.gov/cisa-cybersecurity-awareness-program#:~:text=Tips%20and%20Resources-,About%20the%20CISA%20Cybersecurity%20Awareness%20Program,safer%20and%20more%20secure%20online.">
        Cyber Crime Awareness Programme<br></br>
   Cyber and Information Security (C&IS) Division
        </a>
      </div>
      <br></br>
        <div className="rectangle-19">
          <a className="prime-ministers-scho" href="https://www.nhp.gov.in/national-mental-health-programme_pg">
          Mental Health Awareness Camp<br></br>
          Ministry of Health and Family Welfare
          </a>
        </div>
        <br></br>
      <div className="rectangle-19">
        <a className="central-sector-schem" href="https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=945&lid=343">
        Polio drops Camp<br></br>
        Department of Health Research
        </a>
      </div>
      <br></br>
    </div>
  );
};
export default Camps;