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
import { AccountInvoiceLineService } from './account-invoice-line.service';
import { AccountInvoiceLine } from './entities/account-invoice-line.entity';
import { CreatedAccountInvoiceLineDto } from './dto/created-account-invoice-line.dto';
import { UpdatedAccountInvoiceLineDto } from './dto/updated-account-invoice-line.dto';
@Controller('account-invoice-line')
export class AccountInvoiceLineController {
  constructor(
    private readonly accountInvoiceLineService: AccountInvoiceLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountInvoiceLine[]> {
    return await this.accountInvoiceLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountInvoiceLineDto: CreatedAccountInvoiceLineDto,
  ): Promise<AccountInvoiceLine> {
    return await this.accountInvoiceLineService.create(
      createaAccountInvoiceLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountInvoiceLine> {
    return await this.accountInvoiceLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountInvoiceLineDto: UpdatedAccountInvoiceLineDto,
    @Param('id') id: string,
  ): Promise<AccountInvoiceLine> {
    return await this.accountInvoiceLineService.updated(
      +id,
      updatedAccountInvoiceLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountInvoiceLineService.deleted(+id);
  }
}
