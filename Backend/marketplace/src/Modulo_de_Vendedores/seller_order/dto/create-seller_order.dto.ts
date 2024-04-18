import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerOrderDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_partner_id : number

@Expose()
public res_users_id : number

@Expose()
public order_date : number

@Expose()
public total_amount : number

@Expose()
public order_status : number
}
