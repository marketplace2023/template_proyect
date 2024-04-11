import { Module } from '@nestjs/common';
import { StockPickingNoteController } from './stock-picking-note.controller';
import { StockPickingNoteService } from './stock-picking-note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPickingNote } from './entities/stock-picking-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPickingNote])],
  controllers: [StockPickingNoteController],
  providers: [StockPickingNoteService],
})
export class StockPickingNoteModule {}
