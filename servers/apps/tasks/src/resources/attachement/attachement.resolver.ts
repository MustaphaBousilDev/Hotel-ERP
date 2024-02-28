import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { AttachementService } from './attachement.service';
import { TasksAttach } from '../../models/tasks-attachement.entity';
import { TaskAttachementInput } from '../../dto/task-attachement.dto';
import { Query } from '@nestjs/graphql';
import { TaskAttachementUpdateDTO } from '../../dto/task-attachement-update.dto';
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

  @Query(() => [TasksAttach], { name: 'attachementsTask' })
  findAll() {
    return this.attachementService.findAll();
  }

  @Query(() => TasksAttach, { name: 'attachement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attachementService.findOne(id);
  }

  @Mutation(() => TasksAttach)
  updateAttachement(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAttachementInput')
    updateAttachementInput: TaskAttachementUpdateDTO,
  ) {
    return this.attachementService.update(id, updateAttachementInput);
  }

  @Mutation(() => TasksAttach)
  removeAttachement(@Args('id', { type: () => Int }) id: number) {
    return this.attachementService.remove(id);
  }
}
