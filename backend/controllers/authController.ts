import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUser, User } from '../models/User';

const JWT_SECRET = 'votre_secret_jwt';

export default async function loginUser(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const user: User | undefined = await findUser(email);

    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const passwordMatch: boolean = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Mot de passe incorrect" });
      return;
    }

    const token: string = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite lors de la connexion" });
  }
}

export async function createUserHandler(req: NextApiRequest, res: NextApiResponse) {
  const { name, surname, email, password } = req.body;

  try {
    const existingUser: User | undefined = await findUser(email);

    if (existingUser) {
      res.status(400).json({ message: "Cet email est déjà associé à un compte" });
      return;
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser: User = await createUser(name, surname, email, hashedPassword);

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'utilisateur" });
  }
}
