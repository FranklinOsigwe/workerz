import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsId?: number;
  productsName: string = '';
  categoryName: string = '';
  pageNumber: number = 1;
  pageSize: number = 10;
  sortBy: string = 'productName';
  sortOrder: string = 'asc';

  productList: any = []
  getTotalList: any = []
  totalRecords: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.onSearch();
    this.getTotal();
  }

  getTotal(){
    this.http.get('https://projectapi.gerasim.in/api/Prducts/getTotalProducts').subscribe((res: any) => {
      console.log(res);
      this.getTotalList = res;
    })
  }

  onSearch() {
    debugger;
    let params = new HttpParams()
      .set('pageNumber', this.pageNumber.toString())
      .set('pageSize', this.pageSize.toString())
      .set('sortBy', this.sortBy)
      .set('sortOrder', this.sortOrder);

    if (this.productsId) {
      params = params.set('productsId', this.productsId.toString());
    }
    if (this.productsName) {
      params = params.set('shortName', this.productsName); 
    }
    if (this.categoryName) {
      params = params.set('category', this.categoryName);
    }

    this.http.get('https://projectapi.gerasim.in/api/Products', { params }).subscribe((res: any) => {
    this.productList = res;
})
    
}

onEdit(product: any) {
  this.productsId = product.productsId;
  this.productsName = product.productsName;
  this.categoryName = product.categoryName;
}

onDelete(product: any) {
  console.log(product);
}

onPageSizeChange(event: any) {
  this.pageSize = event.target.value;
  this.onSearch();

}

getPageNumber(){
  const totalPages = Math.ceil(this.totalRecords / this.pageSize);
  return Array(totalPages).fill(0).map((x, i) => i + 1);
}

onPageChange(pageNo:number){
this.pageNumber = pageNo;  this.onSearch();

}

onSort(fieldName:any){
this.sortBy = fieldName;
this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
this.onSearch();
}

getValue(){
  return Math.ceil(this.totalRecords/ this.pageSize);
}
}