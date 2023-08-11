export interface NelsonSiegelSvenson{
    id:number;
    referenceDate:string;
    maturity:string;
    yield?:number;
    coupon:number;
    price:number;
    value?:number;
    frequency?:string;
    frequencyFloat?:string;
    daycountConventions?:string;
    daycountConventionsFloat?:string;
    maturitiePerMonths?:number;
    periodFixing?:string;
    periodStart?:string;
    periodEnd?:string;
    periodPayment?:string;
}