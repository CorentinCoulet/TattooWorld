import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataService } from './data/data.service';
import { DataModule } from './data/data.module';
import { DataService } from './data/data.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'postgres',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule {}
