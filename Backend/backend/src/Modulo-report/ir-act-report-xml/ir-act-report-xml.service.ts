import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IrActReportXml } from './entities/ir-act-report-xml.entity';
import { CreateIrActReportXmlDto } from './dto/created-ir-act-report-xml.dto';
import { IrActReportXmlNotFoundException } from './error/ir-act-report-xml-not-found.exception';
import { UpdatedIrActReportXmlDto } from './dto/updated-ir-act-report-xml.dto';

@Injectable()
export class IrActReportXmlService {
  constructor(
    @InjectRepository(IrActReportXml)
    private readonly irActReportXmlRepository: Repository<IrActReportXml>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<IrActReportXml[] | undefined> {
    const offset = (page - 1) * perPage;
    const irActReportXml = await this.irActReportXmlRepository
      .createQueryBuilder('irActReportXml')
      .take(perPage)
      .skip(offset)
      .getMany();
    return irActReportXml;
  }

  async create(
    createIrActReportXmlDto: CreateIrActReportXmlDto,
  ): Promise<IrActReportXml> {
    const irActReportXml = new IrActReportXml(createIrActReportXmlDto);
    return await this.irActReportXmlRepository.save(irActReportXml);
  }

  async findOne(id: number): Promise<IrActReportXml> {
    const irActReportXml = await this.irActReportXmlRepository
      .createQueryBuilder('irActReportXml')
      .where('irActReportXml.id = :id', { id })
      .getOne();
    if (!irActReportXml) {
      throw new IrActReportXmlNotFoundException();
    }
    return irActReportXml;
  }

  async updated(
    id: number,
    updatedIrActReportXmlDto: UpdatedIrActReportXmlDto,
  ): Promise<IrActReportXml> {
    const irActReportXml = await this.irActReportXmlRepository
      .createQueryBuilder('irActReportXml')
      .where('irActReportXml.id = :id', { id })
      .getOne();
    if (!irActReportXml) {
      throw new IrActReportXmlNotFoundException();
    }
    Object.assign(irActReportXml, updatedIrActReportXmlDto);
    return await this.irActReportXmlRepository.save(irActReportXml);
  }

  async deleted(id: number): Promise<void> {
    const irActReportXml = await this.irActReportXmlRepository
      .createQueryBuilder('irActReportXml')
      .where('irActReportXml.id = :id', { id })
      .getOne();
    if (!irActReportXml) {
      throw new IrActReportXmlNotFoundException();
    }
    await this.irActReportXmlRepository.softRemove(irActReportXml);
    console.log('account Report column Eliminado');
  }
}
