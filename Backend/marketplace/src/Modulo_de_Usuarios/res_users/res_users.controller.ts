import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

//gestion-usuarios                   # (res_users)

//res_users: Representa a los usuarios del sistema y contiene información básica de los usuarios como nombre, contraseña, dirección de correo electrónico, etc.

//analisis-patrones-compra-cliente               # (sale.order, res.users)
//# Realiza un análisis de los patrones de compra de los clientes, utilizando datos de órdenes de venta y usuarios registrados.

//gestion-preferencias-usuario                                                    # (public.res_users)
//# Gestiona las preferencias de usuario, como configuraciones personalizadas.

//configuracion-preferencias-usuario                                              # (public.res_users)
//# Configura las preferencias de usuario, como ajustes personalizados.

//analisis-preferencias-usuario                                                   # (public.res_users)
//# Proporciona análisis sobre las preferencias de usuario, como las configuraciones personalizadas.
