import "./Natschemes.css";
import {Link} from 'react-router-dom';
import image9Arrow from "./assets/image9Arrow.png";
// import image21 from "./assets/image21.png";
// import image23 from "./assets/image23.png";
// import image27 from "./assets/image27.png";
// import image13 from "./assets/image13.png";
// import image11 from "./assets/image11.png";
// import image12 from "./assets/image12.png";
// import image26 from "./assets/image26.png";
const Natschemes = () => {
  return (
    <>
    <div className="nat-schemes">
        <Link to="/Home">
        <img className="image-9-arrow" src={image9Arrow} alt="9" />
        </Link>
      <div className="rectangle-19">
      <Link to="/Bondedlabour">
        <p className="pragati-scholarship" >
          Abolition of Bonded Labour System
        </p>
        </Link>
        {/* <img className="image-11" src={image11} alt="11" /> */}
      </div>
      <div className="rectangle-19">
      <Link to="/TnDiffAble">
        <p className="merit-cum-means-scho">
          Scholarship for Differently abled students from Class 9th Onwards,Tamilnadu
        </p>
        </Link>
        {/* <img className="image-12" src={image12} alt="12"/> */}
      </div>
      <div className="rectangle-19">
      <Link to="/RIMCDehradun">
        <p className="scholarships-for-top">
          R.I.M.C Dehradun Scholarship,Tamilnadu
        </p>
        </Link>
        {/* <img className="image-21" src={image21} alt="21"/> */}
      </div>
        <div className="rectangle-19">
        <Link to="/TnDiffNB">
          <p className="prime-ministers-scho">
            Scholarship for Differently abled students towards purchase of Books and Notebooks,TamilNadu
          </p>
          </Link>
          {/* <img className="image-13" src={image13} alt="13"/> */}
        </div>
      <div className="rectangle-19">
        <Link to="/textile">
          <p className="central-sector-schem">
          Scheme for integrated textile parks Under the Scheme for setting up of Integrated Textile Parks
          </p>
        </Link>
        {/* <img className="image-11" src={image11} alt="11" /> */}
      </div>
    </div>
    </>
  );
};
export default Natschemes;

