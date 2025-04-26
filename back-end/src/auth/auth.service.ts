import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(phoneNumber: string, password: string): Promise<any> {
    const user = await this.userService.findOne(phoneNumber);

    if (!(await bcrypt.compare(password, user?.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.fullname };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
