import { Injectable } from '@nestjs/common';

@Injectable()
export class CleanArchitectService {
  getHello(): string {
    return 'Hello World!';
  } 
}
