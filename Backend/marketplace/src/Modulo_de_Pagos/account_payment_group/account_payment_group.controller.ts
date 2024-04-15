import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentGroupService } from './account_payment_group.service';
import { CreateAccountPaymentGroupDto } from './dto/create-account_payment_group.dto';
import { UpdateAccountPaymentGroupDto } from './dto/update-account_payment_group.dto';

@Controller('account-payment-group')
export class AccountPaymentGroupController {
  constructor(
    private readonly accountPaymentGroupService: AccountPaymentGroupService,
  ) {}

  @Post()
  create(@Body() createAccountPaymentGroupDto: CreateAccountPaymentGroupDto) {
    return this.accountPaymentGroupService.create(createAccountPaymentGroupDto);
  }

  @Get()
  findAll() {
    return this.accountPaymentGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentGroupDto: UpdateAccountPaymentGroupDto,
  ) {
    return this.accountPaymentGroupService.update(
      +id,
      updateAccountPaymentGroupDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentGroupService.remove(+id);
  }
}
//agrupacion-pagos                                                                  # (account_payment_group)
//# Organización de pagos por criterios específicos para su gestión conjunta.
