import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Suppliers } from '../../models';

@Resolver(() => Suppliers)
export class SuppliersResolver {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Mutation(() => Suppliers)
  createSupplier(
    @Args('createSupplierInput')
    createSupplierInput: CreateSupplierInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.suppliersService.create(createSupplierInput, user);
  }

  @Query(() => [Suppliers], { name: 'suppliers' })
  findAll() {
    return this.suppliersService.findAll();
  }

  @Query(() => Suppliers, { name: 'supplier' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.suppliersService.findOne(id);
  }

  @Mutation(() => Suppliers)
  updateSupplier(
    @Args('id') _id: number,
    @Args('updateSupplierInput')
    updateSupplierInput: UpdateSupplierInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.suppliersService.update(_id, updateSupplierInput, user);
  }

  @Mutation(() => Suppliers)
  removeSupplier(@Args('id', { type: () => Int }) id: number) {
    return this.suppliersService.remove(id);
  }
}
