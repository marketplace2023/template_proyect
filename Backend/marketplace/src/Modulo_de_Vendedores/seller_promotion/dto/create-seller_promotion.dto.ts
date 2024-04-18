import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerPromotionDto {

@Expose()
public id : number

@Expose()
public name : number

@Expose()
public res_partner_id : number

@Expose()
public description : string

@Expose()
public start_date : number

@Expose()
public end_date : number

@Expose()
public discount_type  : string

@Expose()
public discount_amount :number

}
