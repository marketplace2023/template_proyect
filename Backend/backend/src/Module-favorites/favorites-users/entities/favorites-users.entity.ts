import { Favorites } from 'src/Module-favorites/favorites/entities/favorites.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'favorites_users' })
export class FavoritesUsers {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'favorite_id', type: 'int' })
  public favorite_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => ResUsers, (resUsers) => resUsers.favoritesUserss)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;

  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesUserss)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesUsers>) {
    Object.assign(this, data);
  }
}
