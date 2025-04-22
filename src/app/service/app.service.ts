import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortService } from './port.service';
import { ResultType } from './result_type';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private port: PortService, private http: HttpClient, private router: Router) { }

  public getJwtBearer(): any {
    var getData = localStorage.getItem("info") || '';
    let data = JSON.parse(getData);
    if (data.token == null) {
      return {
        Authorization: `Bearer null`
      };
    } else {
      return {
        Authorization: `Bearer ${data.token}`
      };
    }
  }

  public async checkcatch(e: any) {
    if (e.status == 401) {
      this.router.navigate(["/auth/login"]);
    } else if (e.status == 0 || e.status == 502 || e.status == 504) {
      Swal.fire({
        icon: 'error',
        title: `ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: `statusCode: ${e.status}`,
        text: `${e.message}`
      });
    }
  }

  public async GetPromotionNow(): Promise<PromotionInfo[]> {
    let output = await ResultType.invokeThrow<PromotionInfo[], Error>(
      (onResponse) => {
        this.http.get<PromotionInfo[]>(
          this.port.port + `stock/GetPromotionNow`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetPromotion(active: string, expried: string): Promise<PromotionInfo[]> {
    let output = await ResultType.invokeThrow<PromotionInfo[], Error>(
      (onResponse) => {
        this.http.get<PromotionInfo[]>(
          this.port.port + `stock/GetPromotion/${active}/${expried}`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetOrder(active: string, expried: string): Promise<OrderInfo[]> {
    let output = await ResultType.invokeThrow<OrderInfo[], Error>(
      (onResponse) => {
        this.http.get<OrderInfo[]>(
          this.port.port + `stock/GetOrder/${active}/${expried}`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetOrderNow(): Promise<OrderInfo[]> {
    let output = await ResultType.invokeThrow<OrderInfo[], Error>(
      (onResponse) => {
        this.http.get<OrderInfo[]>(
          this.port.port + `stock/GetOrderNow`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetOrderList(id: string): Promise<OrderListItem[]> {
    let output = await ResultType.invokeThrow<OrderListItem[], Error>(
      (onResponse) => {
        this.http.get<OrderListItem[]>(
          this.port.port + `stock/GetOrderList/${id}`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetPromotionList(id: number): Promise<PromotionListItem[]> {
    let output = await ResultType.invokeThrow<PromotionListItem[], Error>(
      (onResponse) => {
        this.http.get<PromotionListItem[]>(
          this.port.port + `stock/GetPromotionList/${id}`,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetSummary(): Promise<SummalyTotal[]> {
    let output = await ResultType.invokeThrow<SummalyTotal[], Error>(
      (onResponse) => {
        this.http.get<SummalyTotal[]>(
          this.port.port + 'stock/GetSummary',
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetAllSummary(): Promise<SummalyAllTotal[]> {
    let output = await ResultType.invokeThrow<SummalyAllTotal[], Error>(
      (onResponse) => {
        this.http.get<SummalyAllTotal[]>(
          this.port.port + 'stock/GetAllSummary',
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async GetStockInfo(): Promise<StockInfo[]> {
    let output = await ResultType.invokeThrow<StockInfo[], Error>(
      (onResponse) => {
        this.http.get<StockInfo[]>(
          this.port.port + 'stock/GetStockInfo',
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async login(input: login): Promise<UsrRes> {
    // let headers = this.getJwtBearer();
    // headers["ContentType"] = "application/json";
    let output = await ResultType.invokeThrow<UsrRes, Error>(
      (onResponse) => {
        this.http.post<UsrRes>(
          this.port.port + 'authors/login',
          input,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async SetPromotion(input: PromotionReq): Promise<any> {
    // let headers = this.getJwtBearer();
    // headers["ContentType"] = "application/json";
    let output = await ResultType.invokeThrow<any, Error>(
      (onResponse) => {
        this.http.post<any>(
          this.port.port + 'stock/SetPromotion',
          input,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async Tranfer(input: TranReq): Promise<any> {
    // let headers = this.getJwtBearer();
    // headers["ContentType"] = "application/json";
    let output = await ResultType.invokeThrow<any, Error>(
      (onResponse) => {
        this.http.post<any>(
          this.port.port + 'stock/UpdateTranStock',
          input,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

  public async UpdateOrderStock(input: OrderReq): Promise<any> {
    // let headers = this.getJwtBearer();
    // headers["ContentType"] = "application/json";
    let output = await ResultType.invokeThrow<any, Error>(
      (onResponse) => {
        this.http.post<any>(
          this.port.port + 'stock/UpdateOrderStock',
          input,
          {
            // headers
          }
        ).subscribe({
          next(data) {
            onResponse(null, data);
          },
          error(msg) {
            onResponse(msg, null);
          }
        })
      }
    );
    return output;
  }

}




export class ObjectCopier<T> {
  public copyWith(modifyObject: Partial<T>): T {
    return Object.assign(Object.create(this.constructor.prototype), this, modifyObject);
  }
}

export class login extends ObjectCopier<login> {
  constructor(
    public readonly usrcode: string,
    public readonly password: string,
  ) {
    super();
  }
}

export class UsrRes extends ObjectCopier<UsrRes> {
  constructor(
    public readonly id: number,
    public readonly usrcode: string,
    public readonly fristname: string,
    public readonly lastname: string,
    public readonly row: string,
    public readonly update: string
  ) {
    super();
  }
}

export class StockInfo extends ObjectCopier<StockInfo> {
  constructor(
    public readonly id: number,
    public readonly goodname: string,
    public readonly stockonhand0: number,
    public readonly stockonhand1: number,
    public readonly stockonhand2: number,
    public readonly stockonhand3: number,
    public readonly stockonhand4: number,
    public readonly stockonhand5: number,
    public readonly unitprice: number,
    public readonly amou: number
  ) {
    super();
  }
}

export class PromotionInfo extends ObjectCopier<PromotionInfo> {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly active: string,
    public readonly expired: string,
    public readonly totalprice: number
  ) {
    super();
  }
}

export class TranReq extends ObjectCopier<TranReq> {
  constructor(
    public readonly fromstock: string,
    public readonly tostock: string,
    public readonly usrid: string,
    public readonly remark: string,
    public readonly list: ListItemTran[]
  ) {
    super();
  }
}


export class OrderReq extends ObjectCopier<OrderReq> {
  constructor(
    public readonly stock: string,
    public readonly salecode: string,
    public readonly usrid: string,
    public readonly nameaddr: string,
    public readonly sendaddr: string,
    public readonly phoneaddr: string,
    public readonly branch: string,
    public readonly remark: string,
    public readonly timecreate: string,
    public readonly list: ListItemOrder[]
  ) {
    super();
  }
}

export class PromotionReq extends ObjectCopier<PromotionReq> {
  constructor(
    public readonly name: string,
    public readonly active: string,
    public readonly expired: string,
    public readonly totalprice: number,
    public readonly list: ListItemTran[]
  ) {
    super();
  }
}

export class ListItemTran extends ObjectCopier<ListItemTran> {
  constructor(
    public readonly goodid: number,
    public readonly amou: number
  ) {
    super();
  }
}

export class SummalyTotal extends ObjectCopier<SummalyTotal> {
  constructor(
    public readonly year: number,
    public readonly month: number,
    public readonly total_sum: number,
  ) {
    super();
  }
}

export class SummalyAllTotal extends ObjectCopier<SummalyAllTotal> {
  constructor(
    public readonly salesthismonth: number,
    public readonly saleslastmonth: number,
    public readonly totalsales: number,
  ) {
    super();
  }
}

export class ListItemOrder extends ObjectCopier<ListItemOrder> {
  constructor(
    public readonly goodid: number,
    public readonly amou: number,
    public readonly unitprice: number,
    public readonly ispro: string,
  ) {
    super();
  }
}

export class OrderInfo extends ObjectCopier<OrderInfo> {
  constructor(
    public readonly id: number,
    public readonly ordernumb: string,
    public readonly usrid: string,
    public readonly branch: string,
    public readonly timecreate: string,
    public readonly totalprice: number,
    public readonly sale: string,
    public readonly nameaddr: string,
    public readonly phoneaddr: string,
    public readonly remark: string,
  ) {
    super();
  }
}
export class OrderListItem extends ObjectCopier<OrderListItem> {
  constructor(
    public readonly id: number,
    public readonly ordernumb: string,
    public readonly goodid: number,
    public readonly amou: number,
    public readonly productname: string,
    public readonly unitprice: number,
    public readonly ispro: string
  ) {
    super();
  }
}
export class PromotionListItem extends ObjectCopier<PromotionListItem> {
  constructor(
    public readonly id: number,
    public readonly promotionid: number,
    public readonly goodid: number,
    public readonly amou: number,
    public readonly goodname: string,
    public readonly stock: number,
    public readonly name: string
  ) {
    super();
  }
}
