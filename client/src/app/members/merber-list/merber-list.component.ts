import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merber-list',
  templateUrl: './merber-list.component.html',
  styleUrls: ['./merber-list.component.css']
})
export class MerberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }
}
