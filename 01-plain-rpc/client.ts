const callRpc = async () => {
  const res = await fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({
      method: "add",
      params: [2, 3],
    }),
  });

  const data = await res.json();
  console.log("Result:", data.result);
};

callRpc();
