export class Business {
  
  constructor(
    public name: string,
    public logo: string,
    public optins_per_day: number,
    public newsletter: number,
    public use_default_logo?: boolean,
  ){ }
  
}