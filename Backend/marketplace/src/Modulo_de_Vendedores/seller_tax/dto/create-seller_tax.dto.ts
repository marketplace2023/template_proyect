import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerTaxDto {

@Expose()
public id : number

@Expose()
public name  : string

@Expose()
public res_partner_id : number

@Expose()
public tax_rate: number

@Expose()
public tax_type: string

}
