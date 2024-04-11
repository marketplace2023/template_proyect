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

@Entity({ name: 'favorites_groups' })
export class FavoritesGroups {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'favorite_id', type: 'int' })
  public favorite_id: number;

  @Column({ name: 'group_id', type: 'int' })
  public group_id: number;

  //-----------------------------------------------------------------------
  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesGroupss)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesGroups>) {
    Object.assign(this, data);
  }
}
