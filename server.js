import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5173;

// app.use(express.static(__dirname + "/dist"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// console.log("Console logging from server.js");

// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/dist/index.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
