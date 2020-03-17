import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      position: "Executive, Enterprise Application, Information & Technology",
      institute: "M&J Group",
      address: "Dhaka, Bangladesh",
      start: "July 2018",
      end: "",
      website: "https://www.mj-group.com/",
    },
    {
      position: "Intern, Enterprise Application, Information & Technology",
      institute: "M & J Group",
      address: "Dhaka, Bangladesh",
      start: "Mar 2018",
      end: "June 2018",
      website: "https://www.mj-group.com/",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
