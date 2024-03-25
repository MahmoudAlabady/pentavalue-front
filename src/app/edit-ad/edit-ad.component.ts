import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ad',
  standalone: true,
  imports: [],
  templateUrl: './edit-ad.component.html',
  styleUrl: './edit-ad.component.scss'
})
export class EditAdComponent implements OnInit  {
  adId: string;
  ad: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adsService: AdsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.adId = params['id'];
      this.getAd(this.adId);
    });
  }

  getAd(id: string) {
    this.adsService.getAd(id).subscribe(data => {
      this.ad = data.payload.data();
    });
  }

  updateAd() {
    this.adsService.updateAd(this.adId, this.ad).then(() => {
      console.log('Ad updated successfully');
      this.router.navigate(['/ads']);
    }).catch(error => {
      console.error('Error updating ad:', error);
    });
  }
}
