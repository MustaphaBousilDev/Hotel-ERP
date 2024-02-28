import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AttachementService } from './attachement.service';
import { TasksAttach } from '../../models/tasks-attachement.entity';
import { TaskAttachementInput } from '../../dto/task-attachement.dto';

@Resolver(() => TasksAttach)
export class AttachementResolver {
  constructor(private readonly attachementService: AttachementService) {}

  @Mutation(() => TasksAttach)
  createAttachement(
    @Args('createAttachementInput')
    createAttachementInput: TaskAttachementInput,
  ) {
    return this.attachementService.create(createAttachementInput);
  }

  // @Query(() => [TasksAttach], { name: 'attachement' })
  // findAll() {
  //   return this.attachementService.findAll();
  // }

  // @Query(() => TasksAttach, { name: 'attachement' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.attachementService.findOne(id);
  // }

  // @Mutation(() => TasksAttach)
  // updateAttachement(@Args('updateAttachementInput') updateAttachementInput: UpdateAttachementInput) {
  //   return this.attachementService.update(updateAttachementInput.id, updateAttachementInput);
  // }

  // @Mutation(() => TasksAttach)
  // removeAttachement(@Args('id', { type: () => Int }) id: number) {
  //   return this.attachementService.remove(id);
  // }
}
