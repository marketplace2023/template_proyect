import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryGridService } from './delivery_grid.service';
import { CreateDeliveryGridDto } from './dto/create-delivery_grid.dto';
import { UpdateDeliveryGridDto } from './dto/update-delivery_grid.dto';

@Controller('delivery-grid')
export class DeliveryGridController {
  constructor(private readonly deliveryGridService: DeliveryGridService) {}

  @Post()
  create(@Body() createDeliveryGridDto: CreateDeliveryGridDto) {
    return this.deliveryGridService.create(createDeliveryGridDto);
  }

  @Get()
  findAll() {
    return this.deliveryGridService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryGridService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryGridDto: UpdateDeliveryGridDto,
  ) {
    return this.deliveryGridService.update(+id, updateDeliveryGridDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryGridService.remove(+id);
  }
}
//tarifas-envio                                                                     # (delivery.grid)
//# Define tarifas y costos de envío asociados con transportistas y destinos.
