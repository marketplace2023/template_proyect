import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerSubscriptionDto {

@Expose()
public id: number

@Expose()
public res_partner_id: number

@Expose()
public duration: string

@Expose()
public price : number

@Expose()
public benefits : string

}
