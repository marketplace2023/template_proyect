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

@Entity({ name: 'favorites_companies' })
export class FavoritesCompanies {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'favorites_id', type: 'int' })
  public favorites_id: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => ResUsers, (resUser) => resUser.favoritesCompaniesss)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;

  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesCompaniess)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //--------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesCompanies>) {
    Object.assign(this, data);
  }
}
