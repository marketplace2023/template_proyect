import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SellerRatingLine } from './entities/seller-rating-line.entity';
import { Repository } from 'typeorm';
import { CreateSellerRatingLineDto } from './dto/create-seller-rating-line.dto';
import { SellerRatingLineNotFoundException } from './error/seller-rating-line-not-found.exception';
import { UpdatedSellerRatingLineDto } from './dto/updated-seller-rating-line.dto';

@Injectable()
export class SellerRatingLineService {
  constructor(
    @InjectRepository(SellerRatingLine)
    private readonly sellerRatingLineRepository: Repository<SellerRatingLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SellerRatingLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const sellerRatingLine = await this.sellerRatingLineRepository
      .createQueryBuilder('sellerRatingLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return sellerRatingLine;
  }

  async create(
    createSellerRatingLineDto: CreateSellerRatingLineDto,
  ): Promise<SellerRatingLine> {
    const sellerRatingLine = new SellerRatingLine(createSellerRatingLineDto);
    return await this.sellerRatingLineRepository.save(sellerRatingLine);
  }

  async findOne(id: number): Promise<SellerRatingLine> {
    const sellerRatingLine = await this.sellerRatingLineRepository
      .createQueryBuilder('sellerRatingLine')
      .where('sellerRatingLine.id = :id', { id })
      .getOne();
    if (!sellerRatingLine) {
      throw new SellerRatingLineNotFoundException();
    }
    return sellerRatingLine;
  }

  async updated(
    id: number,
    updatedSellerRatingLineDto: UpdatedSellerRatingLineDto,
  ): Promise<SellerRatingLine> {
    const sellerRatingLine = await this.sellerRatingLineRepository
      .createQueryBuilder('sellerRatingLine')
      .where('sellerRatingLine.id = :id', { id })
      .getOne();
    if (!sellerRatingLine) {
      throw new SellerRatingLineNotFoundException();
    }
    Object.assign(sellerRatingLine, updatedSellerRatingLineDto);
    return await this.sellerRatingLineRepository.save(sellerRatingLine);
  }

  async deleted(id: number): Promise<void> {
    const sellerRatingLine = await this.sellerRatingLineRepository
      .createQueryBuilder('sellerRatingLine')
      .where('sellerRatingLine.id = :id', { id })
      .getOne();
    if (!sellerRatingLine) {
      throw new SellerRatingLineNotFoundException();
    }
    await this.sellerRatingLineRepository.softRemove(sellerRatingLine);
    console.log('sellerRatingLine Eliminado');
  }
}
