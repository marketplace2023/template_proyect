import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryCarrierService } from './delivery_carrier.service';
import { CreateDeliveryCarrierDto } from './dto/create-delivery_carrier.dto';
import { UpdateDeliveryCarrierDto } from './dto/update-delivery_carrier.dto';

@Controller('delivery-carrier')
export class DeliveryCarrierController {
  constructor(
    private readonly deliveryCarrierService: DeliveryCarrierService,
  ) {}

  @Post()
  create(@Body() createDeliveryCarrierDto: CreateDeliveryCarrierDto) {
    return this.deliveryCarrierService.create(createDeliveryCarrierDto);
  }

  @Get()
  findAll() {
    return this.deliveryCarrierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryCarrierService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryCarrierDto: UpdateDeliveryCarrierDto,
  ) {
    return this.deliveryCarrierService.update(+id, updateDeliveryCarrierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryCarrierService.remove(+id);
  }
}
//configuracion-opciones-envio                    # (delivery.carrier)
//# Configura las opciones de envío disponibles para las órdenes de venta.
