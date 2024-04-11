import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportLayout } from './entities/report-layout.entity';
import { Repository } from 'typeorm';
import { CreateReportLayoutDto } from './dto/created-report-layout.dto';
import { ReportLayoutNotFoundException } from './error/report-layout-not-found.exception';
import { UpdatedReportLayoutDto } from './dto/updated-report-layout.dto';

@Injectable()
export class ReportLayoutService {
  constructor(
    @InjectRepository(ReportLayout)
    private readonly reportLayoutRepository: Repository<ReportLayout>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ReportLayout[] | undefined> {
    const offset = (page - 1) * perPage;
    const reportLayout = await this.reportLayoutRepository
      .createQueryBuilder('reportLayout')
      .take(perPage)
      .skip(offset)
      .getMany();
    return reportLayout;
  }

  async create(
    createReportLayoutDto: CreateReportLayoutDto,
  ): Promise<ReportLayout> {
    const reportLayout = new ReportLayout(createReportLayoutDto);
    return await this.reportLayoutRepository.save(reportLayout);
  }

  async findOne(id: number): Promise<ReportLayout> {
    const reportLayout = await this.reportLayoutRepository
      .createQueryBuilder('reportLayout')
      .where('reportLayout.id = :id', { id })
      .getOne();
    if (!reportLayout) {
      throw new ReportLayoutNotFoundException();
    }
    return reportLayout;
  }

  async updated(
    id: number,
    updatedReportLayoutDto: UpdatedReportLayoutDto,
  ): Promise<ReportLayout> {
    const reportLayout = await this.reportLayoutRepository
      .createQueryBuilder('reportLayout')
      .where('reportLayout.id = :id', { id })
      .getOne();
    if (!reportLayout) {
      throw new ReportLayoutNotFoundException();
    }
    Object.assign(reportLayout, updatedReportLayoutDto);
    return await this.reportLayoutRepository.save(reportLayout);
  }

  async deleted(id: number): Promise<void> {
    const reportLayout = await this.reportLayoutRepository
      .createQueryBuilder('reportLayout')
      .where('reportLayout.id = :id', { id })
      .getOne();
    if (!reportLayout) {
      throw new ReportLayoutNotFoundException();
    }
    await this.reportLayoutRepository.softRemove(reportLayout);
    console.log('Report Layout column Eliminado');
  }
}
