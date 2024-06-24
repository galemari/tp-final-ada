import { Request, Response } from 'express';
import User from '../model/user';


abstract class UserController {
    static async getAll(req: Request, res: Response) {
        const user = await User.findAll();
        res.status(200).json(user);

    }


    static async createUser(req: Request, res: Response) {
        const { username, fullname, email, nationality, password } = req.body;
        let { birthdate } = req.body;
        birthdate = new Date(birthdate);

        if (username === undefined || fullname === undefined || email === undefined || birthdate === undefined || nationality === undefined || password === undefined)
            return res.status(400).json({ error: 'All data is required' });

        const newUser = (await User.create({
            username,
            fullname,
            email,
            birthdate,
            nationality,
            password
        })) as any;


        res.status(201).json({ newUser });
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const { id, username, fullname, password, email, nationality } = req.body;
            let { birthdate } = req.body;
            birthdate = new Date(birthdate);

            const result = await User.update({
                username,
                fullname,
                email,
                birthdate,
                nationality,
                password

            },
                {
                    where: {
                        id: id
                    }
                });

            if (result[0] === 0) {
                console.log('No se encontró el usuario o no se realizaron cambios');
            } else {
                console.log('Usuario actualizado exitosamente');
            }
        } catch (error) {
            console.error('Error actualizando usuario:', error);
        }


    }

    static async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const deleted = await User.destroy({
                where: { id: id }
            });

            if (deleted === 0) {
                return res.status(404).json({ message: 'No se encontró el usuario o no se realizaron cambios' });
            }

            res.status(200).json({ message: 'Usuario eliminado exitosamente' });
        } catch (error) {
            console.error('Error eliminando usuario:', error);
            res.status(500).json({ message: 'Error eliminando usuario' });
        }
    }
}

export default UserController;
