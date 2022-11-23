import "./Newcamp.css";
import calendar from "./calendar.png";
import location from "./location.png";
const Newcamp = () => {
  return (<div id="main">
    <h1>National Drugs Awareness Campaign</h1>
    <br></br>
    <br></br>
    <p> The drug campaign to raise awareness about the major challenge that illicit 
        drugs represent to society as a whole, and especially to the young. 
        The goal of the campaign is to mobilize support and inspire people to act against drug use.
</p>
<div>
    <div id="all">
<div id="details">
<img src={location} width="30px"></img>
<h3>Kovai Rehabilitation,COIMBATORE-641002</h3>
</div>
<br></br>
<br></br>
<div id="details2">
<img src={calendar} width="40px"></img>
<h3>13th October</h3>
</div>

</div>
</div>

  </div>)
}
export default Newcamp