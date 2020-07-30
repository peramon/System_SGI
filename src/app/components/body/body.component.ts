import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Chart } from 'node_modules/chart.js';
import { faClipboardList, faCheckCircle, faHandHolding, faHammer } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    stats: any;
    requestedCount: any;
    borrowedCount: any;
    lab: any;

    chart1: Chart;
    chart2: Chart;

    // icons
    stat1 = faClipboardList;
    stat2 = faCheckCircle;
    stat3 = faHandHolding;
    stat4 = faHammer;

    constructor(private itemsService: ItemsService) {
    }
    ngOnInit(): void {
        this.lab = JSON.parse(localStorage.getItem('lab'));
        this.getStats();
    }

    async getStats() {
        this.stats = await this.itemsService.getStats(this.lab.id);
        this.requestedCount = await this.itemsService.getRequestedCount(this.lab.id);
        this.borrowedCount = await this.itemsService.getBorrowedCount(this.lab.id);
        this.initChart();

    }

    async initChart() {
        let cLabels1 = [];
        let cData1 = [];
        let cLabels2 = [];
        let cData2 = [];

        this.requestedCount.forEach(e => {
            const { name, times } = e;
            cLabels1.push(name);
            cData1.push(times);
        });

        this.borrowedCount.forEach(e => {
            const { name, times } = e;
            cLabels2.push(name);
            cData2.push(times);
        });
        this.chart1 = new Chart('chart1', {
            type: 'bar',
            data: {
                labels: cLabels1,
                datasets: [{
                    label: '# de veces pedidas',
                    data: cData1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    barPercentage: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        this.chart2 = new Chart('chart2', {
            type: 'doughnut',
            data: {
                labels: cLabels2,
                datasets: [{
                    data: cData2,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        });
    }
}