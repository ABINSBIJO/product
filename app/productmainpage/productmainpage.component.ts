import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-productmainpage',
  templateUrl: './productmainpage.component.html',
  styleUrls: ['./productmainpage.component.css']
})
export class ProductmainpageComponent implements OnInit {

  
  dataarray:any=[];
  searchproduct:any=[];
  
  constructor (private api:ApicallService){}

  ngOnInit():void
  {
   
   
   
    this.api.fetchdatafromjson().subscribe((data:any)=>{
    
      this.dataarray=Object.values(data)
      console.log(this.dataarray);
     

   
      
    })
  }
  
  search(event:any)
  {
    console.log(event.target.value);
    this.searchproduct=event.target.value;
    console.log(this.searchproduct);
    
  }
}
