import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-disenho-alex',
  templateUrl: './disenho-alex.component.html',
  styleUrls: ['./disenho-alex.component.css']
})
export class DisenhoAlexComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/1doFWu4rRvE';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit(): void {
  }

}
