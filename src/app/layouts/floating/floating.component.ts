import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css'],
})
export class FloatingComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      // Kiểm tra vị trí cuộn của trang, hiển thị nút khi cuộn xuống dưới 200px
      if (window.scrollY > 200) {
        scrollTopBtn.classList.remove('d-none');
      } else {
        scrollTopBtn.classList.add('d-none');
      }
    }
  }

  // Xử lý sự kiện click để cuộn trang lên đầu
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
