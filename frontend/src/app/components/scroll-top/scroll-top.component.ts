import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
    faLongArrowAltUp = faLongArrowAltUp;
    windowScrolled: boolean = false;
    buttonHovered: boolean = false;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    @HostListener("window:scroll", [])
    onWindowScroll() {

        if (window.pageYOffset >= 600) {
            this.windowScrolled = true;
        } else {
            this.windowScrolled = false;
        }
    }
    
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    ngOnInit() {}
}


