const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors"); // Import the 'cors' middleware
const path = require("path"); // Import the 'path' module

const app = express();
const port = process.env.PORT || 4000; // Use the PORT environment variable or default to 4000
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

// Replace 'qmongodb://localhost/your-database' with your MongoDB connection string
// Replace 'mongodb://localhost/your-database' with your MongoDB connection string
const mongoURI =
  "mongodb+srv://mist:Mist123%23@sunridgedatabase.rxtd4te.mongodb.net/SunRidge";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a simple Mongoose model
const patientProfileRoutes = require("./routes/PatientProfileRoutes");
const orderRoutes = require("./routes/ordered");
const treatmentroutes = require("./routes/treatment");
app.use("/auth", authRoutes);
app.use(orderRoutes);
app.use(treatmentroutes);
app.use(patientProfileRoutes);
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" folder

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
