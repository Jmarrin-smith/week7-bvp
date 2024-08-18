import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DB });

app.get("/", function (request, response) {
  response.json("root");
});

app.get("/messages", async function (request, response) {
  const messages = await db.query(`SELECT * FROM messages`);
  const message = messages.rows;
  response.json(messages.rows);
});

app.post("/messages", async function (request, response) {
  const name = request.body.name;
  const message = request.body.message;

  // add the cnadle to the database
  await db.query(
    `insert into messages (msg_name,content) values ('admin','welcome');`,
    [name, message]
  );
  response.json("messages POST endpoint");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
