import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Puesto {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre_puesto: string;

}
