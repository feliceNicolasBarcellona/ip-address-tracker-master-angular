import { Component, Input } from '@angular/core';
import { IPInfo } from 'src/app/model/ip-info';

@Component({
  selector: 'app-coords-details',
  templateUrl: './coords-details.component.html',
  styleUrls: ['./coords-details.component.css']
})
export class CoordsDetailsComponent {
  @Input() result: IPInfo | null = null
  @Input() error: string | null = null
}
