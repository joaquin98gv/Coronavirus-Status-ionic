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
  fechaData: any;
  constructor( private actRouter: ActivatedRoute, private coronavirusService: CoronavirusService ) {

    this.position = Number(actRouter.snapshot.paramMap.get('position'));
    this.fechaData = coronavirusService.dataBolivia[this.position];
   }

  ngOnInit() {
  }

}
