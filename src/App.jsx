import { useState } from "react";
import Profile from "./Component/Profile";

function App() {
  const [users, setUser] = useState([
    { name: "tara", age: 21 },
    { name: "kharisman", age: 19 },
    { name: "mukti", age: "20" },
  ]);
  return (
    <>
      {/* <Profile name={"tara"} age={"20"} /> */}
      {/* //cara untuk maping data  */}
      {users.map((item, idk) => (
        <Profile key={idk} name={item.name} age={item.age} />
      ))}
    </>
  );
}

export default App;
