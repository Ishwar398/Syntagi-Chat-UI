import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiKey = 'YOUR_API_KEY';
  constructor(private httpClient: HttpClient) { }

  public getAppointmentDetails()
  {
    return this.httpClient.get(`http://13.127.133.104:8082/syntagi/appointments/getById?id=5dd3d399ce6ceb0fc1f759ff`);
  }
}
