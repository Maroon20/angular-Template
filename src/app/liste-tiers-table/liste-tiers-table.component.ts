import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { TiersDataSource, TiersItem } from "./tiers-datasource";

@Component({
  selector: "app-liste-tiers-table",
  templateUrl: "./liste-tiers-table.component.html",
  styleUrls: ["./liste-tiers-table.component.css"]
})
export class ListeTiersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TiersItem>;
  dataSource: TiersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "id",
    "ADDRESS1",
    "ADDRESS2",
    "ADDRESS3",
    "CODE_POSTAL",
    "DEPARTEMENT",
    "VILLE",
    "ACTION"
  ];

  ngOnInit() {
    this.dataSource = new TiersDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
