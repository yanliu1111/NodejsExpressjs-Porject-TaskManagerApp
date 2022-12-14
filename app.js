import express from "express";
const app = express();
import { tasks } from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import { notFount } from "./middleware/not-found.js";
import env from "dotenv";
env.config();

//middleware, if we dont have that, we dont have data in req.body
app.use(express.static("./public"));
app.use(express.json());

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);
app.use(notFount);
//app.get("/api/v1/tasks")        -get all the tasks
//app.post("/api/v1/tasks")       -create a new task
//app.get("/api/v1/tasks/:id")    -get a single task
//app.patch("/api/v1/tasks/:id")  -update tasks
//app.delete("/api/v1/tasks/:id")  -delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
