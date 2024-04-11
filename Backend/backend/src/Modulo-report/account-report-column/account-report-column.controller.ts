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
import { AccountReportColumn } from './entities/account-report-column.entity';
import { CreateAccountReportColumnDto } from './dto/create-account-report-column.dto';
import { UpdatedAccountReportColumnDto } from './dto/updated-account-report-column.dto';
import { AccountReportColumnService } from './account-report-column.service';
@Controller('account-report-column')
export class AccountReportColumnController {
  constructor(
    private readonly accountReportService: AccountReportColumnService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountReportColumn[]> {
    return await this.accountReportService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountReportColumnDto: CreateAccountReportColumnDto,
  ): Promise<AccountReportColumn> {
    return await this.accountReportService.create(
      createaAccountReportColumnDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountReportColumn> {
    return await this.accountReportService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountReportColumnDto: UpdatedAccountReportColumnDto,
    @Param('id') id: string,
  ): Promise<AccountReportColumn> {
    return await this.accountReportService.updated(
      +id,
      updatedAccountReportColumnDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountReportService.deleted(+id);
  }
}
