import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm;
  found = false;
  answer='اجابة';
  ishidden = true;
  constructor(private route: Router, private dataService: DataService) {}
  ngOnInit() {}

  back() {
    this.route.navigate(['/home']);
  }

  searchEvent() {
    this.found = false;

    for (let i = 1; i <= 20; i++) {
      this.dataService.getWordsById(i).subscribe((res) => {
        if (res.title === this.searchTerm) {
          this.found = true;
          this.answer = res.meaning;
          this.ishidden = false;
        }
      });
    }
    console.log(this.searchTerm , this.found);
    if ( this.found=== false){
      this.answer = 'الكلمة لا توجد في قاموسنا';
      this.ishidden = false;
    }
  }
}
