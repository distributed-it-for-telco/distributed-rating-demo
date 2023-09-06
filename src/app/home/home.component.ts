import { Component, OnInit } from '@angular/core';
import { RatingService } from './rating-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchId: string;
  productList: any[] = [];

  constructor(private ratingService: RatingService) {
    this.searchId = "";
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

}
