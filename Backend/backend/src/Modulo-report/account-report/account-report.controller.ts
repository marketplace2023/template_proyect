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
import { AccountReport } from './entities/account-report.entity';
import { AccountReportService } from './account-report.service';
import { CreateAccountReportDto } from './dto/create-account-report.dto';
import { UpdatedAccountReportDto } from './dto/updated-account-report.dto';

@Controller('account-report')
export class AccountReportController {
  constructor(private readonly accountReportService: AccountReportService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountReport[]> {
    return await this.accountReportService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountReportDto: CreateAccountReportDto,
  ): Promise<AccountReport> {
    return await this.accountReportService.create(createaAccountReportDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountReport> {
    return await this.accountReportService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountReportDto: UpdatedAccountReportDto,
    @Param('id') id: string,
  ): Promise<AccountReport> {
    return await this.accountReportService.updated(
      +id,
      updatedAccountReportDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountReportService.deleted(+id);
  }
}
