import { Component, Input } from '@angular/core';
import { Npc } from 'src/app/shared/model/npc';

@Component({
    selector: 'app-npc-list-item',
    templateUrl: './npc-list-item.component.html',
    styleUrls: ['./npc-list-item.component.css']
})
export class NpcListItemComponent {

    @Input() npc!: Npc;
    @Input() index!: number;


}
