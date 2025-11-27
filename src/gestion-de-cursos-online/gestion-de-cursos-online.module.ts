import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './gestion-de-cursos.entity';
import { GestionCursosOnlineController } from './gestion-de-cursos-online.controller';
import { GestionCursosOnlineService } from './gestion-de-cursos-online.service';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [GestionCursosOnlineController],
  providers: [GestionCursosOnlineService],
  exports: [GestionCursosOnlineService],
})
export class GestionDeCursosOnlineModule {}
