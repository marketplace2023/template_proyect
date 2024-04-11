import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCouponReport } from './entities/sale-coupon-report.entity';
import { Repository } from 'typeorm';
import { CreateSaleCouponReportDto } from './dto/created-sale-coupon-report.dto';
import { SaleCouponReportNotFoundException } from './error/sale-coupon-report-not-found.exception';
import { UpdatedSaleCouponReportDto } from './dto/updated-sale-coupon-report.dto';

@Injectable()
export class SaleCouponReportService {
  constructor(
    @InjectRepository(SaleCouponReport)
    private readonly saleCouponReportRepository: Repository<SaleCouponReport>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCouponReport[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCouponReport = await this.saleCouponReportRepository
      .createQueryBuilder('saleCouponReport')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCouponReport;
  }

  async create(
    createSaleCouponReportDto: CreateSaleCouponReportDto,
  ): Promise<SaleCouponReport> {
    const saleCouponReport = new SaleCouponReport(createSaleCouponReportDto);
    return await this.saleCouponReportRepository.save(saleCouponReport);
  }

  async findOne(id: number): Promise<SaleCouponReport> {
    const saleCouponReport = await this.saleCouponReportRepository
      .createQueryBuilder('saleCouponReport')
      .where('saleCouponReport.id = :id', { id })
      .getOne();
    if (!saleCouponReport) {
      throw new SaleCouponReportNotFoundException();
    }
    return saleCouponReport;
  }

  async updated(
    id: number,
    updatedSaleCouponReportDto: UpdatedSaleCouponReportDto,
  ): Promise<SaleCouponReport> {
    const saleCouponReport = await this.saleCouponReportRepository
      .createQueryBuilder('saleCouponReport')
      .where('saleCouponReport.id = :id', { id })
      .getOne();
    if (!saleCouponReport) {
      throw new SaleCouponReportNotFoundException();
    }
    Object.assign(saleCouponReport, updatedSaleCouponReportDto);
    return await this.saleCouponReportRepository.save(saleCouponReport);
  }

  async deleted(id: number): Promise<void> {
    const saleCouponReport = await this.saleCouponReportRepository
      .createQueryBuilder('saleCouponReport')
      .where('saleCouponReport.id = :id', { id })
      .getOne();
    if (!saleCouponReport) {
      throw new SaleCouponReportNotFoundException();
    }
    await this.saleCouponReportRepository.softRemove(saleCouponReport);
    console.log('saleCouponReport Eliminado');
  }
}
