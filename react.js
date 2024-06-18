// <div id='parent'>
//     <div id="child">
//         <div className="box-1" id="box1">
//           <h1>Hello Box-1</h1>
//         </div>
//         <div className="box-2" id="box2">
//           <h2>Hello Box-2</h2>
//         </div>
//     </div>
// </div>F

//  This is the core react
// whatever we give this cerateElement it always returns object
// and it takes three parameter (tag , obj(attributes) , content(another element))

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "div",
      { id: "box1", className: "box-1" },
      React.createElement("h1", {}, "Hello Box-1")
    ),
    React.createElement(
      "div",
      { id: "box2", className: "box-2" },
      React.createElement("h2", {}, "Hello Box-2")
    ),
  ])
);

console.log("heading", heading);

// ReactDOM is the Bridge between the react and the browser
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(heading);
