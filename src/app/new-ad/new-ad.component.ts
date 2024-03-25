import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-new-ad',
  standalone: true,
  imports: [],
  templateUrl: './new-ad.component.html',
  styleUrl: './new-ad.component.scss'
})
export class NewAdComponent implements OnInit {
  
  adData: any = {};

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
  }

  createAd() {
    this.adsService.createAd(this.adData).then(() => {
      console.log('Ad created successfully');
      this.adData = {}; // Clear the form
    }).catch(error => {
      console.error('Error creating ad:', error);
    });
  }

}
