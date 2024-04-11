import { Favorites } from 'src/Module-favorites/favorites/entities/favorites.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
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

@Entity({ name: 'favorites_locations' })
export class FavoritesLocations {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'location_id', type: 'int' })
  public location_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'favorites_id', type: 'int' })
  public favorites_id: number;
  //----------------------------------------------------------------
  @ManyToOne(() => ResUsers, (resUser) => resUser.favoritesLocationss)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;

  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesLocationss)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //-----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesLocations>) {
    Object.assign(this, data);
  }
}
