const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {


    res.send("This is working!");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

});

app.get("/", (req, res) => {
  res.send("that the server is running on port.");
});
app.listen(port, () => {
  console.log("hi");
});

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      console.log("Connected to MongoDB!");
  
      // Specify the database and collection
      const database = client.db("cluster0"); // Replace with your actual database name
      const collection = database.collection("users");
  
      // Insert the user document
      const userDocument = {
const userDocument = {
        "username": "john_doe",
        "email": "john.doe@example.com",
        "password": "hashed_password",
        "name": {
          "first": "John",
          "last": "Doe"
        },
        "birthdate": new Date("1990-05-15T00:00:00Z"),
        "createdAt": new Date("2021-10-22T08:30:00Z"),
        "updatedAt": new Date("2021-10-23T14:45:00Z")
      };
  
      const result = await collection.insertOne(userDocument);
      if (result.acknowledged) {
        console.log(`Inserted 1 document into the collection.`);
      } else {
        console.log(`Insertion was not acknowledged.`);
      }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }