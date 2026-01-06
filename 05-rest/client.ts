fetch("http://localhost:3000/calculate", {
  method: "POST",
  body: JSON.stringify({ a: 2, b: 3 }),
})
  .then((res) => res.json())
  .then((data) => console.log("Result:", data.result));
