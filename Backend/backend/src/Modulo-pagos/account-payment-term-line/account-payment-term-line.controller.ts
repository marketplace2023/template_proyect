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
import { AccountPaymentTermLineService } from './account-payment-term-line.service';
import { AccountPaymentTermLine } from './entities/account-payment-term-line.entity';
import { UpdatedAccountPaymentTermLineDto } from './dto/updated-account-payment-term-line.dto';
import { CreateAccountPaymentTermLineDto } from './dto/create-account-payment-term-line.dto';
@Controller('account-payment-term-line')
export class AccountPaymentTermLineController {
  constructor(
    private readonly accountPaymentTermLineService: AccountPaymentTermLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentTermLine[]> {
    return await this.accountPaymentTermLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentTermLineDto: CreateAccountPaymentTermLineDto,
  ): Promise<AccountPaymentTermLine> {
    return await this.accountPaymentTermLineService.create(
      createaAccountPaymentTermLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentTermLine> {
    return await this.accountPaymentTermLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentTermLineDto: UpdatedAccountPaymentTermLineDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentTermLine> {
    return await this.accountPaymentTermLineService.updated(
      +id,
      updatedAccountPaymentTermLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentTermLineService.deleted(+id);
  }
}
