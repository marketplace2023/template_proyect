import { FavoritesCompanies } from 'src/Module-favorites/favorites-companies/entities/favorites-companies.entity';
import { FavoritesLocations } from 'src/Module-favorites/favorites-locations/entities/favorites-locations.entity';
import { FavoritesUsers } from 'src/Module-favorites/favorites-users/entities/favorites-users.entity';
import { VideoStreamComment } from 'src/Module-video/video-stream-comment/entities/video-stream-comment.entity';
import { VideoStreamRating } from 'src/Module-video/video-stream-rating/entities/video-stream-riting.entity';
import { VideoStreamSubscription } from 'src/Module-video/video-stream-subscription/entities/video-stream-subscription.entity';
import { VideoStreamView } from 'src/Module-video/video-stream-view/entities/video-stream-view.entity';
import { ResBank } from 'src/Modulo-users/res-bank/entities/res-bank.entity';
import { ResCompany } from 'src/Modulo-users/res-company/entities/res-company.entity';
import { ResCountryState } from 'src/Modulo-users/res-country-state/entities/res-country-state.entity';
import { ResCountry } from 'src/Modulo-users/res-country/entities/res-country.entity';
import { ResCurrencyRate } from 'src/Modulo-users/res-currency-rate/entities/res-currency-rate.entity';
import { ResGroupsRules } from 'src/Modulo-users/res-groups-rules/entities/res-groups-rules.entity';
import { ResGroups } from 'src/Modulo-users/res-groups/entities/res-groups.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { ResUsersDeletion } from 'src/Modulo-users/res-users-deletion/entities/res-users-deletion.entity';
import { ResUsersLog } from 'src/Modulo-users/res-users-log/entities/res-users-log.entity';
import { ResUsersSettingsVolumes } from 'src/Modulo-users/res-users-settings-volumes/entities/res-users-settings-volumes.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users' })
export class ResUsers {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'login', type: 'varchar', length: 255 })
  public login: string;

  @Column({ name: 'password', type: 'varchar', length: 50 })
  public password: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  public email: string;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'active', type: 'tinyint', default: 0 })
  public active: boolean;

  @Column({ name: 'action_id', type: 'int' })
  public action_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'signature', type: 'varchar', length: 255 })
  public signature: string;

  @Column({ name: 'share', type: 'tinyint', default: 0 })
  public share: boolean;

  @Column({ name: 'write_date', type: 'int' })
  public write_date: number;

  @Column({ name: 'totp_secret', type: 'varchar', length: 255 })
  public totp_secret: string;

  @Column({ name: 'notification_type', type: 'varchar', length: 255 })
  public notification_type: string;

  @Column({ name: 'odoobot_state', type: 'varchar', length: 255 })
  public odoobot_state: string;

  @Column({ name: 'odoobot_failed', type: 'tinyint', default: 0 })
  public odoobot_failed: boolean;

  @Column({ name: 'sale_team_id', type: 'int' })
  public sale_team_id: number;

  @Column({ name: 'target_sales_won', type: 'int' })
  public target_sales_won: number;

  @Column({ name: 'target_sales_done', type: 'int' })
  public target_sales_done: number;

  @Column({ name: 'karma', type: 'int' })
  public karma: number;

  @Column({ name: 'rank_id', type: 'int' })
  public rank_id: number;

  @Column({ name: 'next_rank_id', type: 'int' })
  public next_rank_id: number;

  @Column({ name: 'target_sales_invoiced', type: 'int' })
  public target_sales_invoiced: number;

  //Uno a Uno ResUsersSettingsVolumes
  @OneToOne(
    () => ResUsersSettingsVolumes,
    (usersSettingsVolume) => usersSettingsVolume.user,
  )
  public usersSettingsVolume: ResUsersSettingsVolumes;

  //Uno a Uno ResUsersDeletion
  @OneToOne(() => ResUsersDeletion, (usersDeletion) => usersDeletion.user)
  public usersDeletion: ResUsersDeletion;

  //Uno a Mucho ResCurrencyRate
  @OneToMany(() => ResCurrencyRate, (currencyRate) => currencyRate.user)
  public currencyRates: ResCurrencyRate[];

  //Uno a Mucho ResBank
  @OneToMany(() => ResBank, (bank) => bank.user)
  public banks: ResBank[];

  //Uno a Mucho ResUsersLog
  @OneToMany(() => ResUsersLog, (usersLog) => usersLog.user)
  public usersLogs: ResUsersLog[];

  //Uno a Mucho ResCountry
  @OneToMany(() => ResCountry, (country) => country.user)
  public country: ResCountry;

  //Uno a Mucho ResCountryState
  @OneToMany(() => ResCountryState, (countryState) => countryState.user)
  public countryStates: ResCountryState[];

  //Uno a Mucho ResCompany
  @OneToMany(() => ResCompany, (company) => company.user)
  public companys: ResCompany[];

  //Uno a Mucho ResPartner
  @OneToMany(() => ResPartner, (partner) => partner.user)
  public partners: ResPartner[];

  //Muchos a Muchos ResGroups
  @ManyToMany(() => ResGroups, { cascade: true })
  @JoinTable({
    name: 'res_groups_res_users',
    joinColumn: { name: 'res_users_id' },
    inverseJoinColumn: { name: 'res_groups_id' },
  })
  public resGroups: ResGroups[];

  //Muchos a Uno ResCompany
  @ManyToOne(() => ResCompany, (company) => company.user)
  @JoinColumn({ name: 'company_id' })
  public company: ResCompany;

  //Uno a Mucho ResGroupsRules
  @OneToMany(() => ResGroupsRules, (groupsRules) => groupsRules.user)
  public groupsRules: ResGroupsRules;

  //Muchos a Uno ResPartner
  @ManyToOne(() => ResPartner, (partner) => partner.user)
  @JoinColumn({ name: 'partner_id' })
  public partner: ResPartner;
  //--------------------------Relacion de favorite--------------------------------

  @OneToMany(() => FavoritesUsers, (favoritesUsers) => favoritesUsers.resUsers)
  public favoritesUserss: FavoritesUsers;

  @OneToMany(
    () => FavoritesLocations,
    (favoritesLocations) => favoritesLocations.resUsers,
  )
  public favoritesLocationss: FavoritesLocations;

  @OneToMany(
    () => FavoritesCompanies,
    (favoritesCompanies) => favoritesCompanies.resUsers,
  )
  public favoritesCompaniesss: FavoritesCompanies;

  @OneToMany(
    () => VideoStreamView,
    (videoStreamView) => videoStreamView.resUsers,
  )
  public videoStreamViews: VideoStreamView;

  @OneToMany(
    () => VideoStreamRating,
    (videoStreamRating) => videoStreamRating.resUsers,
  )
  public videoStreamRatings: VideoStreamRating;

  @OneToMany(
    () => VideoStreamComment,
    (videoStreamComment) => videoStreamComment.resUserss,
  )
  public videoStreamComments: VideoStreamComment;

  @OneToMany(
    () => VideoStreamSubscription,
    (videoStreamSubscription) => videoStreamSubscription.resUsers,
  )
  public videoStreamSubscriptions: VideoStreamSubscription;
  //-------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsers>) {
    Object.assign(this, data);
  }
}
