import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryCarrierServiceService } from './delivery_carrier_service.service';
import { CreateDeliveryCarrierServiceDto } from './dto/create-delivery_carrier_service.dto';
import { UpdateDeliveryCarrierServiceDto } from './dto/update-delivery_carrier_service.dto';

@Controller('delivery-carrier-service')
export class DeliveryCarrierServiceController {
  constructor(
    private readonly deliveryCarrierServiceService: DeliveryCarrierServiceService,
  ) {}

  @Post()
  create(
    @Body() createDeliveryCarrierServiceDto: CreateDeliveryCarrierServiceDto,
  ) {
    return this.deliveryCarrierServiceService.create(
      createDeliveryCarrierServiceDto,
    );
  }

  @Get()
  findAll() {
    return this.deliveryCarrierServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryCarrierServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryCarrierServiceDto: UpdateDeliveryCarrierServiceDto,
  ) {
    return this.deliveryCarrierServiceService.update(
      +id,
      updateDeliveryCarrierServiceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryCarrierServiceService.remove(+id);
  }
}
//servicios-transportistas                                                        # (delivery.carrier.service)
//# Gestiona servicios específicos ofrecidos por cada transportista.
