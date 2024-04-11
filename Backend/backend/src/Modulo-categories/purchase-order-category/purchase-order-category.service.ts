import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseOrderCategory } from './entities/purchase-order-category.entity';
import { Repository } from 'typeorm';
import { CreatedPurchaseOrderCategoryDto } from './dto/created-purchase-order-category.dto';
import { PurchaseOrderCategoryNotFoundException } from './error/purchase-order-category-not-found-exception';
import { UpdatedPurchaseOrderCategoryDto } from './dto/updated-purchase-order-category.dto';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductAttributeCategory } from '../product-attribute-category/entities/product-attribute-category.entity';
import { ProductCategoryImage } from '../product-category-image/entities/product-category-image.entity';
import { CategoryDescription } from '../category-description/entities/category-description.entity';
import { CategoryImageGallery } from '../category-image-gallery/entities/category-image-gallery.entity';
import { CrmTagCategory } from '../crm-tag-category/entities/crm-tag-category.entity';
import { SaleOrderCategory } from '../sale-order-category/entities/sale-order-category.entity';

@Injectable()
export class PurchaseOrderCategoryService {
  constructor(
    @InjectRepository(PurchaseOrderCategory)
    private readonly purchaseOrderCategoryRepository: Repository<PurchaseOrderCategory>,
    @InjectRepository(ProductsCategory)
    private readonly productsCategoryRepository: Repository<ProductsCategory>,
    @InjectRepository(ProductAttributeCategory)
    private readonly productAttributeCategoryRepository: Repository<ProductAttributeCategory>,
    @InjectRepository(ProductCategoryImage)
    private readonly productCategoryImageRepository: Repository<ProductCategoryImage>,
    @InjectRepository(CategoryDescription)
    private readonly categoryDescriptionRepository: Repository<CategoryDescription>,
    @InjectRepository(CategoryImageGallery)
    private readonly categoryImageGalleryRepository: Repository<CategoryImageGallery>,
    @InjectRepository(CrmTagCategory)
    private readonly crmTagCategoryRepository: Repository<CrmTagCategory>,
    @InjectRepository(SaleOrderCategory)
    private readonly saleOrderCategoryRepository: Repository<SaleOrderCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PurchaseOrderCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const purchaseOrderCategory = await this.purchaseOrderCategoryRepository
      .createQueryBuilder('purchaseOrderCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return purchaseOrderCategory;
  }

  async create(
    createPurchaseOrderCategoryDto: CreatedPurchaseOrderCategoryDto,
  ): Promise<PurchaseOrderCategory> {
    const purchaseOrderCategory = new PurchaseOrderCategory(
      createPurchaseOrderCategoryDto,
    );
    //--------Relación productsCategory-----------
    const category = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .whereInIds(createPurchaseOrderCategoryDto.category)
      .getMany();
    console.log(category);
    purchaseOrderCategory.productsCategorys = category;

    //--------Relación productAttributeCategorys-----------
    const attribute = await this.productAttributeCategoryRepository
      .createQueryBuilder('productAttributeCategory')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.productAttributeCategorys = attribute;

    //--------Relación ProductCategoryImage-----------
    const imageC = await this.productCategoryImageRepository
      .createQueryBuilder('ProductCategoryImage')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.productCategoryImages = imageC;

    //--------Relación CategoryDescription-----------
    const categoryD = await this.categoryDescriptionRepository
      .createQueryBuilder('categoryDescription')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.categoryDescription = categoryD;

    //--------Relación CategoryImageGallery-----------
    const categoryIG = await this.categoryImageGalleryRepository
      .createQueryBuilder('categoryImageGallery')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.categoryImageGallery = categoryIG;

    //--------Relación Crm.tag.category-----------
    const crm = await this.crmTagCategoryRepository
      .createQueryBuilder('crmTagCategory')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.crmTagCategory = crm;

    //--------Relación SaleOrderCategory-----------
    const soCategory = await this.saleOrderCategoryRepository
      .createQueryBuilder('SaleOrderCategory')
      .whereInIds(createPurchaseOrderCategoryDto.attribute)
      .getMany();
    purchaseOrderCategory.saleOrderCategory = soCategory;

    return await this.purchaseOrderCategoryRepository.save(
      purchaseOrderCategory,
    );
  }

  async findOne(id: number): Promise<PurchaseOrderCategory> {
    const purchaseOrderCategory = await this.purchaseOrderCategoryRepository
      .createQueryBuilder('purchaseOrderCategory')
      .where('purchaseOrderCategory.id = :id', { id })
      .getOne();
    if (!purchaseOrderCategory) {
      throw new PurchaseOrderCategoryNotFoundException();
    }
    return purchaseOrderCategory;
  }

  async updated(
    id: number,
    updatedPurchaseOrderCategoryDto: UpdatedPurchaseOrderCategoryDto,
  ): Promise<PurchaseOrderCategory> {
    const purchaseOrderCategory = await this.purchaseOrderCategoryRepository
      .createQueryBuilder('purchaseOrderCategory')
      .where('purchaseOrderCategory.id = :id', { id })
      .getOne();
    if (!purchaseOrderCategory) {
      throw new PurchaseOrderCategoryNotFoundException();
    }
    Object.assign(purchaseOrderCategory, updatedPurchaseOrderCategoryDto);
    return await this.purchaseOrderCategoryRepository.save(
      purchaseOrderCategory,
    );
  }

  async deleted(id: number): Promise<void> {
    const purchaseOrderCategory = await this.purchaseOrderCategoryRepository
      .createQueryBuilder('purchaseOrderCategory')
      .where('purchaseOrderCategory.id = :id', { id })
      .getOne();
    if (!purchaseOrderCategory) {
      throw new PurchaseOrderCategoryNotFoundException();
    }
    await this.purchaseOrderCategoryRepository.softRemove(
      purchaseOrderCategory,
    );
  }
}
