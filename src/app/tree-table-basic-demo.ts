import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@service/nodeservice';
@Component({
    selector: 'tree-table-basic-demo',
    templateUrl: './tree-table-basic-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [NodeService]
})
export class TreeTableBasicDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getTreeNodes().then((files) => (this.files = files));
    }
}