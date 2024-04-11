import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsNotFoundException } from './error/products-not-found.exception';
import { Products } from './entities/products.entity';
import { UpdatedProductsDto } from './dto/updated-products.dto';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsCategory } from '../products-category/entities/products-category.entity';
import { ProductsPricelist } from '../products-pricelist/entities/products-pricelist.entity';
import { ProductAccessoryRel } from '../product-accessory-rel/entities/product-accessory-rel.entity';
import { ProductAlternativeRel } from '../product-alternative-rel/entities/product-alternative-rel.entity';
import { ProductProductStockTrackConfirmationRel } from '../product-product-stock-track-confirmation-rel/entities/product-product-stock-track-confirmation-rel.entity';
import { ProductSupplierTaxesRel } from '../product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';
import { ProductTag } from '../product-tag/entities/product-tag.entity';
import { ProductTaxesRel } from '../product-taxes-rel/entities/product-taxes-rel.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
    @InjectRepository(ProductsCategory)
    private readonly productsCategoryRepository: Repository<ProductsCategory>,
    @InjectRepository(ProductsPricelist)
    private readonly productsPricelistRepository: Repository<ProductsPricelist>,
    @InjectRepository(ProductAccessoryRel)
    private readonly productAccessoryRelRepository: Repository<ProductAccessoryRel>,
    @InjectRepository(ProductAlternativeRel)
    private readonly productAlternativeRelRepository: Repository<ProductAlternativeRel>,
    @InjectRepository(ProductProductStockTrackConfirmationRel)
    private readonly productProductStockTrackConfirmationRelRepository: Repository<ProductProductStockTrackConfirmationRel>,
    @InjectRepository(ProductSupplierTaxesRel)
    private readonly productSupplierTaxesRelRepository: Repository<ProductSupplierTaxesRel>,
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
    @InjectRepository(ProductTaxesRel)
    private readonly productTaxesRelRepository: Repository<ProductTaxesRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<Products[] | undefined> {
    const offset = (page - 1) * perPage;
    const products = await this.productsRepository
      .createQueryBuilder('products')
      .take(perPage)
      .skip(offset)
      .getMany();
    return products;
  }

  async create(createProductsDto: CreateProductsDto): Promise<Products> {
    const product = new Products(createProductsDto);

    //Relación categories
    const categories = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .whereInIds(createProductsDto.categories)
      .getMany();
    product.productsCategorys = categories;

    //Relación pricelist
    const pricelist = await this.productsPricelistRepository
      .createQueryBuilder('productsPricelist')
      .whereInIds(createProductsDto.pricelists)
      .getMany();
    product.ProductsPricelists = pricelist;

    //Relación accessoryRel
    const accessoryRels = await this.productAccessoryRelRepository
      .createQueryBuilder('productsAccessoryRel')
      .whereInIds(createProductsDto.accessoryRelsIds)
      .getMany();
    product.productAccessoryRels = accessoryRels;

    //Relación alternativeRel
    const alternativeRels = await this.productAlternativeRelRepository
      .createQueryBuilder('productsAlternativeRel')
      .whereInIds(createProductsDto.alternativeRels)
      .getMany();
    product.productAlternativeRels = alternativeRels;

    //Relación productStockTrackConfirmationRel
    const productStockTrackConfirmationRels =
      await this.productProductStockTrackConfirmationRelRepository
        .createQueryBuilder('productProductStockTrackConfirmationRel')
        .whereInIds(createProductsDto.productStockTrackConfirmationRels)
        .getMany();
    product.productProductStockTrackConfirmationRels =
      productStockTrackConfirmationRels;

    //Relación productSupplierTaxesRelProduct
    const supplierTaxesRels = await this.productSupplierTaxesRelRepository
      .createQueryBuilder('productSupplierTaxesRel')
      .whereInIds(createProductsDto.supplierTaxesRels)
      .getMany();
    product.productSupplierTaxesRels = supplierTaxesRels;

    //Relación productTag
    const tags = await this.productTagRepository
      .createQueryBuilder('productTag')
      .whereInIds(createProductsDto.tags)
      .getMany();
    product.productTags = tags;

    //Relación productTaxesRel
    const taxesRels = await this.productTaxesRelRepository
      .createQueryBuilder('productTaxesRel')
      .whereInIds(createProductsDto.taxesRels)
      .getMany();
    product.productTaxesRels = taxesRels;

    return await this.productsRepository.save(product);
  }

  async findOne(id: number): Promise<Products> {
    const products = await this.productsRepository
      .createQueryBuilder('products')
      .where('products.id = :id', { id })
      .getOne();
    if (!products) {
      throw new ProductsNotFoundException();
    }
    return products;
  }

  async updated(
    id: number,
    updatedProductsDto: UpdatedProductsDto,
  ): Promise<Products> {
    const products = await this.productsRepository
      .createQueryBuilder('products')
      .where('products.id = :id', { id })
      .getOne();
    if (!products) {
      throw new ProductsNotFoundException();
    }
    Object.assign(products, updatedProductsDto);
    return await this.productsRepository.save(products);
  }

  async deleted(id: number): Promise<void> {
    const products = await this.productsRepository
      .createQueryBuilder('products')
      .where('products.id = :id', { id })
      .getOne();
    if (!products) {
      throw new ProductsNotFoundException();
    }
    await this.productsRepository.softRemove(products);
    console.log('Productos Eliminado');
  }
}
