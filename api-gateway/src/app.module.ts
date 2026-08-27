import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModules.forRoot({
      isGlobal: true,
    }),
    ThrottleModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests por minute
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
