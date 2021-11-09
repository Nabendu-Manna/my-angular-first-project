import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})

export class MydataService {


  myDatas: any[] = [
    { 
      name: "Nabendu Manna",
      phone: 9777777777, 
    },
    { 
      name: "abc Manna",
      phone: 9777777777, 
    }
  ];
 ;
  constructor(protected localStorage: LocalStorage) {
    this.localStorage.setItem('myData', this.myDatas).subscribe(() => {}); 
    console.log(this.localStorage.getItem('myData'), 'local data.');

    // this.localStorage.setItem('mydata', this.myDatas).subscribe((data) => {
    //   console.log(localStorage.getItem('mydata'), 'Local');
		// });

    // console.log(localStorage.getItem('myd'), 'Local');

    // this.localStorage.removeItem("myData").subscribe((data) => {});
  }
}
