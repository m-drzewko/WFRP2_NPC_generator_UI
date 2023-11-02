import { Component, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc-service';
import { Npc } from 'src/app/shared/model/npc';

@Component({
    selector: 'app-npc-edit',
    templateUrl: './npc-edit.component.html',
    styleUrls: ['./npc-edit.component.css']
})
export class NpcEditComponent implements OnInit {

    npcToEdit!: Npc;

    constructor(private npcService: NpcService) { }

    ngOnInit() {
        this.npcService.getSelectedNpc().subscribe((data) => {
            this.npcToEdit = data;
        });
    }

}
