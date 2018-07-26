export class Business {
  constructor(
    public id: number,
    public name: string,
    public logo?: string,
    public optins_per_day?: number,
    public newsletter?: number,
    public ezine?: Newsletter,
    public use_default_logo?: boolean,
    public email?: string
  ){ }  
}

export class Newsletter {
  constructor(
    public id: number,
    public title: string,
    public template: number,
  ){ }
}

//'bibleverses','recipes','travel','politics'
export const Newsletters: Newsletter[] = [
  { id: 1, title: 'Entertainment', template: 1317 },
  // { id: 2, title: 'Weather', template: 1331 },
  // { id: 3, title: 'Comic Digest', template: 1334 },
  { id: 4, title: 'Bargain Hunters', template: 1421 },
];