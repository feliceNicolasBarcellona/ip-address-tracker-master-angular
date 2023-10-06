import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coords-details',
  templateUrl: './coords-details.component.html',
  styleUrls: ['./coords-details.component.css']
})
export class CoordsDetailsComponent {
  @Input() label: string | null = null
  @Input() value: any | null = null
}
