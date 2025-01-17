/*const heading=React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from React"
)
console.log(heading)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)*/


/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
8
*/
/*const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h1",{},"I am h2 tag"),

    ])
)
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)*/


/*<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
<div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/
const parent=React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),

    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),

    ])
])
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
