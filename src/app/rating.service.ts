import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './home/product.model';
import { VendorUsageProof } from './vendor/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getOffers(partyId: string) {
    return this.http.get<Product[]>(`${environment.api.base}/party/${partyId}/offers`)
  }

  useOffer(customerId: string, agentId: string, offerId: string) {
    return this.http.post(`${environment.api.base}/usage/rating`, {
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
    return this.http.get<VendorUsageProof[]>(`${environment.api.base}/collector/${vendorId}/list`)

  }




}
