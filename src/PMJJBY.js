import "./Disability.css";
import { Link } from "react-router-dom";
import image9Arrow from "./assets/image9Arrow.png";
const PMJJBY = () => {
  return (
    <div className="disability">
      <Link to="/Natschemes">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      </Link>
      <center><h5>
      PM JEEVAN JYOTI BIMA YOJANA(PMJJBY,LIFE LIGHT INSURANCE SCHEME)
      </h5></center><br></br>
        <div className="rectangle-36" >
        <p className="the-department-of-em">
        <p>
          The PMJJBY is available to people in the age group of 18 to 50 years
          having a bank account who give their consent to join &#x2F; enable
          auto-debit. The life cover of Rs. 2 lakhs shall be for the one year
          period and will be renewable. Risk coverage under this scheme is for
          Rs. 2 Lakh in case of death of the insured, due to any reason.</p>
        </p>
        </div>
        <div className="rectangle-37">
        <p className="the-department-of-em-1"> <p><b>
          Eligibility </b></p><p>1. Beneficiary should have poor and low-income section of
          the society.</p><p> 2. Should be aged between 18 years to 50 years. </p><p>3. They
          must have a bank account . </p><p>4. Anyone who joins the scheme before
          completing of 50 years, will have the risk of life cover up to the age
          of 55 years subject to payment of premium.</p><p> 5. Adhaar card should be
          linked to their bank accounts.</p>
          </p>
          </div>
          <div className="rectangle-38">
          <p className="the-department-of-em-2"><p><b> Document Required </b></p><p>1. Duly completed
          Claim Form.</p><p> 2. Discharge Receipt. </p><p>3. death certificate along with
          photocopy of the cancelled cheque of the nominee's bank account (if
          available) OR the bank account details to the Bank wherein the Member
          was having the 'Savings Bank Account' through which he &#x2F; she was
          covered under PMJJBY.</p>
        </p>
        </div>
      <button className="rectangle-28">
        <p className="apply"><a href="https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)">Apply</a></p>
      </button>
      </div>
  );
};
export default PMJJBY;
