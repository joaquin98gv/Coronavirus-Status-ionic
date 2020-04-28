import { Component, Input, OnInit } from '@angular/core';
import { CoronavirusService } from '../../services/coronavirus.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  loading = this.loadingController.create({
    message: 'Por favor espere...'
  });

  @Input() esBolivia = true;
  data: any = [];
  constructor(private coronavirusService: CoronavirusService, private router: Router, public loadingController: LoadingController ) {
   }

  ngOnInit() {
    // this.loading.then(x => x.present());
    this.obtenerData();
    // this.loading.then(x => x.dismiss());
  }

  detalle(position: number) {
    if (this.esBolivia) {
      this.router.navigate(['tabs/tab1/detalle', 'bolivia', position]);
    } else {
      this.router.navigate(['tabs/tab3/detalle', 'cuba', position]);
    }
  }

  obtenerData() {
    if (this.esBolivia) {
      if (this.coronavirusService.dataBolivia.length === 0) {
        this.coronavirusService.getCountry('bolivia').subscribe((resp: any[]) => {
          this.data = resp;
          this.data = this.data.reverse();
          this.coronavirusService.dataBolivia = this.data;
        });
      } else {
        this.data = this.coronavirusService.dataBolivia;
      }
    } else {
      if (this.coronavirusService.dataCuba.length === 0) {
        this.coronavirusService.getCountry('cuba').subscribe((resp: any[]) => {
          this.data = resp;
          this.data = this.data.reverse();
          this.coronavirusService.dataCuba = this.data;
        });
      } else {
        this.data = this.coronavirusService.dataCuba;
      }
    }
  }

}
