import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerShippingDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_partner_id: number

@Expose()
public shipping_cost : number

@Expose()
public estimated_delivery : number
    
}
