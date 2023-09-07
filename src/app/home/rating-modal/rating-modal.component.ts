import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductRating } from '../product.model';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss']
})
export class RatingModalComponent implements OnInit {

  @Input() productRating: ProductRating;
  @Input() product: Product;

  successResponse: boolean;

  constructor(public activeModal: NgbActiveModal) {
    this.productRating = new ProductRating();
    this.product = new Product();
    this.successResponse = false;
  }

  ngOnInit(): void {
    this.successResponse = this.productRating.authorizationStatus.code == 200;
  }
}
