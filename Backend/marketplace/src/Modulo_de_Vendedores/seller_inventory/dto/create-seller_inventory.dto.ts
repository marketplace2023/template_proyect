import { Exclude, Expose } from "class-transformer";


@Exclude()
export class CreateSellerInventoryDto {

@Expose()
public id : number

@Expose()
public name: string

@Expose()
public res_partner_id : number

@Expose()
public product_product_id : number

 @Expose()
 public stock_quantity : number
 
 @Expose()
 public low_stock_threshold  : number


}
