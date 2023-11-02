import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { NpcService } from 'src/app/services/npc-service';
import { Npc } from 'src/app/shared/model/npc';

@Component({
    selector: 'app-npc-list',
    templateUrl: './npc-list.component.html',
    styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit, DoCheck {

    @Output() emitter = new EventEmitter();

    pageOfNpcs: Npc[] = [];

    constructor(private npcService: NpcService) { }

    ngOnInit(): void {
        this.pageOfNpcs = this.npcService.pageOfNpcs;
    }

    ngDoCheck(): void {
        this.pageOfNpcs = this.npcService.pageOfNpcs;
    }

    onClick(index: number) {
        console.log("click: " + index);
        this.npcService.setSelectedNpc(index);
        this.emitter.emit(true);
    }

}
