import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Influencer } from "./influencer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class InfluencerService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:5000/";

  getInfluencers(): Observable<Influencer[]> {
    return this.http.get<Influencer[]>(this.url);
  }

  addInfluencer(newInfluencer: Influencer): Observable<Influencer> {
    return this.http.post<Influencer>(this.url, newInfluencer);
  }
}