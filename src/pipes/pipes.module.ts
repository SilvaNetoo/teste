import { NgModule } from '@angular/core';
import { MaxLengthPipe } from './max-length/max-length';
import { ValuePipe } from './value/value';
@NgModule({
    declarations: [MaxLengthPipe,
        ValuePipe],
    imports: [],
    exports: [MaxLengthPipe,
        ValuePipe]
})
export class PipesModule { }
