import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async signIn(mail: string, pass: string): Promise<{ access_token: string }>{
        const user = await this.usersService.findOne(mail);
        if(!user || !(await bcrypt.compare(pass, user.profil.password))){
            throw new UnauthorizedException();
        }
        const payload = { sub: user.profil_id, mail: user.profil.mail };
        return { 
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
