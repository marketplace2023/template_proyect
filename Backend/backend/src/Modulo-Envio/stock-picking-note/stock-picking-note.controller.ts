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
import { UpdatedStockPickingNoteDto } from './dto/updated-stock-picking-note.dto';
import { StockPickingNote } from './entities/stock-picking-note.entity';
import { CreateStockPickingNoteDto } from './dto/created-stock-picking-note.dto';
import { StockPickingNoteService } from './stock-picking-note.service';
@Controller('stock-picking-note')
export class StockPickingNoteController {
  constructor(
    private readonly stockPickingNoteService: StockPickingNoteService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingNote[]> {
    return await this.stockPickingNoteService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingNoteDto: CreateStockPickingNoteDto,
  ): Promise<StockPickingNote> {
    return await this.stockPickingNoteService.create(
      createaStockPickingNoteDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingNote> {
    return await this.stockPickingNoteService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockPickingNoteDto: UpdatedStockPickingNoteDto,
    @Param('id') id: string,
  ): Promise<StockPickingNote> {
    return await this.stockPickingNoteService.updated(
      +id,
      updatedStockPickingNoteDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingNoteService.deleted(+id);
  }
}
