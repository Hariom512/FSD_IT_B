 console.log("check");
 
 const parent=document.getElementById("root");
 const node=React.createElement("p",{style:{color:"red"}},"This is new paragraph");
 const root=ReactDOM.createRoot(parent);
 const node1=React.createElement("h1",{},"Shoping cart");
 const item1=React.createElement("li",{},"item-1");
 const item2=React.createElement("li",{},"item-2");
 const list=React.createElement("ol",{},item1,item2);
 const li=<ul>
    <li>CSE</li>
    <li>IT</li>
    <li>ML</li>
 </ul>
 const App=()=>{
    return(
        <div>
        <p>Semester List</p>
        <ul>
        <li>I</li>
        <li>III</li>
        <li>v</li>
        <li>VII</li>
        </ul>
        </div>
    )
 }
//  root.render([node,node1,list]);
root.render(<App/>) 