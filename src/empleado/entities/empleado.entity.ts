import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('float')
    salario: number;

    @Column('uuid')
    id_departamento: string;

    @Column('uuid')
    id_puesto: string;

}
