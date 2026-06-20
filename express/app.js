const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const employeeRoutes = require(
  "./routes/employeeRoutes"
);

app.use("/api", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee API Running");
});

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});
