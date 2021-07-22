import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})



export class NoteComponent implements OnInit {

  content:string="";
  messages: Message[] = [];
  constructor(private MessageService: MessageService) { }

  ngOnInit(): void {
    this.getmes();
  }
  getmes(): void {
    const now:string = new Date().toLocaleString().slice(0, 19).replace('上午', ' ').replace('下午',' ').replace('T',' ');
    console.log(now);
    this.MessageService.getMes()
        .subscribe(messages => this.messages = messages);
  }
  addmes(): void{
    this.MessageService.addMes(this.content);
  }
}
