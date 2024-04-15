import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerComplaintService } from './seller_complaint.service';
import { CreateSellerComplaintDto } from './dto/create-seller_complaint.dto';
import { UpdateSellerComplaintDto } from './dto/update-seller_complaint.dto';

@Controller('seller-complaint')
export class SellerComplaintController {
  constructor(
    private readonly sellerComplaintService: SellerComplaintService,
  ) {}

  @Post()
  create(@Body() createSellerComplaintDto: CreateSellerComplaintDto) {
    return this.sellerComplaintService.create(createSellerComplaintDto);
  }

  @Get()
  findAll() {
    return this.sellerComplaintService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerComplaintService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerComplaintDto: UpdateSellerComplaintDto,
  ) {
    return this.sellerComplaintService.update(+id, updateSellerComplaintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerComplaintService.remove(+id);
  }
}
//evaluacion-desempeno-vendedores                            # (seller.rating, seller.analytics, seller.complaint)
//# Análisis de métricas para mejorar la satisfacción y rendimiento de vendedores.

//resumen-valoraciones-quejas                                              # (seller.rating, seller.complaint)
//# Compilación de feedback para identificación de mejoras.
