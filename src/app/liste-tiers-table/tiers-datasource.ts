import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface TiersItem {
  ADDRESS1: string;
  ADDRESS2: string;
  ADDRESS3: string;
  CODE_POSTAL: number;
  DEPARTEMENT: string;
  VILLE: string;
  ACTION: number;
  id: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TiersItem[] = [
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  },
  {
    id: "ZODIAC ET",
    ADDRESS1: "ROUTE DE TUNIS KM 6",
    ADDRESS2: "ROUTE DE TUNIS KM 6",
    ADDRESS3: "ROUTE DE TUNIS KM 6",
    CODE_POSTAL: 8020,
    DEPARTEMENT: "3AH",
    VILLE: "SOLIMAN",
    ACTION: 1
  }
];

/**
 * Data source for the Tiers view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TiersDataSource extends DataSource<TiersItem> {
  data: TiersItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TiersItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TiersItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TiersItem[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "ADDRESS1":
          return compare(a.ADDRESS1, b.ADDRESS1, isAsc);
        case "id":
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
