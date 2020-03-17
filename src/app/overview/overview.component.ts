import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  /**
   * object type variable overview
   */

  overview = {
    name: "Sakibul Islam",
    address: "Mirpur 12",
    city: "Dhaka, Bangladesh",
    contact: "+880 167 317 3921",
    email:"sakibulislam2241@gmail.com" 
  };

  /**
   * simple variable profile
   */

  profile = "Enterprise Application Developer having 2 years of extensive experience in Java (J2SE/J2EE, Java based framework), ERP (Oracle E-Business Suite), Database Designing and Development (Oracle 11g, SQL, PL/SQL), Data Analysis, Reporting and Visualization (Jasper Reports, Oracle Reports), familiar with different software development technologies like MVC, ORM. Engineering graduate in Computer Science from BRAC University, Bangladesh. Accomplished 5+ projects under several professors from country and abroad. Skilled in techno-functional activities like programming skills, problem-solving ability, requirement analysis, designing and development and able to adopt new technologies quickly.";
  constructor() { }

  ngOnInit(): void {
  }

}
