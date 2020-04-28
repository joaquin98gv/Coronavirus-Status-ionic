import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoronavirusService } from '../../services/coronavirus.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  constructor( private coronavirusService: CoronavirusService ) {
    coronavirusService.getWorldTotal().subscribe(x => this.data = x);
  }

}
