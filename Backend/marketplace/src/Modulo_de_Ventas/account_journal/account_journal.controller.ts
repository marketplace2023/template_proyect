import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountJournalService } from './account_journal.service';
import { CreateAccountJournalDto } from './dto/create-account_journal.dto';
import { UpdateAccountJournalDto } from './dto/update-account_journal.dto';

@Controller('account-journal')
export class AccountJournalController {
  constructor(private readonly accountJournalService: AccountJournalService) {}

  @Post()
  create(@Body() createAccountJournalDto: CreateAccountJournalDto) {
    return this.accountJournalService.create(createAccountJournalDto);
  }

  @Get()
  findAll() {
    return this.accountJournalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountJournalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountJournalDto: UpdateAccountJournalDto,
  ) {
    return this.accountJournalService.update(+id, updateAccountJournalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountJournalService.remove(+id);
  }
}
//configuracion-opciones-facturacion              # (account.journal)
//# Configura las opciones de facturación disponibles para las órdenes de venta.
