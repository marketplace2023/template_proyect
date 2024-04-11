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

@Entity({ name: 'favorites_notifications' })
export class FavoritesNotifications {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'favorite_id', type: 'int' })
  public favorite_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'message', type: 'varchar' })
  public message: string;

  @Column({ name: 'is_read', type: 'tinyint' })
  public is_read: boolean;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesNotificationss)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;

  @ManyToOne(() => ResUsers, (resUser) => resUser.favoritesUserss)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesNotifications>) {
    Object.assign(this, data);
  }
}
