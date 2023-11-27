import { Module } from '@nestjs/common';
import { CorsMiddleware } from './cors.middleware';

@Module({
  providers: [CorsMiddleware],
})
export class CorsModule {}