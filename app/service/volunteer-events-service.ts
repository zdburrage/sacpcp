import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {VolunteerEvent} from '../model/volunteer-event';

@Injectable()
export class VolunteerEventsService {
    constructor(private http: Http) { 
    }
    private commentsUrl = 'backend-mock/events.json';
    getVolunteerEvents() : Observable<VolunteerEvent[]>{
        return this.http.get(this.commentsUrl)
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}