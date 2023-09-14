import { Component } from '@angular/core';
import { RatingService } from '../rating.service';
import { VendorUsageProof } from './vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent {

  vendorList = [
    { id: "usage_collector_orange", name: "Orange" },
    { id: "usage_collector_video_provider", name: "Streamzier" }
  ];
  selectedVendorId: any = "";
  usageList: VendorUsageProof[] = [];
  totalCost: number = 0;

  constructor(private ratingService: RatingService) {

  }

  onSelectVendor(newValue: any) {
    this.selectedVendorId = newValue;
    if (this.selectedVendorId == '') {
      this.totalCost = 0;
      this.usageList = [];
    } else {
      this.ratingService.getVendorUsageProof(this.selectedVendorId).subscribe(res => {
        this.usageList = res;
        this.totalCost = this.usageList.reduce(function (previousVal, currentVal) {
          return previousVal + parseFloat(currentVal.ratedProductUsage.bucketValueConvertedInAmount.value);
        }, 0);
      })
    }

  }


}
