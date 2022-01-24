const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql");
const app = express();
// var cors = require("cors");
// res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
var cors = require("cors");

app.use(cors());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Suhasbg@2001",
  database: "tourism",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql connected...");
});

app.get("/cities", (req, res) => {
  let sql1 = "SELECT cid,cname FROM cities;";
  db.query(sql1, (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});

app.get("/places", (req, res) => {
  let sql2 =
    "SELECT pid,place_name,category,description,address,website,cid FROM places;";
  db.query(sql2, (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});

app.get("/restaurants", (req, res) => {
  let sql3 = "SELECT rid,rname,address,rating,pid FROM restaurant;";
  db.query(sql3, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    return res.json(result);
  });
});

// app.use(cors());
app.listen("3000", () => {
  console.log("Server started on port 3000");
});
