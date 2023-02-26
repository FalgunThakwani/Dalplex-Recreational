import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Time } from '@angular/common';

// TODO: Replace this with your own data model type
export interface ListViewItem {
  id:number;
  name:string;
  imagePath:string;
  userName:string;
  date:string;
  timeStart:string;
  timeEnd:string;
  quantity:number;
  unitPrice:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListViewItem[] = [
  {id: 1, name: 'BasketBall',imagePath:'../assets/bas.jpg',userName:'Falgun Jairaj Thakwani',
  date:'Sat, Mar 26 2023',timeStart:'7:00 am',timeEnd:'8:00 am',quantity:1,unitPrice:0.0},
  {id: 1, name: 'Swimming',imagePath:'../assets/swimlane.jfif',userName:'Falgun Jairaj Thakwani',
  date:'Sat, Mar 26 2023',timeStart:'8:30 am',timeEnd:'9:00 am',unitPrice:0.0,quantity:1},
];

/**
 * Data source for the ListView view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListViewDataSource extends DataSource<ListViewItem> {
  data: ListViewItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListViewItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListViewItem[]): ListViewItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListViewItem[]): ListViewItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
