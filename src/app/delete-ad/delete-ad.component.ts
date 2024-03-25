import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-delete-ad',
  standalone: true,
  imports: [],
  templateUrl: './delete-ad.component.html',
  styleUrl: './delete-ad.component.scss'
})
export class DeleteAdComponent implements OnInit {
  ads: any[];

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
    this.getAds();
  }

  getAds() {
    this.adsService.getAds().subscribe(data => {
      this.ads = data;
    });
  }

  deleteAd(adId: string) {
    if (confirm('Are you sure you want to delete this ad?')) {
      this.adsService.deleteAd(adId).then(() => {
        console.log('Ad deleted successfully');
        this.getAds();
      }).catch(error => {
        console.error('Error deleting ad:', error);
      });
    }
  }


}
