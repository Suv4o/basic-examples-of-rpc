fetch("http://localhost:3000", {
  method: "POST",
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "add",
    params: [2, 3],
    id: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Result:", data.result));
