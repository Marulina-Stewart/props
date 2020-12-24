import "./App.css";
import Profile from "./Profile/profile";
import photo from "..//src/Profile/maru.jpg";

function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile
        fullName="Marulina Stewart"
        formation="IT engineer"
        profession="Developer"
        handleName={handleName}
      >
        <img className="photo" src={photo} alt="" />
      </Profile>
    </div>
  );
}

export default App;
