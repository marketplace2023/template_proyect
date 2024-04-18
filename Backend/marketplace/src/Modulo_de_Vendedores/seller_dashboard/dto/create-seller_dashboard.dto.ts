import { Exclude, Expose } from "class-transformer";


@Exclude()
export class CreateSellerDashboardDto {

@Expose()
public id: number

@Expose()
public name : string

@Expose()
public res_partner_id : number

@Expose()
public total_sales : number

@Expose()
public total_orders : number

@Expose()
public total_customers : number


}
