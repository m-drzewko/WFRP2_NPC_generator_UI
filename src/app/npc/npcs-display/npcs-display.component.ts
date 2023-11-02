import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc-service';
import { Npc } from 'src/app/shared/model/npc';

@Component({
    selector: 'app-npcs-display',
    templateUrl: './npcs-display.component.html',
    styleUrls: ['./npcs-display.component.css']
})
export class NpcsDisplayComponent implements OnInit {

    pages: number[] = [];
    currentPage = 1;
    totalPagesOfNpcs = 0;
    @Input() editFlag = false;

    constructor(private npcService: NpcService,
        private httpClient: HttpClient) { }

    ngOnInit() {
        this.npcService.requestPageOfNpcs(this.currentPage).subscribe(
            (data) => {
                console.log(data);
                this.npcService.pageOfNpcs = data.object;
                this.totalPagesOfNpcs = data.pages;
                this.currentPage = 1;
                for (let index = 1; index <= this.totalPagesOfNpcs; index++) {
                    this.pages.push(index);
                    console.log(this.pages);
                }
            }, error => {
                console.log(error);
                // TODO implement displaying error dialog
            }
        );
    }

    changePage(page: number) {
        this.npcService.requestPageOfNpcs(page).subscribe(
            (data) => {
                this.npcService.pageOfNpcs = data.object;
                this.currentPage = page;
                console.log(this.currentPage);
                this.editFlag = false;
            }, error => {
                console.log(error);
            }
        );
    }

    changeFlag(event: any) {
        this.editFlag = true;
    }

}
