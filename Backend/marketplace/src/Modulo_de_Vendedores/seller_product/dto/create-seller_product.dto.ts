import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerProductDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_partner_id : number

@Expose()
public product_category_id : number

@Expose()
public description : string

@Expose()
public price : number

@Expose()
public quantity_available : number

}
