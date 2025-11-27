import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GestionDeCursosOnlineModule } from './gestion-de-cursos-online/gestion-de-cursos-online.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot((() => {
      const isTest = process.env.NODE_ENV === 'test';
      if (isTest) return {
        type: 'sqlite',
        database: ':memory:',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      } as any;

      return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        //ssl: { rejectUnauthorized: false },
      } as any;
    })()),
    GestionDeCursosOnlineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
