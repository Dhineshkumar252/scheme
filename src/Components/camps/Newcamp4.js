import "./Newcamp.css";
import calendar from "./calendar.png";
import location from "./location.png";
const Newcamp = () => {
  return (<div id="main">
    <h1>Cyber Crime Awareness Programme</h1>
    <br></br>
    <br></br>
    <p> To stop the spread of Cyber Crime and to safeguard the interest of people the government has made several laws related to Cyber Crimes. 
Also, these laws serve as protection against Cyber Crime. Apart from that, the government has also introduced cyber cells in police stations to counter the problem of Cyber Crime as fast as they can.

</p>
<div>
    <div id="all">
<div id="details">
<img src={location} width="45px"></img>
<h3>Cyber Crime Department, COIMBATORE-641018</h3>
</div>
<br></br>
<br></br>
<div id="details2">
<img src={calendar} width="45px"></img>
<h3>17th October</h3>
</div>

</div>
</div>

  </div>)
}
export default Newcamp