import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';

@Module({
  providers: [CacheService],
  exports: [CacheService],
  imports: [
    CacheModuleNest.register({
      ttl: 5000000000,
    }),
  ],
})
export class CacheModule {}
