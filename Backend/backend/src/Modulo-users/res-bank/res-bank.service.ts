import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResBank } from './entities/res-bank.entity';
import { Repository } from 'typeorm';
import { CreateResBankDto } from './dto/created-res-bank.dto';
import { ResBankNotFoundException } from './error/res-bank-not-found.exception';
import { UpdatedResBankDto } from './dto/updated-res-bank.dto';

@Injectable()
export class ResBankService {
  constructor(
    @InjectRepository(ResBank)
    private readonly resBankRepository: Repository<ResBank>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResBank[] | undefined> {
    const offset = (page - 1) * perPage;
    const resBank = await this.resBankRepository
      .createQueryBuilder('resBank')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resBank;
  }
  async create(createResBankDto: CreateResBankDto): Promise<ResBank> {
    const resBank = new ResBank(createResBankDto);
    return await this.resBankRepository.save(resBank);
  }
  async findOne(id: number): Promise<ResBank> {
    const resBank = await this.resBankRepository
      .createQueryBuilder('resBank')
      .where('resBank.id = :id', { id })
      .getOne();
    if (!resBank) {
      throw new ResBankNotFoundException();
    }
    return resBank;
  }
  async updated(
    id: number,
    updatedResBankDto: UpdatedResBankDto,
  ): Promise<ResBank> {
    const resBank = await this.resBankRepository
      .createQueryBuilder('resBank')
      .where('resBank.id = :id', { id })
      .getOne();
    if (!resBank) {
      throw new ResBankNotFoundException();
    }
    Object.assign(resBank, updatedResBankDto);
    return await this.resBankRepository.save(resBank);
  }
  async deleted(id: number): Promise<void> {
    const resBank = await this.resBankRepository
      .createQueryBuilder('resBank')
      .where('resBank.id = :id', { id })
      .getOne();
    if (!resBank) {
      throw new ResBankNotFoundException();
    }
    await this.resBankRepository.softRemove(resBank);
    console.log('res bank column Eliminado');
  }
}
