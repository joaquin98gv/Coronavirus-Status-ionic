import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoronavirusService } from '../../services/coronavirus.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  position: number;
  pais: string;
  fechaData: any = null;
  constructor( private actRouter: ActivatedRoute, private coronavirusService: CoronavirusService ) {

    this.pais = actRouter.snapshot.paramMap.get('pais');
    this.position = Number(actRouter.snapshot.paramMap.get('position'));
    console.log('Pais: ' + this.pais);
    console.log('Posicion: ' + this.position);
    console.log('Bolivia: ' + coronavirusService.dataBolivia);
    console.log('Cuba: ' + coronavirusService.dataCuba);
    if (this.pais === 'bolivia') {
      this.fechaData = coronavirusService.dataBolivia[this.position];
    } else {
      this.fechaData = coronavirusService.dataCuba[this.position];
    }
    console.log(this.fechaData);
   }

  ngOnInit() {
  }

}
