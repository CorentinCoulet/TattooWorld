import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('home')
export class HomeController {
  @Get()
  getHome() {
    return 'Welcome to the home page!';
  }

  @Get(':id')
  getDetail(@Param('id') id: string) {
    return `Detail of item ${id}`;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin', 'artist', 'moderator')
  @Get('profile')
  getProfile(@Request() req) {
    return `Profile of user ${req.user.username}`;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Get('planning')
  getPlanning() {
    return 'Planning page';
  }
}
