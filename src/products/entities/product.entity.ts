
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { Laboratory } from 'src/laboratories/entities/laboratory.entity';
import { Prescription } from 'src/prescriptions/entities/precription.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price_buy: number;

  @Column({ type: 'int4', nullable: false })
  price_sale: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'varchar',  nullable: true })
  filename: string;

  @CreateDateColumn({ type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'int4', nullable: false })
  category_id: number;

  @Column({ type: 'int4', nullable: false })
  prescription_id: number;

  @Column({ type: 'int4', nullable: false })
  laboratory_id: number;

  @Column({type: 'int4', nullable: false})
  user_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ 
    name: 'category_id',
    referencedColumnName: 'id'
   })
  category: Category;


  @ManyToOne(() => Laboratory)
  @JoinColumn({ 
    name: 'laboratory_id',
    referencedColumnName: 'id'
   })
  laboratory: Laboratory;

  @ManyToOne(() => User)
  @JoinColumn({ 
    name: 'user_id',
    referencedColumnName: 'id'
   })
  user: User;

  @ManyToOne(() => Prescription)
  @JoinColumn({ 
    name: 'prescription_id',
    referencedColumnName: 'id'
   })
  prescription: Prescription;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
  })
  images?: ProductImage[];
  
}
