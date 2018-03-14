import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'doc',
})
export class DocPipe implements PipeTransform {
  constructor(private db: FirestoreProvider) {}

  transform(value: any): Observable<any> {
    return this.db.doc$(value.path);
  }

}

/**
 * DOCUMENTATION
 *
 * Usage:
 * If we are trying to easily display a property of a referenced document
 * we can employ this pipe.
 *
 * <div *ngIf="dealDoc | async as deal">
 *     {{ (deal.business | doc | async)?.name }}
 * </div>
 */
