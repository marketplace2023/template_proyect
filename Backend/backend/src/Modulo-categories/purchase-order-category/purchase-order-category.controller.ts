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
import { PurchaseOrderCategoryService } from './purchase-order-category.service';
import { PurchaseOrderCategory } from './entities/purchase-order-category.entity';
import { CreatedPurchaseOrderCategoryDto } from './dto/created-purchase-order-category.dto';
import { UpdatedPurchaseOrderCategoryDto } from './dto/updated-purchase-order-category.dto';
@Controller('purchase-order-category')
export class PurchaseOrderCategoryController {
  constructor(
    private readonly purchaseOrderCategoryService: PurchaseOrderCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PurchaseOrderCategory[]> {
    return await this.purchaseOrderCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadPurchaseOrderCategoryDto: CreatedPurchaseOrderCategoryDto,
  ): Promise<PurchaseOrderCategory> {
    return await this.purchaseOrderCategoryService.create(
      createadPurchaseOrderCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PurchaseOrderCategory> {
    return await this.purchaseOrderCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedPurchaseOrderCategoryDto: UpdatedPurchaseOrderCategoryDto,
    @Param('id') id: string,
  ): Promise<PurchaseOrderCategory> {
    return await this.purchaseOrderCategoryService.updated(
      +id,
      updatedPurchaseOrderCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.purchaseOrderCategoryService.deleted(+id);
  }
}
