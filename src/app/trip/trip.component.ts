import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { TripService } from '../trip.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private _TripService: TripService, private fb: FormBuilder, private router: Router) { }

  tripForm: FormGroup = new FormGroup(
    {
      startTime: new FormControl(null),
      endTime: new FormControl(null),
      fromStation: new FormControl(null),
      toStation: new FormControl(null)
    }
  )

  Submit(tripForm: FormGroup) {
    
    if (this.submitBtnTitle == "create") {

      this._TripService.create(tripForm.value).subscribe({
        next: (response) => {
          console.log(tripForm)
          this.getAllTrips()

          //this.tripForm.reset()

        },
        error: () => console.log("error"),
        complete: () => console.log("done")

      })

    }

    else if(this.submitBtnTitle =="update")
    {

      console.log(tripForm.value);
      
      this._TripService.updateTrip(tripForm.value, this.tripId).subscribe(
        {
          
          next: (res) => {
            //console.log("this"+tripForm.value);
            //console.log(res);
           

            this.getAllTrips()
            this.submitBtnTitle='create'
            
            }
        }
      )
      


    }


  } 

  submitBtnTitle : string = "create"

  

  ngOnInit(): void {
    this.getAllTrips()
  }


  getAllTrips() {
    this._TripService.getAll().subscribe(
      {
        next: (res) => {

          this.dataSource = new MatTableDataSource(res)
           this.tripForm.reset()


        },
        error: (err) => {
          console.log("error")
        }
      }
    )
  }
  tripId:number=0

  editTrip(data: any, id: number) {

    this.submitBtnTitle="update"
    this.tripId=id
    this.tripForm.controls['startTime'].setValue(data.startTime)
    this.tripForm.controls['endTime'].setValue(data.endTime)
    this.tripForm.controls['fromStation'].setValue(data.fromStation)
    this.tripForm.controls['toStation'].setValue(data.toStation)

    }

  delete(id: number) {
    this._TripService.deleteTrip(id).subscribe(
      {
        next: (res) => {
          this.getAllTrips()
          console.log("deleted")
        },
        error: () => { console.log("error deleting") }
      }
    )
  }
  
  gotoStations() 
  {
    this.router.navigate(['/station'])
  }
}


