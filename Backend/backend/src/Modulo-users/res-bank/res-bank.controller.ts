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
import { ResBankService } from './res-bank.service';
import { ResBank } from './entities/res-bank.entity';
import { CreateResBankDto } from './dto/created-res-bank.dto';
import { UpdatedResBankDto } from './dto/updated-res-bank.dto';
@Controller('res-bank')
export class ResBankController {
  constructor(private readonly resBankService: ResBankService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResBank[]> {
    return await this.resBankService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaResBankDto: CreateResBankDto,
  ): Promise<ResBank> {
    return await this.resBankService.create(createaResBankDto);
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResBank> {
    return await this.resBankService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedResBankDto: UpdatedResBankDto,
    @Param('id') id: string,
  ): Promise<ResBank> {
    return await this.resBankService.updated(+id, updatedResBankDto);
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resBankService.deleted(+id);
  }
}
