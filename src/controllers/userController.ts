import { Request, Response} from 'express';

export const getAllUsers = (req: Request, res: Response) => {
    res.send('Return all users');
}

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.send('Return user with id');
}