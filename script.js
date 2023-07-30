// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript!";
// heading.style.cssText = "font-size:25px;color:green;";
// const root1 = document.getElementById("root");
// root1.appendChild(heading);

const heading = React.createElement("h1",{id:"h"},"Hello World from React Js.");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);


const parent = React.createElement("div",{id:'parent'},
('div',{id:'child'},
[('h1',{id:'tag1'},'This is from Child Tag.'),('h1',{id:'tag2'},'This is From Child Tag.')]));
const main1 = ReactDOM.createRoot(document.getElementById("main"));
main1.render(parent);
