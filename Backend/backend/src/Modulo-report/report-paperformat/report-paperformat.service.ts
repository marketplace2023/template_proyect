import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportPaperformatNotFoundException } from './error/report-paperformat-not-found.exception';
import { ReportPaperformat } from './entities/report-paperformat.entity';
import { UpdatedReportPaperformatDto } from './dto/updated-report-paperformat.dto';
import { CreateReportPaperformatDto } from './dto/create-report-paperformat.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ReportPaperformatService {
  constructor(
    @InjectRepository(ReportPaperformat)
    private readonly reportPaperformatRepository: Repository<ReportPaperformat>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ReportPaperformat[] | undefined> {
    const offset = (page - 1) * perPage;
    const reportPaperformat = await this.reportPaperformatRepository
      .createQueryBuilder('reportPaperformat')
      .take(perPage)
      .skip(offset)
      .getMany();
    return reportPaperformat;
  }

  async create(
    createReportPaperformatDto: CreateReportPaperformatDto,
  ): Promise<ReportPaperformat> {
    const reportPaperformat = new ReportPaperformat(createReportPaperformatDto);
    return await this.reportPaperformatRepository.save(reportPaperformat);
  }

  async findOne(id: number): Promise<ReportPaperformat> {
    const reportPaperformat = await this.reportPaperformatRepository
      .createQueryBuilder('reportPaperformat')
      .where('reportPaperformat.id = :id', { id })
      .getOne();
    if (!reportPaperformat) {
      throw new ReportPaperformatNotFoundException();
    }
    return reportPaperformat;
  }

  async updated(
    id: number,
    updatedReportPaperformatDto: UpdatedReportPaperformatDto,
  ): Promise<ReportPaperformat> {
    const reportPaperformat = await this.reportPaperformatRepository
      .createQueryBuilder('reportPaperformat')
      .where('reportPaperformat.id = :id', { id })
      .getOne();
    if (!reportPaperformat) {
      throw new ReportPaperformatNotFoundException();
    }
    Object.assign(reportPaperformat, updatedReportPaperformatDto);
    return await this.reportPaperformatRepository.save(reportPaperformat);
  }

  async deleted(id: number): Promise<void> {
    const reportPaperformat = await this.reportPaperformatRepository
      .createQueryBuilder('reportPaperformat')
      .where('reportPaperformat.id = :id', { id })
      .getOne();
    if (!reportPaperformat) {
      throw new ReportPaperformatNotFoundException();
    }
    await this.reportPaperformatRepository.softRemove(reportPaperformat);
    console.log('Report Paperformat column Eliminado');
  }
}
