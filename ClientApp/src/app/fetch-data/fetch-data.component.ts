import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit{
  public forecasts: WeatherForecast[] = [];
  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary', 'actions'];
item: any;
  

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  ngOnInit(): void {
    const forecasts$ =this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast');
    forecasts$.subscribe(result => {
       this.forecasts = result;
       this.forecasts.forEach(forecast => {
         console.log(forecast.date);
         
       
       });
     });
     
   }
   public items: WeatherForecast[] = [];
 DeleteItem(item:WeatherForecast){
  const item$ = this.http.delete<WeatherForecast[]>(this.baseUrl +'weatherforecast' + item.name);
  item$.subscribe(option =>{
    this.items =option;
    this.items.forEach(item =>{
  console.log(item.name);
    })
  })
  
 }
}

interface WeatherForecast {
  name: string;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
