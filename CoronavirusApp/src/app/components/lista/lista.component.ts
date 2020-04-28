import { Component, Input } from '@angular/core';
import { CoronavirusService } from '../../services/coronavirus.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {

  @Input() pais = 'bolivia';
  data: any = [];
  constructor( private coronavirusService: CoronavirusService, private router: Router ) {
    this.obtenerData();
   }

  detalle(position: number) {
    if (this.pais === 'bolivia') {
      this.router.navigateByUrl(`tabs/tab1/detalle/${position}`);
    } else {
      this.router.navigateByUrl(`tabs/tab2/detalle`);
    }
  }

  obtenerData() {
    if (this.pais === 'bolivia') {
      if (this.coronavirusService.dataBolivia.length === 0) {
        this.coronavirusService.getCountry('bolivia').subscribe(resp => {
          this.data = resp;
          this.coronavirusService.dataBolivia = resp;
        });
      } else {
        this.data = this.coronavirusService.dataBolivia;
      }
    } else {
      if (this.coronavirusService.dataCuba.length === 0) {
        this.coronavirusService.getCountry('cuba').subscribe(resp => {
          this.data = resp;
          this.coronavirusService.dataCuba = resp;
        });
      } else {
        this.data = this.coronavirusService.dataCuba;
      }
    }
  }

}
