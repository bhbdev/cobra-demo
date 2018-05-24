export class Business {
  
  constructor(
    public id: number;
    public name: string;
    public logo: string;
    public use_default_logo?: boolean;
    public optins_per_day: number;
    public newsletter: number; 
  ){ }
  
}