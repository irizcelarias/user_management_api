import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import { User } from "../entities/User";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;

        const savedUser = await AppDataSource.getRepository(User).save(user);
        res.status(201).json({ message: "User created successfully!", user: savedUser });
    } catch (error: any) {
        res.status(500).json({ error: "Something went wrong!", details: error.message });
    }
};

// Retrieve all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await AppDataSource.getRepository(User).find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
};

// Retrieve a single user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({ id: parseInt(req.params.id) });

        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user" });
    }
};
