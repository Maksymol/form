import { Component } from '@angular/core';
import { Feedback } from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})


export class FeedbackComponent {
  feedback: Feedback = new Feedback('', '', '', 1, '');
  feedback2: Feedback = new Feedback('', '', '', 1, '');
  feedback3: Feedback = new Feedback('', '', '', 1, '');
  feedback4: Feedback = new Feedback('', '', '', 1, '');
  feedback5: Feedback = new Feedback('', '', '', 1, '');
  feedback6: Feedback = new Feedback('', '', '', 1, '');
  feedback7: Feedback = new Feedback('', '', '', 1, '');
  feedback8: Feedback = new Feedback('', '', '', 1, '');
  feedback9: Feedback = new Feedback('', '', '', 1, '');
  feedback10: Feedback = new Feedback('', '', '', 1, '');
  submitFeedback() {
    // Отримайте дані відгуку зі змінної feedback та обробте їх, наприклад, відправте на сервер або виведіть у консоль.
    console.log(this.feedback);
  }
}
