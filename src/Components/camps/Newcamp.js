import "./Newcamp.css";
import calendar from "./calendar.png";
import location from "./location.png";
const Newcamp2 = () => {
  return (<div id="main">
    <h1>Polio Drops Camp</h1>
    <br></br>
    <br></br>
    <p> The Pulse Polio Initiative was started with an objective of achieving hundred per cent coverageunder
         Oral Polio Vaccine(OP Children in the age group of the 0-5 years administered polio 
         drops during this Program every year.</p>
<div>
    <div id="all">
<div id="details">
<img src={location} width="45px"></img>
<h3>PSG Hospitals,COIMBATORE-641004</h3>
</div>
<br></br>
<br></br>
<div id="details2">
<img src={calendar} width="45px"></img>
<h3>12th October</h3>
</div>

</div>
</div>

  </div>)
}
export default Newcamp2