import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IrModelAccesService } from './ir_model_acces.service';
import { CreateIrModelAcceDto } from './dto/create-ir_model_acce.dto';
import { UpdateIrModelAcceDto } from './dto/update-ir_model_acce.dto';

@Controller('ir-model-acces')
export class IrModelAccesController {
  constructor(private readonly irModelAccesService: IrModelAccesService) {}

  @Post()
  create(@Body() createIrModelAcceDto: CreateIrModelAcceDto) {
    return this.irModelAccesService.create(createIrModelAcceDto);
  }

  @Get()
  findAll() {
    return this.irModelAccesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irModelAccesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIrModelAcceDto: UpdateIrModelAcceDto) {
    return this.irModelAccesService.update(+id, updateIrModelAcceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irModelAccesService.remove(+id);
  }
}
