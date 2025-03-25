import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
    try {
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
};
