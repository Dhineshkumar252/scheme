import "./Newcamp.css";
import calendar from "./calendar.png";
import location from "./location.png";
const Newcamp = () => {
  return (<div id="main">
    <h1>Mental Awareness Camp</h1>
    <br></br>
    <br></br>
    <p> Mental Health Awareness Camp was focused on helping mothers understand what they perceive as good /
         bad mental health, teaching them mindfulness techniques and experiencing the joy of movement through dance 
         / movement therapy We do. Members participated in this campaign benefiting from creative expression and 
         learned about basic coping skills that can help them experience healthy mental health.

</p>
<div>
    <div id="all">
<div id="details">
<img src={location} width="45px"></img>
<h3>SriRam Hospital (Coimbatore)                             
</h3>
</div>
<br></br>
<br></br>
<div id="details2">
<img src={calendar} width="45px"></img>
<h3>10th October</h3>
</div>

</div>
</div>

  </div>)
}
export default Newcamp