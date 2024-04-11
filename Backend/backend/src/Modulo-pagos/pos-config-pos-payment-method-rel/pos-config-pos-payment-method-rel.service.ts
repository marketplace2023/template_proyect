import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PosConfigPosPaymentMethodRelNotFoundException } from './error/pos-config-pos-payment-method-rel-not-found.exception';
import { PosConfigPosPaymentMethodRel } from './entities/pos-config-pos-payment-method-rel.entity';
import { UpdatedPosConfigPosPaymentMethodRelDto } from './dto/updated-pos-config-pos-payment-method-rel.dto';
import { CreatedPosConfigPosPaymentMethodRelDto } from './dto/created-pos-config-pos-payment-method-rel.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PosConfigPosPaymentMethodRelService {
  constructor(
    @InjectRepository(PosConfigPosPaymentMethodRel)
    private readonly posConfigPosPaymentMethodRelRepository: Repository<PosConfigPosPaymentMethodRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PosConfigPosPaymentMethodRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const posConfigPosPaymentMethodRel =
      await this.posConfigPosPaymentMethodRelRepository
        .createQueryBuilder('posConfigPosPaymentMethodRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return posConfigPosPaymentMethodRel;
  }

  async create(
    createdPosConfigPosPaymentMethodRelDto: CreatedPosConfigPosPaymentMethodRelDto,
  ): Promise<PosConfigPosPaymentMethodRel> {
    const posConfigPosPaymentMethodRel = new PosConfigPosPaymentMethodRel(
      createdPosConfigPosPaymentMethodRelDto,
    );
    return await this.posConfigPosPaymentMethodRelRepository.save(
      posConfigPosPaymentMethodRel,
    );
  }

  async findOne(id: number): Promise<PosConfigPosPaymentMethodRel> {
    const posConfigPosPaymentMethodRel =
      await this.posConfigPosPaymentMethodRelRepository
        .createQueryBuilder('posConfigPosPaymentMethodRel')
        .where('posConfigPosPaymentMethodRel.id = :id', { id })
        .getOne();
    if (!posConfigPosPaymentMethodRel) {
      throw new PosConfigPosPaymentMethodRelNotFoundException();
    }
    return posConfigPosPaymentMethodRel;
  }

  async updated(
    id: number,
    updatedPosConfigPosPaymentMethodRelDto: UpdatedPosConfigPosPaymentMethodRelDto,
  ): Promise<PosConfigPosPaymentMethodRel> {
    const posConfigPosPaymentMethodRel =
      await this.posConfigPosPaymentMethodRelRepository
        .createQueryBuilder('posConfigPosPaymentMethodRel')
        .where('posConfigPosPaymentMethodRel.id = :id', { id })
        .getOne();
    if (!posConfigPosPaymentMethodRel) {
      throw new PosConfigPosPaymentMethodRelNotFoundException();
    }
    Object.assign(
      posConfigPosPaymentMethodRel,
      updatedPosConfigPosPaymentMethodRelDto,
    );
    return await this.posConfigPosPaymentMethodRelRepository.save(
      posConfigPosPaymentMethodRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const posConfigPosPaymentMethodRel =
      await this.posConfigPosPaymentMethodRelRepository
        .createQueryBuilder('posConfigPosPaymentMethodRel')
        .where('posConfigPosPaymentMethodRel.id = :id', { id })
        .getOne();
    if (!posConfigPosPaymentMethodRel) {
      throw new PosConfigPosPaymentMethodRelNotFoundException();
    }
    await this.posConfigPosPaymentMethodRelRepository.softRemove(
      posConfigPosPaymentMethodRel,
    );
    console.log('pos Config Pos Payment Method Rel Eliminado');
  }
}
