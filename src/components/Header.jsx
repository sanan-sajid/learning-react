// import img1 from "./assets/img1.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <>
      <h1>Your Name is {props.name}. </h1>
      <h2>and your age is {props.age}.</h2>
    </>
  );
}

export default function Header() {
  let temp = genRandomInt(2);
  return (
    <>
      <h1>This is an header</h1>
      <p>The random number is {temp}</p>
      <h2>{reactDescriptions[temp]}</h2>
      {/* <img src={img1}></img> */}
      <CoreConcept name="sanan" age="21" />
    </>
  );
}
