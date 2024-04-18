import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateSellerCommissionRuleDto {

    @Expose()
    public id: number;
  
    @Expose()
    public name: string
  
    @Expose()
    public commision_type: number;
  
    @Expose()
    public rate: number;
    
    @Expose()
    public min_sales_amount : number

    @Expose()
    public max_sales_amount  : number

    @Expose()
    public min_sales_quantity  : number

    @Expose()
    public max_sales_quantity  : number

}
