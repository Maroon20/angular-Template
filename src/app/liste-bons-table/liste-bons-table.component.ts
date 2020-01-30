import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import {
  TableExempleDataSource,
  TableExempleItem
} from "./table-exemple-datasource";

@Component({
  selector: "app-liste-bons-table",
  templateUrl: "./liste-bons-table.component.html",
  styleUrls: ["./liste-bons-table.component.css"]
})
export class ListeBonsTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TableExempleItem>;
  dataSource: TableExempleDataSource;
  constructor() {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "id",
    "name",
    "name1",
    "name2",
    "name3",
    "name4",
    "action"
  ];
  ngOnInit() {
    this.dataSource = new TableExempleDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
