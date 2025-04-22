import { Component, OnInit } from '@angular/core';
import { ChartOptions, RevenueGrowth } from '../../../../shared/data/dashboard/online-course/online-course-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { ApiService, SummalyAllTotal, SummalyTotal } from '../../../../service/app.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revenue-growth',
  imports: [NgApexchartsModule, ClickOutsideDirective, FormsModule, CommonModule],
  templateUrl: './revenue-growth.component.html',
  styleUrls: ['./revenue-growth.component.scss']
})
export class RevenueGrowthComponent implements OnInit {
  public isopen: boolean = false;
  public revenugrowth = JSON.parse(JSON.stringify(datacart)); // clone template chart config this.revenugrowth = JSON.parse(JSON.stringify(datacart));
  data: SummalyTotal[] = [];
  datatotal: SummalyAllTotal[] = [];
  now: number = 0;
  total: number = 0;
  last: number = 0;

  constructor(private service: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.data = await this.service.GetSummary();
    this.datatotal = await this.service.GetAllSummary();
    this.loadChartFromSummary();
  }

  loadChartFromSummary() {
    const monthlyData = new Array(12).fill(0);

    this.data.forEach((item) => {
      monthlyData[item.month - 1] = item.total_sum;
    });

    this.revenugrowth.series = [
      {
        name: 'Online Sale',
        data: monthlyData
      }
    ];
  }

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }
}

export const datacart: ChartOptions | any = {
  series: [
    {
      name: 'Online Sale',
      data: [] // default เป็นค่าว่าง รอโหลดจาก API
    }
  ],
  colors: ['var(--theme-deafult)'],
  chart: {
    type: 'area',
    height: 315,
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
  },
  fill: {
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  markers: {
    discrete: [], // ถ้าอยากเพิ่มจุด marker ทีหลังก็ทำได้
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'stepline',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: ['var(--chart-border)'],
    xaxis: {
      lines: {
        show: true,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: new Array(12).fill('var(--body-font-color)'),
      }
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--body-font-color)'],
      },
      formatter: (value: string) => `${value}`,
    },
  },
  tooltip: {
    y: {
      formatter: function (value: number) {
        return `$${value}`;
      }
    }
  },
  responsive: [
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 250
        }
      }
    }
  ],
};
