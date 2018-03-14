import { Injectable } from '@angular/core';

// RXJS
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
import "rxjs/add/operator/do";

// Firebase
import * as firebase from "firebase";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FirestoreProvider {

  constructor() { }

}
