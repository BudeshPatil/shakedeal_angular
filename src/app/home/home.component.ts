import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name:any;
  users:any =  [];
  teams:any = [];
  seleteduser:any;
  selectedteam:any;
  constructor(public dataservie:DataService) {
    this.getUsers();
    this.getTeams();
   }

  ngOnInit(): void {
  }

  getUsers(){
    let obj = {};
    this.dataservie.getAlluser(obj).subscribe(data=>{
      if(data){
        this.users = data;
      }
    })
  }

  getTeams(){
    let obj = {};
    this.dataservie.getAllteams(obj).subscribe(data=>{
      if(data){
        this.teams = data;
      }
    })
  }

  selecteUser(event:any){
    let result = this.teams.filter((item:any)=> item==event.target.value);
    if(result){
      this.selectedteam = result[0];
    }
  }

  selecteTeam(event:any){
    let result = this.users.filter((item:any)=> item==event.target.value);
    if(result){
      this.seleteduser = result[0];
    }
  }

  assignTask(){
    let obj = {
      name:'task',
      team: this.selectedteam._id,
      user: this.seleteduser._id,
    };
    this.dataservie.assignTask(obj).subscribe(data=>{
      if(data){
        this.teams = data;
      }
    })
  }
}
