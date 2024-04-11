import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountMove } from './entities/account-move.entity';
import { AccountMoveNotFoundException } from './error/account-move-not-fount.exception';
import { UpdatedAccountMoveDto } from './dto/updated-account-move.dto';
import { Repository } from 'typeorm';
import { CreateAccountMoveDto } from './dto/created-account-move.dto';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';

@Injectable()
export class AccountMoveService {
  constructor(
    @InjectRepository(AccountMove)
    private readonly accountMoveRepository: Repository<AccountMove>,
    @InjectRepository(ProductsCategory)
    private readonly productsCategoryRepository: Repository<ProductsCategory>,
    @InjectRepository(ProductProduct)
    private readonly productProductRepository: Repository<ProductProduct>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountMove[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountMove = await this.accountMoveRepository
      .createQueryBuilder('accountMove')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountMove;
  }

  async create(
    createAccountMoveDto: CreateAccountMoveDto,
  ): Promise<AccountMove> {
    const accountMove = new AccountMove(createAccountMoveDto);

    //Relación PRODUCTO CATEGORY
    const Producto = await this.productsCategoryRepository
      .createQueryBuilder('accountMove')
      .whereInIds(createAccountMoveDto.producto)
      .getMany();
    accountMove.productsCategory = Producto;

    //Relación PRODUCT PRODUCT
    const ProductoP = await this.productProductRepository
      .createQueryBuilder('accountMove')
      .whereInIds(createAccountMoveDto.producto)
      .getMany();
    accountMove.productProduct = ProductoP;

    return await this.accountMoveRepository.save(accountMove);
  }

  async findOne(id: number): Promise<AccountMove> {
    const accountMove = await this.accountMoveRepository
      .createQueryBuilder('accountMove')
      .where('accountMove.id = :id', { id })
      .getOne();
    if (!accountMove) {
      throw new AccountMoveNotFoundException();
    }
    return accountMove;
  }

  async updated(
    id: number,
    updatedAccountMoveDto: UpdatedAccountMoveDto,
  ): Promise<AccountMove> {
    const accountMove = await this.accountMoveRepository
      .createQueryBuilder('accountMove')
      .where('accountMove.id = :id', { id })
      .getOne();
    if (!accountMove) {
      throw new AccountMoveNotFoundException();
    }
    Object.assign(accountMove, updatedAccountMoveDto);
    return await this.accountMoveRepository.save(accountMove);
  }

  async deleted(id: number): Promise<void> {
    const accountMove = await this.accountMoveRepository
      .createQueryBuilder('accountMove')
      .where('accountMove.id = :id', { id })
      .getOne();
    if (!accountMove) {
      throw new AccountMoveNotFoundException();
    }
    await this.accountMoveRepository.softRemove(accountMove);
    console.log('Report Paperformat column Eliminado');
  }
}
