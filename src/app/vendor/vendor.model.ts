export class VendorUsageProof {
    id: any;
    usageDate: any;
    description: any;
    usageType: any;
    ratedProductUsage: any;
    relatedParty: any;
    usageCharacteristic: any;
}

export interface Product {
    id: number;
    name: string
    totalRevenue: number;
    totalRevenueUnit:string;
    totalTransactions: number;
}