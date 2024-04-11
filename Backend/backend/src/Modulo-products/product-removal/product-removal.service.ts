import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRemovalNotFoundException } from './error/product-removal-not-found.exception';
import { ProductRemoval } from './entities/product-removal.emtity';
import { UpdatedProductRemovalDto } from './dto/updated-product-removal.dto';
import { CreateProductRemovalDto } from './dto/created-product-removal.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRemovalService {
  constructor(
    @InjectRepository(ProductRemoval)
    private readonly productRemovalRepository: Repository<ProductRemoval>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductRemoval[] | undefined> {
    const offset = (page - 1) * perPage;
    const productRemoval = await this.productRemovalRepository
      .createQueryBuilder('productRemoval')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productRemoval;
  }

  async create(
    createProductRemovalDto: CreateProductRemovalDto,
  ): Promise<ProductRemoval> {
    const productRemoval = new ProductRemoval(createProductRemovalDto);
    return await this.productRemovalRepository.save(productRemoval);
  }

  async findOne(id: number): Promise<ProductRemoval> {
    const productRemoval = await this.productRemovalRepository
      .createQueryBuilder('productRemoval')
      .where('productRemoval.id = :id', { id })
      .getOne();
    if (!productRemoval) {
      throw new ProductRemovalNotFoundException();
    }
    return productRemoval;
  }

  async updated(
    id: number,
    updatedProductRemovalDto: UpdatedProductRemovalDto,
  ): Promise<ProductRemoval> {
    const productRemoval = await this.productRemovalRepository
      .createQueryBuilder('productRemoval')
      .where('productRemoval.id = :id', { id })
      .getOne();
    if (!productRemoval) {
      throw new ProductRemovalNotFoundException();
    }
    Object.assign(productRemoval, updatedProductRemovalDto);
    return await this.productRemovalRepository.save(productRemoval);
  }

  async deleted(id: number): Promise<void> {
    const productRemoval = await this.productRemovalRepository
      .createQueryBuilder('productRemoval')
      .where('productRemoval.id = :id', { id })
      .getOne();
    if (!productRemoval) {
      throw new ProductRemovalNotFoundException();
    }
    await this.productRemovalRepository.softRemove(productRemoval);
    console.log('ProductRemoval Eliminado');
  }
}
