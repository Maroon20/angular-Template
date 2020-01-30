import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colisage-form",
  templateUrl: "./colisage-form.component.html",
  styleUrls: ["./colisage-form.component.css"]
})
export class ColisageFormComponent implements OnInit {
  $: any;
  constructor() {}
  i: number;
  ngOnInit() {
    this.i = 1;
  }
  addRow() {
    this.i++;

    this.$("table")
      .find("tbody")
      .append(
        "<tr>" +
          "<td>" +
          "<div class='input-group'>" +
          "<div class='input-group-prepend'>" +
          "<span class='input-group-text' id='inputGroupPrepend'>" +
          this.i +
          "</span>" +
          "</div>" +
          "<input" +
          " type='text'" +
          "class='form-control'" +
          "id='validationCustomUsername'" +
          "aria-describedby='inputGroupPrepend'" +
          " required  style='font-size: x-small;'" +
          "value='Nbre colis'" +
          "/>" +
          " <div class='invalid-feedback'>" +
          "Please choose a username." +
          "</div>" +
          " </div>" +
          "</td>" +
          "<td>" +
          "<input" +
          " type='text'" +
          " class='form-control'" +
          " id='validationCustom02'" +
          "value='Longueur en cm'" +
          "required style='font-size: x-small;'" +
          "style='width:150px'" +
          " />" +
          "<div class='valid-feedback'>" +
          " Looks good!" +
          " </div>" +
          " </td>" +
          "<td>" +
          "  <input" +
          " type='text'" +
          " class='form-control'" +
          " id='validationCustom02'" +
          " value='Largeur en cm'" +
          "required style='font-size: x-small;'" +
          "style='width:150px'" +
          " />" +
          "<div class='valid-feedback'>" +
          "Looks good!" +
          "</div>" +
          " </td>" +
          " <td>" +
          " <input" +
          "type='text'" +
          "  class='form-control'" +
          " id='validationCustom02'" +
          " value='Hauteur en cm'" +
          " required style='font-size: x-small;'" +
          " />" +
          "<div class='valid-feedback'>" +
          "Looks good!" +
          " </div>" +
          "</td>" +
          "<td>" +
          "<input" +
          "type='text'" +
          " class='form-control'" +
          " id='validationCustom02'" +
          " value='Volume en m3'" +
          "required style='font-size: x-small;'" +
          "  />" +
          "<div class='valid-feedback'>" +
          "  Looks good!" +
          " </div>" +
          " </td>" +
          "<td>" +
          "<input" +
          "type='text'" +
          " class='form-control'" +
          " id='validationCustom02'" +
          " value='Volume en m3'" +
          "required style='font-size: x-small;'" +
          "  />" +
          "<div class='valid-feedback'>" +
          "  Looks good!" +
          " </div>" +
          " </td>" +
          " <td>" +
          " <div class='input-group'>" +
          "  <input" +
          " type='text'" +
          "  class='form-control'" +
          "id='validationCustomUsername'" +
          "aria-describedby='inputGroupPrepend'" +
          "required style='font-size: x-small;'" +
          " value='Poids taxable en kg'" +
          "/>" +
          "<div class='invalid-feedback'>" +
          " Please choose a username." +
          "</div>" +
          "</div>" +
          " </td>" +
          "<td>" +
          "<select class='custom-select' id='validationCustom04' required style='font-size: x-small;'>" +
          " <option selected disabled value=''>gerbable</option>" +
          " <option>oui</option>" +
          " <option>non</option>" +
          "</select>" +
          "<div class='invalid-feedback'>" +
          "Please select a valid state." +
          "</div>" +
          " </td>" +
          "<td>" +
          "<button class='btn btn-success' style='width: 120px; font-size: small;background-color: #28a745;color:white;border-radius: 5%;' >Calculer</button>" +
          " </td>" +
          "<td>" +
          " <button class='btn btn-danger' onclick='deleteRow(this)' style='width: 120px; font-size: small;background-color: #dc3545;color:white;border-radius: 5%;'>supprimer</button>" +
          "</td>" +
          "<tr>"
      );
  }

  /*deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }*/
}
