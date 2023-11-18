import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Customer {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  contacto: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  cedula: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  direccion: string;

  @Column({type: 'int4', nullable: false})
  product_id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ 
    name: 'product_id',
    referencedColumnName: 'id'
   })
  product: Product;
}
