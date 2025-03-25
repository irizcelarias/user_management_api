import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user"; 
import { AppDataSource } from "./config/ormconfig"; 

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

// Initialize the database before starting the server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection failed:", error));
