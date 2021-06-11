import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
declare var $: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, AfterViewInit {

  params: any = {
    open: false,
    modalName: '',
    modalBody: '',
    modalTitle: ''
  }

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.confirmSubject.subscribe((params) => {
      console.log(params)
      this.params = params
      if (params.open){
        this.openModal(params)
      }else{
        this.closeModal(params)
      }
    })
  }

  ngAfterViewInit(): void {

  }

  openModal(params: any){
    $(params.modalName).modal('show');
  }

  closeModal(params: any){
    $(params.modalName).modal('hide');
    this.resetparams();
  }

  resetparams(){
    this.params = {
      open: false,
      modalName: '',
      modalBody: '',
      modalTitle: ''
    }
  }

}
