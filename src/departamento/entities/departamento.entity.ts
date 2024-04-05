import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departamento {
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column('text')
        nombre_departamento: string;

}
