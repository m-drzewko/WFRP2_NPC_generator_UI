import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc-service';
import { Npc } from 'src/app/shared/model/npc';

@Component({
    selector: 'app-npc-list',
    templateUrl: './npc-list.component.html',
    styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit, DoCheck {

    pageOfNpcs: Npc[] = [];

    constructor(private npcService: NpcService) { }

    ngOnInit(): void {
        this.pageOfNpcs = this.npcService.pageOfNpcs;
    }

    ngDoCheck(): void {
        this.pageOfNpcs = this.npcService.pageOfNpcs;
    }

}
