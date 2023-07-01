import { InterfaceQuestion } from '@/app/core/interfaces/interface-question';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestQuestionService } from '@/app/shared/services/api/test-question.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe]
})
export class ListarComponent {

  question: InterfaceQuestion[] = [];
  public search: string = '';

  constructor(
    private questionService: TestQuestionService,
    public filterTable: FilterTablesPipe,
    private router: Router
  ){}

  ngOnInit():void{
    this.questionService.getAllQuestion().subscribe(
      res => {
        const { message, data } = res;
        this.question = data;
        console.log(message)
      }
    )
  }

  delete(id:any){
    this.questionService.deleteQuestion(id).subscribe(
      res => {
        const { message } = res;
        console.log(message)
        this.ngOnInit();
      }, err => {
        console.log(err)
      }
    )
  }

}
