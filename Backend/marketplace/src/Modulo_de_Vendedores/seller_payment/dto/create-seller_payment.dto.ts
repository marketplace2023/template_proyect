import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerPaymentDto {


@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_users_id : number

@Expose()
public payment_date : number

@Expose()
public amount : number

@Expose()
public payment_method : string

}
