import { Component } from '@angular/core';
import { RatingService } from '../rating.service';
import { Product, VendorUsageProof } from './vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent {

  vendorList = [
    { id: "usage_collector_orange", name: "Orange" },
    { id: "usage_collector_video_provider", name: "Streamzie" }
  ];
  selectedVendorId: any = "";
  usageList: VendorUsageProof[] = [];
  totalCost: number = 0;

  productListMapped: Product[] = [];
  productMap = new Map<number, Product>();

  constructor(private ratingService: RatingService) {

  }

  onSelectVendor(newValue: any) {
    this.selectedVendorId = newValue;
    this.productListMapped = [];
    
    if (this.selectedVendorId == '') {
      this.totalCost = 0;
      this.usageList = [];
    } else {
      this.ratingService.getVendorUsageProof(this.selectedVendorId).subscribe(res => {
        this.usageList = res;
        this.totalCost = this.usageList.reduce(function (previousVal, currentVal) {
          return previousVal + parseFloat(currentVal.ratedProductUsage.bucketValueConvertedInAmount.value);
        }, 0);
        this.getProductList();
      })
    }

  }

  getProductList() {
    this.productMap.clear();
    this.usageList.forEach((product) => {
      const { ratedProductUsage } = product;
      const { value, unit } = ratedProductUsage.bucketValueConvertedInAmount;
      const { id: productId, name } = ratedProductUsage.productRef;

      if (this.productMap.has(productId)) {
        const existingProduct = this.productMap.get(productId)!;
        existingProduct.totalRevenue += parseFloat(value);
        existingProduct.totalTransactions += 1;
      } else {
        this.productMap.set(productId, {
          id: productId,
          name: name,
          totalRevenue: parseFloat(value),
          totalRevenueUnit: unit,
          totalTransactions: 1,
        });
      }
    });

    this.productListMapped = Array.from(this.productMap.values());
  }
}
