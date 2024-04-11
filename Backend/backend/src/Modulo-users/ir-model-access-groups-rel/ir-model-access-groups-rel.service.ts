import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IrModelAccessGroupsRel } from './entities/ir-model-access-groups-rel.entity';
import { Repository } from 'typeorm';
import { CreateIrModelAccessGroupsRelDto } from './dto/created-ir-model-access-groups-rel.dto';
import { IrModelAccessGroupsRelNotFoundException } from './error/ir-model-access-groups-rel-not-found.exception';
import { UpdatedIrModelAccessGroupsRelDto } from './dto/updated-ir-model-access-groups-rel.dto';

@Injectable()
export class IrModelAccessGroupsRelService {
  constructor(
    @InjectRepository(IrModelAccessGroupsRel)
    private readonly irModelAccessGroupsRelRepository: Repository<IrModelAccessGroupsRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<IrModelAccessGroupsRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const irModelAccessGroupsRel = await this.irModelAccessGroupsRelRepository
      .createQueryBuilder('irModelAccessGroupsRel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return irModelAccessGroupsRel;
  }
  async create(
    createIrModelAccessGroupsRelDto: CreateIrModelAccessGroupsRelDto,
  ): Promise<IrModelAccessGroupsRel> {
    const irModelAccessGroupsRel = new IrModelAccessGroupsRel(
      createIrModelAccessGroupsRelDto,
    );
    return await this.irModelAccessGroupsRelRepository.save(
      irModelAccessGroupsRel,
    );
  }
  async findOne(id: number): Promise<IrModelAccessGroupsRel> {
    const irModelAccessGroupsRel = await this.irModelAccessGroupsRelRepository
      .createQueryBuilder('irModelAccessGroupsRel')
      .where('irModelAccessGroupsRel.id = :id', { id })
      .getOne();
    if (!irModelAccessGroupsRel) {
      throw new IrModelAccessGroupsRelNotFoundException();
    }
    return irModelAccessGroupsRel;
  }
  async updated(
    id: number,
    updatedIrModelAccessGroupsRelDto: UpdatedIrModelAccessGroupsRelDto,
  ): Promise<IrModelAccessGroupsRel> {
    const irModelAccessGroupsRel = await this.irModelAccessGroupsRelRepository
      .createQueryBuilder('irModelAccessGroupsRel')
      .where('irModelAccessGroupsRel.id = :id', { id })
      .getOne();
    if (!irModelAccessGroupsRel) {
      throw new IrModelAccessGroupsRelNotFoundException();
    }
    Object.assign(irModelAccessGroupsRel, updatedIrModelAccessGroupsRelDto);
    return await this.irModelAccessGroupsRelRepository.save(
      irModelAccessGroupsRel,
    );
  }
  async deleted(id: number): Promise<void> {
    const irModelAccessGroupsRel = await this.irModelAccessGroupsRelRepository
      .createQueryBuilder('irModelAccessGroupsRel')
      .where('irModelAccessGroupsRel.id = :id', { id })
      .getOne();
    if (!irModelAccessGroupsRel) {
      throw new IrModelAccessGroupsRelNotFoundException();
    }
    await this.irModelAccessGroupsRelRepository.softRemove(
      irModelAccessGroupsRel,
    );
    console.log('ir Model Access Groups Rel column Eliminado');
  }
}
