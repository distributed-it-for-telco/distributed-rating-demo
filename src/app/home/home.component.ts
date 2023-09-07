import { Component, OnInit } from '@angular/core';
import { RatingService } from './rating.service';
import { ProductOfferResponse } from './product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchId: string;
  productList: ProductOfferResponse[] = [];
  successModaldisplayStyle: string;
  errorModaldisplayStyle: string;

  constructor(private ratingService: RatingService) {
    this.searchId = "";
    this.successModaldisplayStyle = "none";
    this.errorModaldisplayStyle = "none";
  }

  ngOnInit(): void {
    this.productList = [];
    this.searchId = "";
  }

  onClickSearch() {
    this.ratingService.getOffers(this.searchId).subscribe(res => this.productList = res)
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView();
    }, 100)
  }

  useOffer(item: ProductOfferResponse) {
    this.ratingService.useOffer(item.relatedParty.id, item.product.productOffering.agentId, item.product.productOffering.id)
      .subscribe(res => this.successModaldisplayStyle = "block")
  }

}
