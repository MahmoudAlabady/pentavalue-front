import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private firestore: AngularFirestore) { }

  getAds() {
    return this.firestore.collection('ads').snapshotChanges();
  }

  createAd(ad: any) {
    return this.firestore.collection('ads').add(ad);
  }

  updateAd(id: string, ad: any) {
    return this.firestore.doc('ads/' + id).update(ad);
  }

  deleteAd(id: string) {
    return this.firestore.doc('ads/' + id).delete();
  }
}
