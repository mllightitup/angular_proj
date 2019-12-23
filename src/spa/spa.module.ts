import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule, SpaModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
})
export class SpaModule {}