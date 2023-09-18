import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';
import { Product, ProductRating } from './product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingModalComponent } from './rating-modal/rating-modal.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchId: string;
  productList: Product[] = [];
  successModaldisplayStyle: string;
  errorModaldisplayStyle: string;
  extraHttpHeaders?: HttpHeaders;

  constructor(
    private ratingService: RatingService, private modalService: NgbModal,
  ) {
    this.searchId = "";
    this.successModaldisplayStyle = "none";
    this.errorModaldisplayStyle = "none";
    this.productList = [];
  }

  ngOnInit(): void {
    this.searchId = "";
  }

  onToggle() {
    this.extraHttpHeaders = new HttpHeaders({ 'cf-ipcountry': 'EG' });
    this.onClickSearch();
  }

  onClickSearch() {
    this.ratingService.getOffers(this.searchId, this.extraHttpHeaders).subscribe(res => this.productList = res)
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView();
    }, 100)
  }

  useOffer(product: Product) {
    this.ratingService
      .useOffer(this.searchId, product.productOffering.agentId, product.productOffering.id, this.extraHttpHeaders)
      .subscribe(res => {
        const modalRef = this.modalService.open(RatingModalComponent, {
          centered: true,
          size: 'xl',
          backdrop: 'static'
        })
        modalRef.componentInstance.productRating = new ProductRating(res);
        modalRef.componentInstance.product = product;
      })
  }
}
