import { Component } from '@angular/core';
import { ColumnDefinition, ColumnDefinitionAlign, Editor, Formatter, Sorter, Tabulator } from 'tabulator-tables';

// import { TabulatorDef } from 'src/app/libs/ng-tabulator/ng-tabulator.interface';

//define data array
const tabledata = [
    { id: 1, name: "Oli Bob", progress: 12, gender: "male", rating: 1, col: "red", dob: "19/02/1984", car: 1 },
    { id: 2, name: "Mary May", progress: 1, gender: "female", rating: 2, col: "blue", dob: "14/05/1982", car: true },
    { id: 3, name: "Christine Lobowski", progress: 42, gender: "female", rating: 0, col: "green", dob: "22/05/1982", car: "true" },
    { id: 4, name: "Brendon Philips", progress: 100, gender: "male", rating: 1, col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", progress: 16, gender: "female", rating: 5, col: "yellow", dob: "31/01/1999" },
    { id: 6, name: "Frank Harbours", progress: 38, gender: "male", rating: 4, col: "red", dob: "12/05/1966", car: 1 },
];

const tabulator_demo_options = {
    data: tabledata,           //load row data from array
    height: '50vh',
    layout: 'fitColumns' as any,      //fit columns to width of table
    // responsiveLayout: "hide",  //hide columns that dont fit on the table
    // addRowPos: "top",          //when adding a new row, add it to the top of the table
    // history: true,             //allow undo and redo actions on the table
    // pagination: "local",       //paginate the data
    // paginationSize: 7,         //allow 7 rows per page of data
    // paginationCounter: "rows", //display count of paginated rows in footer
    // movableColumns: true,      //allow column order to be changed
    // initialSort: [             //set the initial sort order of the data
    //     { column: "name", dir: "asc" },
    // ],
    // columnDefaults: {
    //     tooltip: true,         //show tool tips on cells
    // },
    columns: [                 //define the table columns
        { title: "Name", field: "name", editor: "input" as Editor },
        // { title: "Task Progress", field: "progress", hozAlign: "left" as ColumnDefinitionAlign, formatter: "progress" as Formatter, editor: true as Editor },
        { title: "Gender", field: "gender", width: 95, editor: "select" as Editor, editorParams: { values: ["male", "female"] } },
        // { title: "Rating", field: "rating", formatter: "star", hozAlign: "center" as ColumnDefinitionAlign, width: 100, editor: true as Editor },
        // { title: "Color", field: "col", width: 130, editor: "input" as Editor },
        // { title: "Date Of Birth", field: "dob", width: 130, sorter: "date", hozAlign: "center" },
        // { title: "Driver", field: "car", width: 90, hozAlign: "center", formatter: "tickCross", sorter: "boolean", editor: true as Editor },
    ],
};

@Component({
    selector: 'app-hello-tabulator',
    template: `
    <app-ng-tabulator #demoTabulator [tabledef]="tableDef" elementId="tabulator-1"></app-ng-tabulator>
    `,
})
export class HelloTabulatorComponent {
    title = 'Hello Tabulator';
    tableDef = {
        selector: '1st', label: 'Tabulator 1', options: tabulator_demo_options
    };
}
