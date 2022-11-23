import "./Newcamp.css";
import calendar from "./calendar.png";
import location from "./location.png";
const Newcamp = () => {
  return (<div id="main">
    <h1>Road Safety Awareness Camp</h1>
    <br></br>
    <br></br>
    <p> Road safety is one of the most effective ways to people to say about the various dangerous present on the road. 
With the rise of automobiles, humans have entered a new era of technological advancement, albeit with some consequences.
</p>
<div>
    <div id="all">
<div id="details">
<img src={location} width="45px"></img>
<h3>TAMIL SAFETY TRAININGS, COIMBATORE-641002</h3>
</div>
<br></br>
<br></br>
<div id="details2">
<img src={calendar} width="45px"></img>
<h3>13th October</h3>
</div>

</div>
</div>

  </div>)
}
export default Newcamp