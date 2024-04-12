import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrRuleService } from './ir_rule.service';
import { CreateIrRuleDto } from './dto/create-ir_rule.dto';
import { UpdateIrRuleDto } from './dto/update-ir_rule.dto';

@Controller('ir-rule')
export class IrRuleController {
  constructor(private readonly irRuleService: IrRuleService) {}

  @Post()
  create(@Body() createIrRuleDto: CreateIrRuleDto) {
    return this.irRuleService.create(createIrRuleDto);
  }

  @Get()
  findAll() {
    return this.irRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irRuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIrRuleDto: UpdateIrRuleDto) {
    return this.irRuleService.update(+id, updateIrRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irRuleService.remove(+id);
  }
}
//configuracion-reglas-acceso       # (ir.rule)
//ir.rule: Se utiliza para definir reglas de acceso a los registros de la base de datos, lo que podría ser útil para establecer restricciones de acceso y controlar la visibilidad de los datos en beneficiosi.
