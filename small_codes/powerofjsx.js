const render = () =>
  (document.getElementById("root").innerHTML = `
  <div>
  Hello 
  <input value="${new Date().toLocaleTimeString()}"/>
  </div>
`);

setInterval(render, 1000);
