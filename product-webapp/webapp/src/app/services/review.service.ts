import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8080'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getReviewsByProductId(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customerRatingReview/viewByProductId/${productId}`);
  }
}
