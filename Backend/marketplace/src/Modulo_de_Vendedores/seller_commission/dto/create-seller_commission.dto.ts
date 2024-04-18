import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerCommissionDto {

@Expose()
public id : number

@Expose()
public name : string

@Expose()
public commision_type : number

@Expose()
public rate : number

}
