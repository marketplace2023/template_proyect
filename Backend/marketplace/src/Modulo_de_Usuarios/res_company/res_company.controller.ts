import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResCompanyService } from './res_company.service';
import { CreateResCompanyDto } from './dto/create-res_company.dto';
import { UpdateResCompanyDto } from './dto/update-res_company.dto';

@Controller('res-company')
export class ResCompanyController {
  constructor(private readonly resCompanyService: ResCompanyService) {}

  @Post()
  create(@Body() createResCompanyDto: CreateResCompanyDto) {
    return this.resCompanyService.create(createResCompanyDto);
  }

  @Get()
  findAll() {
    return this.resCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resCompanyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResCompanyDto: UpdateResCompanyDto,
  ) {
    return this.resCompanyService.update(+id, updateResCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resCompanyService.remove(+id);
  }
}

//configuracion-empresa             # (res_company)
// res_company: Representa la información de la empresa, lo que podría ser equivalente a la entidad comercial en beneficiosi.
