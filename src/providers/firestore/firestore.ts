import { Injectable } from '@angular/core';

// RXJS
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
import "rxjs/add/operator/do";

// Firebase
import * as firebase from "firebase";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// Custom Type Aliases
export type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
export type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable()
export class FirestoreProvider {

  constructor(private  afs: AngularFirestore) { }

  /*---------------------------HELPER FUNCTIONS---------------------------*/
  // Return References
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  //Return Observables
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[]
    });
  }

  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().map(doc => {
      return doc.payload.data() as T
    });
  }
}
