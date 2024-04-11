import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingNoteNotFoundException } from './error/stock-picking-note-not-found.exception';
import { StockPickingNote } from './entities/stock-picking-note.entity';
import { UpdatedStockPickingNoteDto } from './dto/updated-stock-picking-note.dto';
import { CreateStockPickingNoteDto } from './dto/created-stock-picking-note.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StockPickingNoteService {
  constructor(
    @InjectRepository(StockPickingNote)
    private readonly stockPickingNoteRepository: Repository<StockPickingNote>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingNote[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingNote = await this.stockPickingNoteRepository
      .createQueryBuilder('stockPickingNote')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingNote;
  }

  async create(
    createStockPickingNoteDto: CreateStockPickingNoteDto,
  ): Promise<StockPickingNote> {
    const stockPickingNote = new StockPickingNote(createStockPickingNoteDto);
    return await this.stockPickingNoteRepository.save(stockPickingNote);
  }

  async findOne(id: number): Promise<StockPickingNote> {
    const stockPickingNote = await this.stockPickingNoteRepository
      .createQueryBuilder('stockPickingNote')
      .where('stockPickingNote.id = :id', { id })
      .getOne();
    if (!stockPickingNote) {
      throw new StockPickingNoteNotFoundException();
    }
    return stockPickingNote;
  }

  async updated(
    id: number,
    updatedStockPickingNoteDto: UpdatedStockPickingNoteDto,
  ): Promise<StockPickingNote> {
    const stockPickingNote = await this.stockPickingNoteRepository
      .createQueryBuilder('stockPickingNote')
      .where('stockPickingNote.id = :id', { id })
      .getOne();
    if (!stockPickingNote) {
      throw new StockPickingNoteNotFoundException();
    }
    Object.assign(stockPickingNote, updatedStockPickingNoteDto);
    return await this.stockPickingNoteRepository.save(stockPickingNote);
  }

  async deleted(id: number): Promise<void> {
    const stockPickingNote = await this.stockPickingNoteRepository
      .createQueryBuilder('stockPickingNote')
      .where('stockPickingNote.id = :id', { id })
      .getOne();
    if (!stockPickingNote) {
      throw new StockPickingNoteNotFoundException();
    }
    await this.stockPickingNoteRepository.softRemove(stockPickingNote);
    console.log('stockPickingNote Eliminado');
  }
}
