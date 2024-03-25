import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
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

  createAd(ad: any) {
    this.adsService.createAd(ad);
  }

  updateAd(id: string, ad: any) {
    this.adsService.updateAd(id, ad);
  }

  deleteAd(id: string) {
    this.adsService.deleteAd(id);
  }
}
