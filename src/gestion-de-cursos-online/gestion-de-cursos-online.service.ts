import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './gestion-de-cursos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GestionCursosOnlineService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,
  ) {}

  crear(data: Curso) {
    return this.cursoRepo.save(data);
  }

  listar() {
    return this.cursoRepo.find();
  }

  async buscarPorId(id: number) {
    const curso = await this.cursoRepo.findOne({ where: { id } });
    if (!curso) throw new NotFoundException('Curso no encontrado');
    return curso;
  }

  async actualizar(id: number, data: Curso) {
    await this.cursoRepo.update(id, data);
    return { mensaje: 'Curso actualizado correctamente' };
  }

  async eliminar(id: number) {
    await this.cursoRepo.delete(id);
    return { mensaje: 'Curso eliminado correctamente' };
  }
}
