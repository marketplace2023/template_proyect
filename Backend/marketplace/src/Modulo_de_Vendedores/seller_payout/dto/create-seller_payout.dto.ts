import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerPayoutDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public res_user_id : number

@Expose()
public payout_date: number

@Expose()
public amount : number

@Expose()
public payout_method: string

}
