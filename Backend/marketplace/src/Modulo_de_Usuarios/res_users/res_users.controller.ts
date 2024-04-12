import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResUsersService } from './res_users.service';
import { CreateResUserDto } from './dto/create-res_user.dto';
import { UpdateResUserDto } from './dto/update-res_user.dto';

@Controller('res-users')
export class ResUsersController {
  constructor(private readonly resUsersService: ResUsersService) {}

  @Post()
  create(@Body() createResUserDto: CreateResUserDto) {
    return this.resUsersService.create(createResUserDto);
  }

  @Get()
  findAll() {
    return this.resUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResUserDto: UpdateResUserDto) {
    return this.resUsersService.update(+id, updateResUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resUsersService.remove(+id);
  }
}
