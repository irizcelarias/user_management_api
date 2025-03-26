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


export const deleteUser: (req: Request, res: Response) => Promise<void> = async (req, res) => {  
    try {
        const userRepository = AppDataSource.getRepository(User);
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid user ID!" });
            return;
        }

        const user = await userRepository.findOneBy({ id });

        if (!user) {
            res.status(404).json({ error: "User not found!" });
            return;
        }

        await userRepository.remove(user);

        res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
};
