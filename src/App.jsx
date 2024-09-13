import img1 from "./assets/img1.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  let temp = genRandomInt(2);
  return (
    <>
      <h1>This is an header</h1>
      <p>The random number is {temp}</p>
      <h2>{reactDescriptions[temp]}</h2>
      {/* <img src={img1}></img> */}
      {/* <img src="/img1.png" alt="Image" /> */}
    </>
  );
}
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
