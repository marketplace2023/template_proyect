import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSellerAnalyticDto {

    @Expose()
    public id: number;
  
    @Expose()
    public total_sales: number
  
    @Expose()
    public conversion_rate: number;
  
    @Expose()
    public average_rating: number
  
    @Expose()
    public total_orders: number;

    @Expose()
    public res_partner_id : number;
  
  }



