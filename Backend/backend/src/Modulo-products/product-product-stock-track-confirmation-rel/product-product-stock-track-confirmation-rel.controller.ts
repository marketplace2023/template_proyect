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
import { ProductProductStockTrackConfirmationRel } from './entities/product-product-stock-track-confirmation-rel.entity';
import { ProductProductStockTrackConfirmationRelService } from './product-product-stock-track-confirmation-rel.service';
import { CreateProductProductStockTrackConfirmationRelDto } from './dto/created-product-product-stock-track-confirmation-rel.dto';
import { UpdatedProductProductStockTrackConfirmationRelDto } from './dto/updated-product-product-stock-track-confirmation-rel.dto';
@Controller('product-product-stock-track-confirmation-rel')
export class ProductProductStockTrackConfirmationRelController {
  constructor(
    private readonly productProductStockTrackConfirmationRelService: ProductProductStockTrackConfirmationRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductProductStockTrackConfirmationRel[]> {
    return await this.productProductStockTrackConfirmationRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaProductProductStockTrackConfirmationRelDto: CreateProductProductStockTrackConfirmationRelDto,
  ): Promise<ProductProductStockTrackConfirmationRel> {
    return await this.productProductStockTrackConfirmationRelService.create(
      createaProductProductStockTrackConfirmationRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<ProductProductStockTrackConfirmationRel> {
    return await this.productProductStockTrackConfirmationRelService.findOne(
      +id,
    );
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedProductProductStockTrackConfirmationRelDto: UpdatedProductProductStockTrackConfirmationRelDto,
    @Param('id') id: string,
  ): Promise<ProductProductStockTrackConfirmationRel> {
    return await this.productProductStockTrackConfirmationRelService.updated(
      +id,
      updatedProductProductStockTrackConfirmationRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productProductStockTrackConfirmationRelService.deleted(+id);
  }
}
