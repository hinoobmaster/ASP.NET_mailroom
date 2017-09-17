import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
    templateUrl: './attachment.component.html',
    animations: [appModuleAnimation()]
})
export class AttachmentComponent extends AppComponentBase {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }
}