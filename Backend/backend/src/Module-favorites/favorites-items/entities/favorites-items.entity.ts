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

@Entity({ name: 'favorites_items' })
export class FavoritesItems {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'favorites_items', type: 'int' })
  public favorites_items: number;

  @Column({ name: 'model', type: 'int' })
  public model: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'url', type: 'varchar' })
  public url: string;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesItemss)
  @JoinColumn({ name: 'favorites_items' })
  public favorites: Favorites;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesItems>) {
    Object.assign(this, data);
  }
}
