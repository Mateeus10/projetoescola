import app from "./app.js";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
