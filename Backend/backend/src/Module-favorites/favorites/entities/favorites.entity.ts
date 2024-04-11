import { FavoritesCategories } from 'src/Module-favorites/favorites-categories/entities/favorites-categories.entity';
import { FavoritesCompanies } from 'src/Module-favorites/favorites-companies/entities/favorites-companies.entity';
import { FavoritesGroups } from 'src/Module-favorites/favorites-groups/entities/favorites-groups.entity';
import { FavoritesItems } from 'src/Module-favorites/favorites-items/entities/favorites-items.entity';
import { FavoritesLocations } from 'src/Module-favorites/favorites-locations/entities/favorites-locations.entity';
import { FavoritesNotifications } from 'src/Module-favorites/favorites-notifications/entities/favorites-notifications.entity';
import { FavoritesTags } from 'src/Module-favorites/favorites-tags/entities/favorites-tags.entity';
import { FavoritesUsers } from 'src/Module-favorites/favorites-users/entities/favorites-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'favorites' })
export class Favorites {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'url', type: 'varchar' })
  public url: string;

  //---------------------------------------RELACIONES------------------------------------------------
  @OneToMany(() => FavoritesItems, (favoritesItems) => favoritesItems.favorites)
  public favoritesItemss: FavoritesItems;

  @OneToMany(
    () => FavoritesCategories,
    (favoritesCategories) => favoritesCategories.favorites,
  )
  public favoritesCategoriess: FavoritesCategories;

  @OneToMany(
    () => FavoritesNotifications,
    (favoritesNotifications) => favoritesNotifications.favorites,
  )
  public favoritesNotificationss: FavoritesNotifications;

  @OneToMany(() => FavoritesTags, (favoritesTags) => favoritesTags.favorites)
  public favoritesTagss: FavoritesTags;

  @OneToMany(() => FavoritesUsers, (favoritesUsers) => favoritesUsers.favorites)
  public favoritesUserss: FavoritesUsers;

  @OneToMany(
    () => FavoritesLocations,
    (favoritesLocations) => favoritesLocations.favorites,
  )
  public favoritesLocationss: FavoritesLocations;

  @OneToMany(
    () => FavoritesCompanies,
    (favoritesCompanies) => favoritesCompanies.favorites,
  )
  public favoritesCompaniess: FavoritesCompanies;

  @OneToMany(
    () => FavoritesGroups,
    (favoritesGroups) => favoritesGroups.favorites,
  )
  public favoritesGroupss: FavoritesGroups;

  //--------------------------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<Favorites>) {
    Object.assign(this, data);
  }
}
