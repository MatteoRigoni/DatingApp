import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/_modules/member';

@Component({
  selector: 'app-merber-list',
  templateUrl: './merber-list.component.html',
  styleUrls: ['./merber-list.component.css']
})
export class MerberListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members
    });
  }
}
