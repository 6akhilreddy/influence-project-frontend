import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {

  private showSpinner = new Subject();
    getData() {
        return this.showSpinner;
    }
    show() {
        this.showSpinner.next(true);
    }
    hide() {
        this.showSpinner.next(false);
    }
}
