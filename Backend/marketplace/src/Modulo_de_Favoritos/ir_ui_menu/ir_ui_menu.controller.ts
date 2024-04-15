import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrUiMenuService } from './ir_ui_menu.service';
import { CreateIrUiMenuDto } from './dto/create-ir_ui_menu.dto';
import { UpdateIrUiMenuDto } from './dto/update-ir_ui_menu.dto';

@Controller('ir-ui-menu')
export class IrUiMenuController {
  constructor(private readonly irUiMenuService: IrUiMenuService) {}

  @Post()
  create(@Body() createIrUiMenuDto: CreateIrUiMenuDto) {
    return this.irUiMenuService.create(createIrUiMenuDto);
  }

  @Get()
  findAll() {
    return this.irUiMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irUiMenuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIrUiMenuDto: UpdateIrUiMenuDto,
  ) {
    return this.irUiMenuService.update(+id, updateIrUiMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irUiMenuService.remove(+id);
  }
}
//estructura-menu                                                                # (public.ir_ui_menu)
//# Define la estructura del menú de navegación de la interfaz de usuario.

//estructura-menu                                                                # (public.ir_ui_menu)
//# Define la estructura del menú de navegación de la interfaz de usuario.

//analisis-menu                                                                  # (public.ir_ui_menu)
//# Proporciona análisis sobre la estructura y la usabilidad del menú de navegación de la interfaz de usuario.
