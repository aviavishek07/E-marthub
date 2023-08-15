import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentCustomerRatingService {

  private backendUrl = 'http://localhost:8080/customerRatingReview/addRatingReview'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  submitRatingAndReview(ratingAndReview: any) {
    return this.http.post(this.backendUrl, ratingAndReview);
  }
}
