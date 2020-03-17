import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations = [
    {
        degree: "Bachelor of Science",
        institute: "BRAC University (Dhaka, Bangladesh)",
        subject: "Computer Science & Engineering",
        start: "Jan 2013",
        end: "Dec 2017",
    },
    {
      degree: "Higher Secondary Certificate",
      institute: "Notre Dame College (Dhaka, Bangladesh)",
      subject: "Science",
      start: "Jan 2010",
      end: "Dec 2012",
    },
    {
      degree: "Secondary School Certificate",
      institute: "Dhaka Residential Model College (Dhaka, Bangladesh)",
      subject: "Science",
      start: "Jan 2002",
      end: "Dec 2009",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
