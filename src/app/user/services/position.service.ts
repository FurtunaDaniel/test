import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

// keep an empty line between third party imports and application imports
// The empty line separates your stuff from their stuff. Style 03-06
import { ApiService } from '../../core/services/api.service';
@Injectable()
export class PositionService {
	constructor(private apiService: ApiService) {}

	getPositions(): Observable<any> {
		return this.apiService
			.getAll(`/positions`)
			.pipe(map(data => data.items));
	}
}
