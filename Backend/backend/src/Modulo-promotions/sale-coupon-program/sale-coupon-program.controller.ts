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
import { SaleCouponProgramService } from './sale-coupon-program.service';
import { SaleCouponProgram } from './entities/sale-coupon-program.entity';
import { CreateSaleCouponProgramDto } from './dto/create-sale-coupon-program.dto';
import { UpdatedSaleCouponProgramDto } from './dto/updated-sale-coupon-program.dto';
@Controller('sale-coupon-program')
export class SaleCouponProgramController {
  constructor(
    private readonly saleCouponProgramService: SaleCouponProgramService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCouponProgram[]> {
    return await this.saleCouponProgramService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleCouponProgramDto: CreateSaleCouponProgramDto,
  ): Promise<SaleCouponProgram> {
    return await this.saleCouponProgramService.create(
      createaSaleCouponProgramDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCouponProgram> {
    return await this.saleCouponProgramService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleCouponProgramDto: UpdatedSaleCouponProgramDto,
    @Param('id') id: string,
  ): Promise<SaleCouponProgram> {
    return await this.saleCouponProgramService.updated(
      +id,
      updatedSaleCouponProgramDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponProgramService.deleted(+id);
  }
}
