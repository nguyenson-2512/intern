import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  detailInfo = {
    productName: 'IPhone',
    description: 'the best smart phone',
    tags: ['money', 'luxury', 'battery'],
    fee: 1111,
    numsOfDownload: 22,
    rate: 4,
    createTime: '10:23 23/12/2200',
    content: 'Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, coLoit amet, corem ipsum dolor sit amet, conLorem ipsum dolor sit amet, coLoit amet, corem ipsum dolor sit amet, conLorem ipsum dolor sit amet, coLoit amet, corem ipsum dolor sit amet, conLorem ipsum dolor sit amet, coLoit amet, co'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
