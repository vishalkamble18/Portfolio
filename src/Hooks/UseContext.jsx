import { createContext, useContext } from "react";

let mycontext = createContext();

export default function UseContextComponent() {
  let watch = {
    cname: "Noise",
    price: 2000,
  };

  return (
    <mycontext.Provider value={watch}>
      <Fun1 />
    </mycontext.Provider>
  );
}

function Fun1() {
  return <Fun2 />;
}

function Fun2() {
  return <Fun3 />;
}

function Fun3() {
  let val = useContext(mycontext);
    
  return (
    <>
      <h1>Use Context Hook</h1>
      <h2>cname: {val.cname}</h2>
      <h2>price: {val.price}</h2>
    </>
  );
}
