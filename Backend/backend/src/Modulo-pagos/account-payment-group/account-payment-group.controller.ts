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
import { AccountPaymentGroupService } from './account-payment-group.service';
import { CreatedAccountPaymentGroupDto } from './dto/created-account-payment-group.dto';
import { AccountPaymentGroup } from './entities/account-payment-group.entity';
import { UpdatedAccountPaymentGroupDto } from './dto/updated-account-payment-group.dto';
@Controller('account-payment-group')
export class AccountPaymentGroupController {
  constructor(
    private readonly accountPaymentGroupService: AccountPaymentGroupService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentGroup[]> {
    return await this.accountPaymentGroupService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountPaymentGroupDto: CreatedAccountPaymentGroupDto,
  ): Promise<AccountPaymentGroup> {
    return await this.accountPaymentGroupService.create(
      createaAccountPaymentGroupDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentGroup> {
    return await this.accountPaymentGroupService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountPaymentGroupDto: UpdatedAccountPaymentGroupDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentGroup> {
    return await this.accountPaymentGroupService.updated(
      +id,
      updatedAccountPaymentGroupDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentGroupService.deleted(+id);
  }
}
