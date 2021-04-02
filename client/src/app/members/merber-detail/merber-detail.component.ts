import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { PresencesService } from 'src/app/services/presences.service';

@Component({
  selector: 'app-merber-detail',
  templateUrl: './merber-detail.component.html',
  styleUrls: ['./merber-detail.component.css']
})
export class MerberDetailComponent implements OnInit {
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;
  activeTab: TabDirective;
  messages: Message[] = [];

  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private memberService : MembersService,
      private route: ActivatedRoute,
      private messageService: MessageService,
      public presence: PresencesService) { }

  ngOnInit(): void {
    //this.lodaMember();
    this.route.data.subscribe(data => {
      this.member = data.member;
    });
    this.route.queryParams.subscribe((params) => {
      params.tab ? this.selectTab(params.tab) : this.selectTab(0);
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '400px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = this.getImages();
  }

  getImages() : NgxGalleryImage[] {
    const imageUrls = [];
    for (let index = 0; index < this.member.photos.length; index++) {
      imageUrls.push({
        small: this.member.photos[index].url,
        medium: this.member.photos[index].url,
        large: this.member.photos[index].url
      });
    }

    return imageUrls;
  }

  lodaMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
    })
  }

  selectTab(index: number) {
    this.memberTabs.tabs[index].active = true;
  }

  onTabActivated(data: TabDirective) {
    this.activeTab = data;
    if (this.activeTab.heading === "Messages" && this.messages.length === 0) {
      this.loadMessages();
    }
  }

  loadMessages() {
    this.messageService.getMessageThread(this.member.username).subscribe(messages => {
      this.messages = messages;
    });
  }
}
