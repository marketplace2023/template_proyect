import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PosConfigPosPaymentMethodRel } from './entities/pos-config-pos-payment-method-rel.entity';
import { CreatedPosConfigPosPaymentMethodRelDto } from './dto/created-pos-config-pos-payment-method-rel.dto';
import { UpdatedPosConfigPosPaymentMethodRelDto } from './dto/updated-pos-config-pos-payment-method-rel.dto';
import { PosConfigPosPaymentMethodRelService } from './pos-config-pos-payment-method-rel.service';
@Controller('pos-config-pos-payment-method-rel')
export class PosConfigPosPaymentMethodRelController {
  constructor(
    private readonly posConfigPosPaymentMethodRelService: PosConfigPosPaymentMethodRelService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PosConfigPosPaymentMethodRel[]> {
    return await this.posConfigPosPaymentMethodRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAosConfigPosPaymentMethodRelDto: CreatedPosConfigPosPaymentMethodRelDto,
  ): Promise<PosConfigPosPaymentMethodRel> {
    return await this.posConfigPosPaymentMethodRelService.create(
      createaAosConfigPosPaymentMethodRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<PosConfigPosPaymentMethodRel> {
    return await this.posConfigPosPaymentMethodRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAosConfigPosPaymentMethodRelDto: UpdatedPosConfigPosPaymentMethodRelDto,
    @Param('id') id: string,
  ): Promise<PosConfigPosPaymentMethodRel> {
    return await this.posConfigPosPaymentMethodRelService.updated(
      +id,
      updatedAosConfigPosPaymentMethodRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posConfigPosPaymentMethodRelService.deleted(+id);
  }
}
