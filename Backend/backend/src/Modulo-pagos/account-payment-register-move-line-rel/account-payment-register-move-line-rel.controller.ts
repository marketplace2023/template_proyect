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
import { AccountPaymentRegisterMoveLineRelService } from './account-payment-register-move-line-rel.service';
import { AccountPaymentRegisterMoveLineRel } from './entities/account-payment-register-move-line-rel.entity';
import { CreatedAccountPaymentRegisterMoveLineRelDto } from './dto/created-account-payment-register-move-line-rel.dto';
import { UpdatedAccountPaymentRegisterMoveLineRelDto } from './dto/updated-account-payment-register-move-line-rel.dto';

@Controller('account-payment-register-move-line-rel')
export class AccountPaymentRegisterMoveLineRelController {
  constructor(
    private readonly accountPaymentRegisterMoveLineRelService: AccountPaymentRegisterMoveLineRelService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentRegisterMoveLineRel[]> {
    return await this.accountPaymentRegisterMoveLineRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentRegisterMoveLineRelDto: CreatedAccountPaymentRegisterMoveLineRelDto,
  ): Promise<AccountPaymentRegisterMoveLineRel> {
    return await this.accountPaymentRegisterMoveLineRelService.create(
      createaAccountPaymentRegisterMoveLineRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<AccountPaymentRegisterMoveLineRel> {
    return await this.accountPaymentRegisterMoveLineRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentRegisterMoveLineRelDto: UpdatedAccountPaymentRegisterMoveLineRelDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentRegisterMoveLineRel> {
    return await this.accountPaymentRegisterMoveLineRelService.updated(
      +id,
      updatedAccountPaymentRegisterMoveLineRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentRegisterMoveLineRelService.deleted(+id);
  }
}
