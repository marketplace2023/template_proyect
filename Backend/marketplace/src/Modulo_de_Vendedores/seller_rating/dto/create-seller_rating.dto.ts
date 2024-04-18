import { Exclude, Expose } from "class-transformer";

export class CreateSellerRatingDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_partner_id : number

@Expose()
public res_users_id : number

@Expose()
public rating : number

@Expose()
public review : string

@Expose()
public date : number

}
