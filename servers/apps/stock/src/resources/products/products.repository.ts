import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import {
  Brand,
  Hotel,
  Product,
  StockLocation,
  SubCategory,
  Suppliers,
  Tags,
  User,
} from '../../models';

@Injectable()
export class ProductRepositorymySQL extends AbstractRepositorymySQL<Product> {
  protected readonly logger = new Logger(ProductRepositorymySQL.name);

  constructor(
    @InjectRepository(Product)
    ProductRepository: Repository<Product>,
    entityManager: EntityManager,
  ) {
    super(ProductRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorySQL extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(User)
    UserRepositorymySQL: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepositorymySQL, entityManager);
  }
}

@Injectable()
export class SubCategoryRepositorySQL extends AbstractRepositorymySQL<SubCategory> {
  protected readonly logger = new Logger(SubCategoryRepositorySQL.name);

  constructor(
    @InjectRepository(User)
    SubCategoryRepositorymySQL: Repository<SubCategory>,
    entityManager: EntityManager,
  ) {
    super(SubCategoryRepositorymySQL, entityManager);
  }
}

@Injectable()
export class SupplierRepositorySQL extends AbstractRepositorymySQL<Suppliers> {
  protected readonly logger = new Logger(SupplierRepositorySQL.name);

  constructor(
    @InjectRepository(Suppliers)
    SuplierRepositorymySQL: Repository<Suppliers>,
    entityManager: EntityManager,
  ) {
    super(SuplierRepositorymySQL, entityManager);
  }
}

@Injectable()
export class BrandRepositorySQL extends AbstractRepositorymySQL<Brand> {
  protected readonly logger = new Logger(BrandRepositorySQL.name);

  constructor(
    @InjectRepository(Brand)
    BrandRepositorymySQL: Repository<Brand>,
    entityManager: EntityManager,
  ) {
    super(BrandRepositorymySQL, entityManager);
  }
}

@Injectable()
export class HotelRepositorySQL extends AbstractRepositorymySQL<Hotel> {
  protected readonly logger = new Logger(HotelRepositorySQL.name);

  constructor(
    @InjectRepository(Hotel)
    HotelRepositorymySQL: Repository<Hotel>,
    entityManager: EntityManager,
  ) {
    super(HotelRepositorymySQL, entityManager);
  }
}

@Injectable()
export class StockLocationRepositorySQL extends AbstractRepositorymySQL<StockLocation> {
  protected readonly logger = new Logger(StockLocationRepositorySQL.name);

  constructor(
    @InjectRepository(StockLocation)
    StockLocationRepository: Repository<StockLocation>,
    entityManager: EntityManager,
  ) {
    super(StockLocationRepository, entityManager);
  }
}

@Injectable()
export class TagsRepositorySQL extends AbstractRepositorymySQL<Tags> {
  protected readonly logger = new Logger(TagsRepositorySQL.name);

  constructor(
    @InjectRepository(Tags)
    TagsRepositorymySQL: Repository<Tags>,
    entityManager: EntityManager,
  ) {
    super(TagsRepositorymySQL, entityManager);
  }
}
