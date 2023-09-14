import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './home/product.model';
import { VendorUsageProof } from './vendor/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  ORANGE_PROD_INVENTORY_ID = 'orange_inventory';
  BASE_URL = '/api';
  
  constructor(private http: HttpClient) { }

  getOffers(partyId: string) {
    return this.http.get<Product[]>(`${this.BASE_URL}/party/${partyId}/offers/${this.ORANGE_PROD_INVENTORY_ID}`)
  }

  useOffer(customerId: string, agentId: string, offerId: string) {
    return this.http.post(`${this.BASE_URL}/usage/rating`, {
      "customerId": customerId,
      "usage": {
        "usageCharacteristicList": [
          {
            "name": "storage-usage",
            "value": "5",
            "valueType": "Giga"
          }
        ]
      },
      "agentId": agentId,
      "offerId": offerId
    }
    )
  }

  getVendorUsageProof(vendorId: string) {
    return this.http.get<VendorUsageProof[]>(`${this.BASE_URL}/usage/rating-proofs/${vendorId}`)
  }
}
