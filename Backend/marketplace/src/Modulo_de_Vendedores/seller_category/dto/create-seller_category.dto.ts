import { Exclude, Expose } from 'class-transformer';

@Exclude()

export class CreateSellerCategoryDto {

@Expose()
public id : number;

@Expose()
public name : string;

@Expose()
public description : string;

@Expose()
public res_partner_id : number

}
