import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GestionCursosOnlineService } from './gestion-de-cursos-online.service';
import { Curso } from './gestion-de-cursos.entity';

@Controller('cursos')
export class GestionCursosOnlineController {
  constructor(private readonly service: GestionCursosOnlineService) {}

  @Post()
  crear(@Body() data: Curso) {
    return this.service.crear(data);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscar(@Param('id') id: number) {
    return this.service.buscarPorId(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() data: Curso) {
    return this.service.actualizar(id, data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
