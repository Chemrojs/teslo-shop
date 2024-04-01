import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {
        unique: true,
     })
     title: string;

     @Column('numeric')
     price: number;

     @Column({
        type: 'text',
        nullable: true
     })
     slug: string;

     @Column('int', {
        default:0
     })
     stock: number;

     @Column('text',{
        array:true
     })
     sizes: string[];

     @Column('text')
     gender: string;

     @BeforeInsert()
     CheckSlugInsert() {

      if( !this.slug ) {
         this.slug = this.title;
      }

      this.slug = this.slug
         .toLowerCase()
         .replaceAll('','_')
         .replaceAll("'", '')
     }
}