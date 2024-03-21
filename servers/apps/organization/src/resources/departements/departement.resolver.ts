import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DepartementService } from './departement.service';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Departement } from '../../models/departement.schema';
import { CreateDepartementInput } from './dto/create-departement.input';
import { UpdateDepartementInput } from './dto/update-departement.input';

@Resolver(() => Departement)
export class DepartementResolver {
  constructor(private readonly departementService: DepartementService) {}

  @Mutation(() => Departement)
  createDepartement(
    @Args('createDepartementInput')
    createDepartementInput: CreateDepartementInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    console.log('########### resolver');
    console.log(createDepartementInput);
    return this.departementService.create(createDepartementInput, user);
  }

  @Query(() => [Departement], { name: 'departements' })
  findAll() {
    return this.departementService.findAll();
  }

  @Query(() => Departement, { name: 'departement' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.departementService.findOne(id);
  }

  @Mutation(() => Departement)
  updateDepartement(
    @Args('id') id: number,
    @Args('updateDepartementInput')
    updateDepartementInput: UpdateDepartementInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.departementService.update(id, updateDepartementInput, user);
  }

  @Mutation(() => Departement)
  removeDepartement(@Args('id', { type: () => Number }) id: number) {
    return this.departementService.remove(id);
  }
}
