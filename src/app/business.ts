export class Business {
  
  constructor(
    public id: number,
    public name: string,
    public logo: string,
    public optins_per_day: number,
    public newsletter: number,
    public use_default_logo?: boolean,
  ){ }
  
}