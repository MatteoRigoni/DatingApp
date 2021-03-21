import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-merber-detail',
  templateUrl: './merber-detail.component.html',
  styleUrls: ['./merber-detail.component.css']
})
export class MerberDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private memberService : MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lodaMember();

    this.galleryOptions = [
      {
        width: '500px',
        height: '400px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];
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
      this.galleryImages = this.getImages();
    })
  }
}
