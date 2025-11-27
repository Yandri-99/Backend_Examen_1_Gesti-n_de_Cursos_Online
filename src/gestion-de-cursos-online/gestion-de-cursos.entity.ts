import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('curso')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  titulo: string;

  @Column()
  subtitulo: string;

  @Column('text')
  descripcion: string;

  @Column()
  nivel: string;

  @Column()
  duracion_horas: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costo: number;

  @Column()
  modalidad: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column()
  estado: string;
}
