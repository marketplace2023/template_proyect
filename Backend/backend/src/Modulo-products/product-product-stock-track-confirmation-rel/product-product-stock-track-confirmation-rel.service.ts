import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductProductStockTrackConfirmationRel } from './entities/product-product-stock-track-confirmation-rel.entity';
import { Repository } from 'typeorm';
import { CreateProductProductStockTrackConfirmationRelDto } from './dto/created-product-product-stock-track-confirmation-rel.dto';
import { ProductProductStockTrackConfirmationRelNotFoundException } from './error/product-product-stock-track-confirmation-rel-not-found.exception';
import { UpdatedProductProductStockTrackConfirmationRelDto } from './dto/updated-product-product-stock-track-confirmation-rel.dto';

@Injectable()
export class ProductProductStockTrackConfirmationRelService {
  constructor(
    @InjectRepository(ProductProductStockTrackConfirmationRel)
    private readonly productProductStockTrackConfirmationRelRepository: Repository<ProductProductStockTrackConfirmationRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductProductStockTrackConfirmationRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const productProductStockTrackConfirmationRel =
      await this.productProductStockTrackConfirmationRelRepository
        .createQueryBuilder('productProductStockTrackConfirmationRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return productProductStockTrackConfirmationRel;
  }

  async create(
    createProductProductStockTrackConfirmationRelDto: CreateProductProductStockTrackConfirmationRelDto,
  ): Promise<ProductProductStockTrackConfirmationRel> {
    const productProductStockTrackConfirmationRel =
      new ProductProductStockTrackConfirmationRel(
        createProductProductStockTrackConfirmationRelDto,
      );
    return await this.productProductStockTrackConfirmationRelRepository.save(
      productProductStockTrackConfirmationRel,
    );
  }

  async findOne(id: number): Promise<ProductProductStockTrackConfirmationRel> {
    const productProductStockTrackConfirmationRel =
      await this.productProductStockTrackConfirmationRelRepository
        .createQueryBuilder('productProductStockTrackConfirmationRel')
        .where('productProductStockTrackConfirmationRel.id = :id', { id })
        .getOne();
    if (!productProductStockTrackConfirmationRel) {
      throw new ProductProductStockTrackConfirmationRelNotFoundException();
    }
    return productProductStockTrackConfirmationRel;
  }

  async updated(
    id: number,
    updatedProductProductStockTrackConfirmationRelDto: UpdatedProductProductStockTrackConfirmationRelDto,
  ): Promise<ProductProductStockTrackConfirmationRel> {
    const productProductStockTrackConfirmationRel =
      await this.productProductStockTrackConfirmationRelRepository
        .createQueryBuilder('productProductStockTrackConfirmationRel')
        .where('productProductStockTrackConfirmationRel.id = :id', { id })
        .getOne();
    if (!productProductStockTrackConfirmationRel) {
      throw new ProductProductStockTrackConfirmationRelNotFoundException();
    }
    Object.assign(
      productProductStockTrackConfirmationRel,
      updatedProductProductStockTrackConfirmationRelDto,
    );
    return await this.productProductStockTrackConfirmationRelRepository.save(
      productProductStockTrackConfirmationRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const productProductStockTrackConfirmationRel =
      await this.productProductStockTrackConfirmationRelRepository
        .createQueryBuilder('productProductStockTrackConfirmationRel')
        .where('productProductStockTrackConfirmationRel.id = :id', { id })
        .getOne();
    if (!productProductStockTrackConfirmationRel) {
      throw new ProductProductStockTrackConfirmationRelNotFoundException();
    }
    await this.productProductStockTrackConfirmationRelRepository.softRemove(
      productProductStockTrackConfirmationRel,
    );
    console.log('ProductProductStockTrackConfirmationRel Eliminado');
  }
}
