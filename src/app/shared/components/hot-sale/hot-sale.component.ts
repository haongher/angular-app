import { Component } from '@angular/core';

@Component({
  selector: 'app-hot-sale',
  templateUrl: './hot-sale.component.html',
  styleUrls: ['./hot-sale.component.css'],
})
export class HotSaleComponent {
  products = [
    {
      name: 'iPhone 12 64GB - Chính hãng VN/A - MGJ73VN/A',
      image: 'assets/images/iphone12.png',
      oldPrice: 24990000,
      newPrice: 14790000,
      discount: 41,
      warranty: 12,
      sold: 132,
      note: 'Giảm trực tiếp 40%, tối đa 600.000 VNĐ khi mở thẻ TP Bank EVO.',
    },
    {
      name: 'iPhone 14 Pro Max 512GB - Chính hãng VN/A',
      image: 'assets/images/iphone14promax.png',
      oldPrice: 43900000,
      newPrice: 35790000,
      discount: 19,
      warranty: 24,
      sold: 254,
      note: 'Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.',
    },
    {
      name: 'iPhone 14 Pro Max 128GB - Chính hãng VN/A',
      image: 'assets/images/iphone14promax128.png',
      oldPrice: 34900000,
      newPrice: 26890000,
      discount: 23,
      warranty: 24,
      sold: 196,
      note: 'Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.',
    },
    {
      name: 'iPhone 14 Plus 512GB - Chính hãng VN/A',
      image: 'assets/images/iphone14plus.png',
      oldPrice: 36900000,
      newPrice: 29990000,
      discount: 19,
      warranty: 24,
      sold: 68,
      note: 'Giảm 250.000đ khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.',
    },
  ];
}
