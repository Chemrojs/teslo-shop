import { Departamento } from "src/departamento/entities/departamento.entity";
import { Puesto } from "src/puesto/entities/puesto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Departamento, (departamento) => departamento.id )
    id_departamento: Departamento[]

    @OneToMany(() => Puesto, (puesto) => puesto.id )
    id_puesto: Puesto[]
    //@Column('uuid')
    //id_puesto: string;

}
