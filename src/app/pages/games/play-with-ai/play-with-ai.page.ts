import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Words } from 'src/app/services/data.service';

@Component({
  selector: 'app-play-with-ai',
  templateUrl: './play-with-ai.page.html',
  styleUrls: ['./play-with-ai.page.scss'],
})
export class PlayWithAIPage implements OnInit {
  ishidden = true;
  question;
  answer;
  word;
  randomIdQuestion;
  sizeOfData;
  answersData = [
    { id: '1', answer: 'Item 1', correct: 'False' },
    { id: '2', answer: 'Item 2', correct: 'False' },
    { id: '3', answer: 'Item 3', correct: 'False' },
    { id: '4', answer: 'Item 4', correct: 'False' },
  ];

  constructor(private route: Router, private dataService: DataService) {

  }
  ngOnInit() {
    this.newGame();
  }

  back() {
    this.route.navigate(['/home']);
  }

  newQuestion(id: any) {
    this.dataService.getWordsById(id).subscribe((res) => {
      this.word = res.title;
      this.answer = res.meaning;
      this.answersData[0].answer = this.answer;
      this.answersData[0].correct = 'True';
      this.question = 'ما هو معنى كلمة ' + ' - ' + this.word;
    });
  }

  getRandomChosess(id: any, size: any) {
    for (let i = 1; i <= 3; i++) {
      const random = Math.floor(Math.random() * size) + 1;
      if (random === id) {
        i--;
        continue;
      }
      this.dataService.getWordsById(random).subscribe((res) => {
        this.answersData[i].answer = res.meaning;
      });
    }
  }
  newGame() {
    this.dataService.getWords().subscribe((res) => {
      this.sizeOfData = res.length;
      console.log(res.length);
      this.randomIdQuestion = Math.floor(Math.random() * res.length) + 1;
      this.newQuestion(this.randomIdQuestion);
      this.getRandomChosess(this.randomIdQuestion, this.sizeOfData);
    });
  }

  check(index: any) {
    if (this.answersData[index].correct.startsWith('True')) {
      this.ishidden = true;
      this.newGame();
    } else {
      this.ishidden = false;
    }
  }
}
