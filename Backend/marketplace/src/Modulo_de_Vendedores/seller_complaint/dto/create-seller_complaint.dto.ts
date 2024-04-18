import { Exclude, Expose } from "class-transformer";

Exclude()
export class CreateSellerComplaintDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public description : string

@Expose()
public res_partner_id : number

@Expose()
public res_user_id : number

@Expose()
public order_id : number

@Expose()
public status : string


}
