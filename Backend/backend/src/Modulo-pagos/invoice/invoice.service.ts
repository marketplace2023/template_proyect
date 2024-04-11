import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { CreatedInvoiceDto } from './dto/created-invoice.dto';
import { InvoiceNotFoundException } from './error/invoice-not-found.exception';
import { UpdatedInvoiceDto } from './dto/updated-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<Invoice[] | undefined> {
    const offset = (page - 1) * perPage;
    const invoice = await this.invoiceRepository
      .createQueryBuilder('invoice')
      .take(perPage)
      .skip(offset)
      .getMany();
    return invoice;
  }

  async create(createdInvoiceDto: CreatedInvoiceDto): Promise<Invoice> {
    const invoice = new Invoice(createdInvoiceDto);
    return await this.invoiceRepository.save(invoice);
  }

  async findOne(id: number): Promise<Invoice> {
    const invoice = await this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.id = :id', { id })
      .getOne();
    if (!invoice) {
      throw new InvoiceNotFoundException();
    }
    return invoice;
  }

  async updated(
    id: number,
    updatedInvoiceDto: UpdatedInvoiceDto,
  ): Promise<Invoice> {
    const invoice = await this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.id = :id', { id })
      .getOne();
    if (!invoice) {
      throw new InvoiceNotFoundException();
    }
    Object.assign(invoice, updatedInvoiceDto);
    return await this.invoiceRepository.save(invoice);
  }

  async deleted(id: number): Promise<void> {
    const invoice = await this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.id = :id', { id })
      .getOne();
    if (!invoice) {
      throw new InvoiceNotFoundException();
    }
    await this.invoiceRepository.softRemove(invoice);
    console.log('invoice  Eliminado');
  }
}
