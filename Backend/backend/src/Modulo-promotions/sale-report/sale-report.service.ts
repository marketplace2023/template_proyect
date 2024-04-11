import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleReport } from './entities/sale-report.entity';
import { Repository } from 'typeorm';
import { CreateSaleReportDto } from './dto/created-sale-report.dto';
import { SaleReportNotFoundException } from './error/sale-report-not-found.exception';
import { UpdatedSaleReportDto } from './dto/updated-sale-report.dto';

@Injectable()
export class SaleReportService {
  constructor(
    @InjectRepository(SaleReport)
    private readonly saleReportRepository: Repository<SaleReport>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleReport[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleReport = await this.saleReportRepository
      .createQueryBuilder('saleReport')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleReport;
  }

  async create(createSaleReportDto: CreateSaleReportDto): Promise<SaleReport> {
    const saleReport = new SaleReport(createSaleReportDto);
    return await this.saleReportRepository.save(saleReport);
  }

  async findOne(id: number): Promise<SaleReport> {
    const saleReport = await this.saleReportRepository
      .createQueryBuilder('saleReport')
      .where('saleReport.id = :id', { id })
      .getOne();
    if (!saleReport) {
      throw new SaleReportNotFoundException();
    }
    return saleReport;
  }

  async updated(
    id: number,
    updatedSaleReportDto: UpdatedSaleReportDto,
  ): Promise<SaleReport> {
    const saleReport = await this.saleReportRepository
      .createQueryBuilder('saleReport')
      .where('saleReport.id = :id', { id })
      .getOne();
    if (!saleReport) {
      throw new SaleReportNotFoundException();
    }
    Object.assign(saleReport, updatedSaleReportDto);
    return await this.saleReportRepository.save(saleReport);
  }

  async deleted(id: number): Promise<void> {
    const saleReport = await this.saleReportRepository
      .createQueryBuilder('saleReport')
      .where('saleReport.id = :id', { id })
      .getOne();
    if (!saleReport) {
      throw new SaleReportNotFoundException();
    }
    await this.saleReportRepository.softRemove(saleReport);
    console.log('saleReport Eliminado');
  }
}
