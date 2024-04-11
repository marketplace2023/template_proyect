import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleChannelNotFoundException } from './error/sale-channel-not-found.exception';
import { SaleChannel } from './entities/sale-channel.entity';
import { CreateSaleChannelDto } from './dto/created-sale-channel.dto';
import { Repository } from 'typeorm';
import { UpdatedSaleChannelDto } from './dto/updated-sale-channel.dto';

@Injectable()
export class SaleChannelService {
  constructor(
    @InjectRepository(SaleChannel)
    private readonly saleChannelRepository: Repository<SaleChannel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleChannel[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleChannel = await this.saleChannelRepository
      .createQueryBuilder('saleChannel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleChannel;
  }

  async create(
    createSaleChannelDto: CreateSaleChannelDto,
  ): Promise<SaleChannel> {
    const saleChannel = new SaleChannel(createSaleChannelDto);
    return await this.saleChannelRepository.save(saleChannel);
  }

  async findOne(id: number): Promise<SaleChannel> {
    const saleChannel = await this.saleChannelRepository
      .createQueryBuilder('saleChannel')
      .where('saleChannel.id = :id', { id })
      .getOne();
    if (!saleChannel) {
      throw new SaleChannelNotFoundException();
    }
    return saleChannel;
  }

  async updated(
    id: number,
    updatedSaleChannelDto: UpdatedSaleChannelDto,
  ): Promise<SaleChannel> {
    const saleChannel = await this.saleChannelRepository
      .createQueryBuilder('saleChannel')
      .where('saleChannel.id = :id', { id })
      .getOne();
    if (!saleChannel) {
      throw new SaleChannelNotFoundException();
    }
    Object.assign(saleChannel, updatedSaleChannelDto);
    return await this.saleChannelRepository.save(saleChannel);
  }

  async deleted(id: number): Promise<void> {
    const saleChannel = await this.saleChannelRepository
      .createQueryBuilder('saleChannel')
      .where('saleChannel.id = :id', { id })
      .getOne();
    if (!saleChannel) {
      throw new SaleChannelNotFoundException();
    }
    await this.saleChannelRepository.softRemove(saleChannel);
    console.log('saleChannel Eliminado');
  }
}
