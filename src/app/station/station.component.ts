import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup,Validators} from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { StationService } from '../station.service';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  displayedColumns: string[] = ['name','delete'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _StationService : StationService) { }

  stationForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null)
    }
  )
 

  createStation(stationForm:FormGroup)
  {
    if(stationForm.valid)
    {
      this._StationService.create(stationForm.value).subscribe(
         {
           next:(response)=>{
            this.getAllStations()
            console.log(response)
           
          },
           error:()=>console.log("error"),
           complete:()=>console.log("done")
           
           
           
         }
      )
    }
  }

  getAllStations() {
    this._StationService.getAllStations().subscribe(
      {
        next: (res) => {

          this.dataSource = new MatTableDataSource(res)
          // this.tripForm.reset()


        },
        error: (err) => {
          console.log("error")
        }
      }
    )
    
  }

  deleteStation(id: number) {
    this._StationService.deleteStation(id).subscribe(
      {
        next: (res) => {
          this.getAllStations()
          console.log("deleted")
        },
        error: () => { console.log("error deleting") }
      }
    )
  }

  ngOnInit(): void {
    this.getAllStations()
  }

}
