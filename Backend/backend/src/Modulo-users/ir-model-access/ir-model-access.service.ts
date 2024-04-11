import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IrModelAccess } from './entities/ir-model-access.entity';
import { IrModelAccessNotFoundException } from './error/ir-model-access-not-found.exception';
import { UpdatedIrModelAccessDto } from './dto/updated-ir-model-access.dto';
import { CreateIrModelAccessDto } from './dto/created-ir-model-access.dto';

@Injectable()
export class IrModelAccessService {
  constructor(
    @InjectRepository(IrModelAccess)
    private readonly irModelAccessRepository: Repository<IrModelAccess>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<IrModelAccess[] | undefined> {
    const offset = (page - 1) * perPage;
    const irModelAccess = await this.irModelAccessRepository
      .createQueryBuilder('irModelAccess')
      .take(perPage)
      .skip(offset)
      .getMany();
    return irModelAccess;
  }
  async create(
    createIrModelAccessDto: CreateIrModelAccessDto,
  ): Promise<IrModelAccess> {
    const irModelAccess = new IrModelAccess(createIrModelAccessDto);
    return await this.irModelAccessRepository.save(irModelAccess);
  }
  async findOne(id: number): Promise<IrModelAccess> {
    const irModelAccess = await this.irModelAccessRepository
      .createQueryBuilder('irModelAccess')
      .where('irModelAccess.id = :id', { id })
      .getOne();
    if (!irModelAccess) {
      throw new IrModelAccessNotFoundException();
    }
    return irModelAccess;
  }
  async updated(
    id: number,
    updatedIrModelAccessDto: UpdatedIrModelAccessDto,
  ): Promise<IrModelAccess> {
    const irModelAccess = await this.irModelAccessRepository
      .createQueryBuilder('irModelAccess')
      .where('irModelAccess.id = :id', { id })
      .getOne();
    if (!irModelAccess) {
      throw new IrModelAccessNotFoundException();
    }
    Object.assign(irModelAccess, updatedIrModelAccessDto);
    return await this.irModelAccessRepository.save(irModelAccess);
  }
  async deleted(id: number): Promise<void> {
    const irModelAccess = await this.irModelAccessRepository
      .createQueryBuilder('irModelAccess')
      .where('irModelAccess.id = :id', { id })
      .getOne();
    if (!irModelAccess) {
      throw new IrModelAccessNotFoundException();
    }
    await this.irModelAccessRepository.softRemove(irModelAccess);
    console.log('irModelAccess column Eliminado');
  }
}
