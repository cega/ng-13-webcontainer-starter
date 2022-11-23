import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tabulator, GroupRowsModule, FormatModule, EditModule, FilterModule, SortModule } from 'tabulator-tables';
import { TabulatorDef } from './ng-tabulator.interface';

@Component({
    selector: 'app-ng-tabulator',
    template: `<div [attr.id]="elementId"></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgTabulatorComponent {
    @Input()
    tabledef?: TabulatorDef;

    @Input()
    elementId!: string;

    tab = document.createElement('div');

    constructor() { }

    ngAfterViewInit() {
        Tabulator.registerModule(GroupRowsModule);
        Tabulator.registerModule(FormatModule);
        Tabulator.registerModule(EditModule);
        Tabulator.registerModule(FilterModule);
        Tabulator.registerModule(SortModule);
        console.log(this.tabledef, this.elementId);
        const tabContainer = document.getElementById(this.elementId);
        console.log('TabulatorComponent::AfterViewInit', this.elementId, tabContainer);

        if (tabContainer) {
            tabContainer?.appendChild(this.tab);
            this.tabledef!.table = new Tabulator(this.tab, this.tabledef!.options);
        } else {
            console.log(this.tabledef?.table, this.tabledef!.options);
            this.tabledef?.table?.redraw(true);
        }
    }
}
