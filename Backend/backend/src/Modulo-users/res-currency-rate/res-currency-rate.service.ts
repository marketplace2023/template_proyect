import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCurrencyRateNotFoundException } from './error/res-currency-rate-not-found.exception';
import { ResCurrencyRate } from './entities/res-currency-rate.entity';
import { UpdatedResCurrencyRateDto } from './dto/updated-res-currency-rate.dto';
import { CreateResCurrencyRateDto } from './dto/created-res-currency-rate.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ResCurrencyRateService {
  constructor(
    @InjectRepository(ResCurrencyRate)
    private readonly resCurrencyRateRepository: Repository<ResCurrencyRate>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResCurrencyRate[] | undefined> {
    const offset = (page - 1) * perPage;
    const resCurrencyRate = await this.resCurrencyRateRepository
      .createQueryBuilder('resCurrencyRate')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resCurrencyRate;
  }

  async create(
    createResCurrencyRateDto: CreateResCurrencyRateDto,
  ): Promise<ResCurrencyRate> {
    const resCurrencyRate = new ResCurrencyRate(createResCurrencyRateDto);
    return await this.resCurrencyRateRepository.save(resCurrencyRate);
  }

  async findOne(id: number): Promise<ResCurrencyRate> {
    const resCurrencyRate = await this.resCurrencyRateRepository
      .createQueryBuilder('resCurrencyRate')
      .where('resCurrencyRate.id = :id', { id })
      .getOne();
    if (!resCurrencyRate) {
      throw new ResCurrencyRateNotFoundException();
    }
    return resCurrencyRate;
  }

  async updated(
    id: number,
    updatedResCurrencyRateDto: UpdatedResCurrencyRateDto,
  ): Promise<ResCurrencyRate> {
    const resCurrencyRate = await this.resCurrencyRateRepository
      .createQueryBuilder('resCurrencyRate')
      .where('resCurrencyRate.id = :id', { id })
      .getOne();
    if (!resCurrencyRate) {
      throw new ResCurrencyRateNotFoundException();
    }
    Object.assign(resCurrencyRate, updatedResCurrencyRateDto);
    return await this.resCurrencyRateRepository.save(resCurrencyRate);
  }

  async deleted(id: number): Promise<void> {
    const resCurrencyRate = await this.resCurrencyRateRepository
      .createQueryBuilder('resCurrencyRate')
      .where('resCurrencyRate.id = :id', { id })
      .getOne();
    if (!resCurrencyRate) {
      throw new ResCurrencyRateNotFoundException();
    }
    await this.resCurrencyRateRepository.softRemove(resCurrencyRate);
  }
}
