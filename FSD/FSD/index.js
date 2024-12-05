   console.log("hello");
   const parent=document.getElementById("root");
   console.dir(parent);
   const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'red'}},"Abes eng college");
// const l1=React.createElement("li",{},"orange");
// const l2=React.createElement("li",{},"banana");
// const ul=React.createElement("ul",{style:{backgroundColor:'orange'}},[l1,l2]);
// root.render(ul);
   const h2=<h2>Hello world</h2>
   const l1=<li>orange</li>
   const l2=<li>apple</li>
   const ul=<ul style={{color:'orange'}}>{l1}{l2}</ul>
   const container={
       <div style={{backgroundColor:'brown'}}>
         {h2}
      <div>{ul}</div>
     </div>
   }
   root.render(ul);
