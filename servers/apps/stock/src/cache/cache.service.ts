import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class CacheService {
  constructor(private readonly redisService: RedisService) {}

  async setValue(key: string, value: any): Promise<void> {
    const client = this.redisService.getClient();
    await client.set(key, JSON.stringify(value));
  }

  async getValue(key: string): Promise<any> {
    const client = this.redisService.getClient();
    const value = await client.get(key);
    return JSON.parse(value);
  }
}
