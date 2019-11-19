import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  p: number;
  r: number;
  n: number;
  transform(amount: number, rate: number, total: number): number {
    this.p = amount;
    this.r = rate / (12 * 100);
    this.n = total * 12;
    var mon = (this.p * this.r * Math.pow(1 + this.r, this.n)) / (Math.pow(1 + this.r, this.n) - 1);
    return mon;
  }
}