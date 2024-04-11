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
import { CreatedInvoiceDto } from './dto/created-invoice.dto';
import { InvoiceService } from './invoice.service';
import { Invoice } from './entities/invoice.entity';
import { UpdatedInvoiceDto } from './dto/updated-invoice.dto';
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<Invoice[]> {
    return await this.invoiceService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createdInvoiceDto: CreatedInvoiceDto,
  ): Promise<Invoice> {
    return await this.invoiceService.create(createdInvoiceDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Invoice> {
    return await this.invoiceService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedInvoiceDto: UpdatedInvoiceDto,
    @Param('id') id: string,
  ): Promise<Invoice> {
    return await this.invoiceService.updated(+id, updatedInvoiceDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.invoiceService.deleted(+id);
  }
}
