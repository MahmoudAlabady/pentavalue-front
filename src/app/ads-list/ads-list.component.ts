import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads-list',
  standalone: true,
  imports: [],
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss'
})
export class AdsListComponent implements OnInit{
  ads: any[];

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
    this.getAds();
  }

  getAds() {
    this.adsService.getAds().subscribe(data => {
      this.ads = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

}
