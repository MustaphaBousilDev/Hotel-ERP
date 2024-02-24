import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttachementService } from './attachement.service';
import { Attachement } from './entities/attachement.entity';
import { CreateAttachementInput } from './dto/create-attachement.input';
import { UpdateAttachementInput } from './dto/update-attachement.input';

@Resolver(() => Attachement)
export class AttachementResolver {
  constructor(private readonly attachementService: AttachementService) {}

  @Mutation(() => Attachement)
  createAttachement(@Args('createAttachementInput') createAttachementInput: CreateAttachementInput) {
    return this.attachementService.create(createAttachementInput);
  }

  @Query(() => [Attachement], { name: 'attachement' })
  findAll() {
    return this.attachementService.findAll();
  }

  @Query(() => Attachement, { name: 'attachement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attachementService.findOne(id);
  }

  @Mutation(() => Attachement)
  updateAttachement(@Args('updateAttachementInput') updateAttachementInput: UpdateAttachementInput) {
    return this.attachementService.update(updateAttachementInput.id, updateAttachementInput);
  }

  @Mutation(() => Attachement)
  removeAttachement(@Args('id', { type: () => Int }) id: number) {
    return this.attachementService.remove(id);
  }
}
