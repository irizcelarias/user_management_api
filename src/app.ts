import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user"; 
import { AppDataSource } from "./config/ormconfig"; 

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected successfully!");

    // Test database connection with a sample query
    const userCount = await AppDataSource.getRepository("User").count();
    console.log(`Database contains ${userCount} users`);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection failed:", error));
