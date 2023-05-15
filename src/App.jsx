import { useState } from "react";
import Profile from "./Component/Profile";
import Todo from "./Component/Todo";

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
      {/* {users.map((item, idk) => (
        <Profile key={idk} name={item.name} age={item.age} />
      ))} */}
      <div className="text-center mt-5">
        <h1 className="mb-5"> What's the plan for Today</h1>
        <Todo />
      </div>
    </>
  );
}

export default App;
