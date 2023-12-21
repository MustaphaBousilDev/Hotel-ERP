import { Controller, Get } from '@nestjs/common';
import { CleanArchitectService } from './clean-architect.service';

@Controller()
export class CleanArchitectController {
  constructor(private readonly cleanArchitectService: CleanArchitectService) {}

  @Get()
  getHello(): string {
    return this.cleanArchitectService.getHello();
  }
}
