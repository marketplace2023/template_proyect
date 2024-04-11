import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountInvoice } from './entities/account-invoice.entity';
import { Repository } from 'typeorm';
import { CreateAccountInvoiceDto } from './dto/created-account-invoice.dto';
import { AccountInvoiceNotFoundException } from './error/account-invoice-not-found.exception';
import { UpdatedAccountInvoiceDto } from './dto/updated-account-invoice.dto';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';

@Injectable()
export class AccountInvoiceService {
  constructor(
    @InjectRepository(AccountInvoice)
    private readonly accountInvoiceRepository: Repository<AccountInvoice>,
    @InjectRepository(ProductsTemplate)
    private readonly productoTemplateRepository: Repository<ProductsTemplate>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountInvoice[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountInvoice = await this.accountInvoiceRepository
      .createQueryBuilder('accountInvoice')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountInvoice;
  }

  async create(
    createAccountInvoiceDto: CreateAccountInvoiceDto,
  ): Promise<AccountInvoice> {
    const accountInvoice = new AccountInvoice(createAccountInvoiceDto);

    //Relación
    const Producto = await this.productoTemplateRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createAccountInvoiceDto.producto)
      .getMany();
    accountInvoice.productsTemplate = Producto;

    return await this.accountInvoiceRepository.save(accountInvoice);
  }

  async findOne(id: number): Promise<AccountInvoice> {
    const accountInvoice = await this.accountInvoiceRepository
      .createQueryBuilder('accountInvoice')
      .where('accountInvoice.id = :id', { id })
      .getOne();
    if (!accountInvoice) {
      throw new AccountInvoiceNotFoundException();
    }
    return accountInvoice;
  }

  async updated(
    id: number,
    updatedAccountInvoiceDto: UpdatedAccountInvoiceDto,
  ): Promise<AccountInvoice> {
    const accountInvoice = await this.accountInvoiceRepository
      .createQueryBuilder('accountInvoice')
      .where('accountInvoice.id = :id', { id })
      .getOne();
    if (!accountInvoice) {
      throw new AccountInvoiceNotFoundException();
    }
    Object.assign(accountInvoice, updatedAccountInvoiceDto);
    return await this.accountInvoiceRepository.save(accountInvoice);
  }

  async deleted(id: number): Promise<void> {
    const accountInvoice = await this.accountInvoiceRepository
      .createQueryBuilder('accountInvoice')
      .where('accountInvoice.id = :id', { id })
      .getOne();
    if (!accountInvoice) {
      throw new AccountInvoiceNotFoundException();
    }
    await this.accountInvoiceRepository.softRemove(accountInvoice);
    console.log('Report Paperformat column Eliminado');
  }
}
