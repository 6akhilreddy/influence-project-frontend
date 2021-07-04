import { Component, OnInit, ElementRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private spinnerService: SpinnerService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.spinnerService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        setTimeout(() => {
          this.spinner.hide();

          const spinner = document.getElementsByTagName('app-spinner');
          if (spinner.length > 0) {
            Array.from(spinner).forEach(element => {
              const spinnerTag = element.firstChild as HTMLElement;
              const overlayTag: any = element.querySelector('.overlay');
              if (spinnerTag.childElementCount > 0) {
                spinnerTag.removeChild(overlayTag);
              }
            });
          } else {
            const spinnerTag = this.elementRef.nativeElement.firstChild;
            const overlayTag = this.elementRef.nativeElement.firstChild.querySelector('.overlay');
            if (spinnerTag.childElementCount > 0) {
              spinnerTag.removeChild(overlayTag);
            }
          }
        }, 100)
      }
    });
  }

}
