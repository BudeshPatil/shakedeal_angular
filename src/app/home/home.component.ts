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
  tasks:any = [];
  seleteduser:any;
  selectedteam:any;
  user:any = {
    name:'',
    email:''
  };
  isUserSave = false;
  team:any = {
    name:'',
    user_1:'',
    user_2:''
  };
  isTeamSave = false;
  constructor(public dataservie:DataService) {
    this.getUsers();
    this.getTeams();
    this.getallTasks();
   }

  ngOnInit(): void {
  }

  saveUser(){
    if(this.user.name && this.user.email){
      let obj = {
        name:this.user.name,
        email:this.user.email
      };
      this.dataservie.saveUser(obj).subscribe(data=>{
        if(data){
          this.user.name = '';
          this.user.email = '';
          this.isUserSave = true;
          this.getUsers();
        }
      })
    }
  }

  saveTeam(){
    if(this.team.user_1 && this.team.user_2){
      let obj = {
        name:this.team.name,
        user_1:this.team.user_1,
        user_2:this.team.user_2
      };
      this.dataservie.saveTeam(obj).subscribe(data=>{
        if(data){
          this.team.name = '';
          this.team.user_1 = '';
          this.team.user_2 = '';
          this.isTeamSave = true;
          this.getTeams();
        }
      })
    }
  }



  getUsers(){
    let obj = {};
    this.dataservie.getAlluser(obj).subscribe(data=>{
      if(data){
        this.users = data.result;
      }
    })
  }

  getTeams(){
    let obj = {};
    this.dataservie.getAllteams(obj).subscribe(data=>{
      if(data){
        this.teams = data.result;
      }
    })
  }

  selecteUser(event:any,user:any){
    if(user == 'user1'){
      let result = this.users.filter((item:any)=> item.username == event.target.value);
      if(result){
        this.team.user_1 = result[0].username;
      }
    } else {
      let result = this.users.filter((item:any)=> item.username == event.target.value);
      if(result){
        this.team.user_2 = result[0].username;
      }
    }
    
  }

  selecteTeam(event:any){
    let result = this.teams.filter((item:any)=> item.name == event.target.value);
    if(result){
      this.selectedteam = result[0].name;
    }
  }

  assignTask(){
    let obj = {
      team: this.selectedteam
    };
    this.dataservie.assignTask(obj).subscribe(data=>{
      if(data){
        this.getallTasks()
      }
    })
  }

  getallTasks(){
    let obj = {};
    this.dataservie.getAllTask(obj).subscribe(data=>{
      if(data){
        this.tasks = data.result;
      }
    })
  }
}
