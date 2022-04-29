import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List } from 'immutable';
import { Subscription } from 'rxjs';
import { Trajet } from 'src/app/core/models';
import { Bus } from 'src/app/core/models/bus.model';
import { TrajetService } from 'src/app/core/services';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-step-travel',
  templateUrl: './step-travel.component.html',
  styleUrls: ['./step-travel.component.scss']
})
export class StepTravelComponent implements OnInit, OnDestroy {

  busList: List<Bus>;
  trajets: List<Trajet>;  

  travelFormGroup: FormGroup;
  disableValiderPanierButton: boolean;
  subscriptions = new Subscription();

  constructor(private _formBuilder: FormBuilder,
    private panierService: PanierService,
    private trajetService: TrajetService) { }

  ngOnInit(): void {
    this.travelFormGroup = this._formBuilder.group({
      travelCtrl: ['', ]
    })
    this.subscriptions.add(this.panierService.itemsPanier$.subscribe(items => {
      this.disableValiderPanierButton = items.isEmpty();
    }));
    this.subscriptions.add(this.trajetService.getAllBus().subscribe(busList => this.busList = busList));
  }

  public onAddTrajet(trajet: Trajet) {
    this.panierService.addTrajet(trajet);
  }

  public onChangeBusSelection(busId: number): void {
    console.log("budId change : ", busId);
    this.subscriptions.add(this.trajetService.getAllByBusId(busId).subscribe(
      (trajets: List<Trajet>) => this.trajets = trajets));
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
