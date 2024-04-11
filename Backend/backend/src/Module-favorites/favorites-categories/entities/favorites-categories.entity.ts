import { Favorites } from 'src/Module-favorites/favorites/entities/favorites.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'favorites_categories' })
export class FavoritesCategories {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'favorites_id', type: 'int' })
  public favorites_id: number;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesCategoriess)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesCategories>) {
    Object.assign(this, data);
  }
}
