import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResCurrency } from './entities/res-currency.entity';
import { CreateResCurrencyDto } from './dto/created-res-currency.dto';
import { ResCurrencyNotFoundException } from './error/res-currency-not-found.exception';
import { UpdatedResCurrencyDto } from './dto/updated-res-currency.dto';

@Injectable()
export class ResCurrencyService {
  constructor(
    @InjectRepository(ResCurrency)
    private readonly resCurrencyRepository: Repository<ResCurrency>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResCurrency[] | undefined> {
    const offset = (page - 1) * perPage;
    const resCurrency = await this.resCurrencyRepository
      .createQueryBuilder('resCurrency')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resCurrency;
  }

  async create(
    createResCurrencyDto: CreateResCurrencyDto,
  ): Promise<ResCurrency> {
    const resCurrency = new ResCurrency(createResCurrencyDto);
    return await this.resCurrencyRepository.save(resCurrency);
  }

  async findOne(id: number): Promise<ResCurrency> {
    const resCurrency = await this.resCurrencyRepository
      .createQueryBuilder('resCurrency')
      .where('resCurrency.id = :id', { id })
      .getOne();
    if (!resCurrency) {
      throw new ResCurrencyNotFoundException();
    }
    return resCurrency;
  }

  async updated(
    id: number,
    updatedResCurrencyDto: UpdatedResCurrencyDto,
  ): Promise<ResCurrency> {
    const resCurrency = await this.resCurrencyRepository
      .createQueryBuilder('resCurrency')
      .where('resCurrency.id = :id', { id })
      .getOne();
    if (!resCurrency) {
      throw new ResCurrencyNotFoundException();
    }
    Object.assign(resCurrency, updatedResCurrencyDto);
    return await this.resCurrencyRepository.save(resCurrency);
  }

  async deleted(id: number): Promise<void> {
    const resCurrency = await this.resCurrencyRepository
      .createQueryBuilder('resCurrency')
      .where('resCurrency.id = :id', { id })
      .getOne();
    if (!resCurrency) {
      throw new ResCurrencyNotFoundException();
    }
    await this.resCurrencyRepository.softRemove(resCurrency);
  }
}
