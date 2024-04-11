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
import { SaleCouponProgramLineService } from './sale-coupon-program-line.service';
import { SaleCouponProgramLine } from './entities/sale-coupon-program-line.entity';
import { CreateSaleCouponProgramLineDto } from './dto/create-sale-coupon-program-line.dto';
import { UpdatedSaleCouponProgramLineDto } from './dto/updatedsale-coupon-program-line.dto';
@Controller('sale-coupon-program-line')
export class SaleCouponProgramLineController {
  constructor(
    private readonly saleCouponProgramLineService: SaleCouponProgramLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCouponProgramLine[]> {
    return await this.saleCouponProgramLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleCouponProgramLineDto: CreateSaleCouponProgramLineDto,
  ): Promise<SaleCouponProgramLine> {
    return await this.saleCouponProgramLineService.create(
      createaSaleCouponProgramLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCouponProgramLine> {
    return await this.saleCouponProgramLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleCouponProgramLineDto: UpdatedSaleCouponProgramLineDto,
    @Param('id') id: string,
  ): Promise<SaleCouponProgramLine> {
    return await this.saleCouponProgramLineService.updated(
      +id,
      updatedSaleCouponProgramLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponProgramLineService.deleted(+id);
  }
}
