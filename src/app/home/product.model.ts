
export class Product {
    partnerId: any;
    id: string;
    description: string;
    productOffering: ProductOffering;
    productPrice: ProductPrice;

    constructor(apiModel: any = null) {
        this.id = apiModel?.id || null;
        this.partnerId = apiModel?.partnerId || null;
        this.description = apiModel?.description || null;
        this.productOffering = apiModel?.productOffering || null;
        this.productPrice = apiModel?.productPrice || null;

    }
}
export class Party {
    id: string;
    name: string;
    constructor(apiModel: any) {
        this.id = apiModel.id || null;
        this.name = apiModel.name || null;

    }
}
export class ProductOffering {
    id: string;
    name: string;
    agentId: string;
    constructor(apiModel: any) {
        this.id = apiModel.id || null;
        this.name = apiModel.name || null;
        this.agentId = apiModel.agentId || null;
    }
}

export class ProductPrice {
    description: string;
    validTill: string;
    priceType: string;
    unitOfMeasure: any;
    price: any;
    constructor(apiModel: any) {
        this.description = apiModel.description || null;
        this.validTill = apiModel.validTill || null;
        this.priceType = apiModel.priceType || null;
        this.unitOfMeasure = apiModel.unitOfMeasure || null;
        this.price = apiModel.price || null;
    }
}

export class ProductRating {
    billingInformation: any;
    authorizationStatus: any;
    constructor(apiModel: any = null) {
        this.billingInformation = apiModel?.billingInformation || null;
        this.authorizationStatus = apiModel?.authorizationStatus || null;
    }
}



