import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Profil, ProfilType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: {
    mail: string;
    password: string;
    name: string;
    surname: string;
    profil_type: ProfilType;
    address: string;
    user_id: number;
    budget?: number; 
    preferences?: string; 
  }): Promise<User> {
    const { mail, password, name, surname, profil_type, address, user_id, budget, preferences } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        address,
        user_id,
        budget,
        preferences,
        profil: {
          create: {
            mail,
            password: hashedPassword,
            name,
            surname,
            profil_type,
          },
        },
      },
    });
  }

  async findOne(mail: string): Promise<(User & { profil: Profil }) | undefined> {
    return this.prisma.user.findFirst({
      where: {
        profil: {
          mail: mail,
        },
      },
      include: {
        profil: true,
      },
    });
  }
}
