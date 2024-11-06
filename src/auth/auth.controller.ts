import { Body, Controller, HttpCode, HttpStatus, Post, Request} from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDTO } from 'src/users/DTO/users.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: UserDTO) {
      return this.authService.signIn(signInDto.name, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}