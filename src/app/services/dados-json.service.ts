import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosJsonService {

  private Json1: any[];
  private array: number[];
  constructor() { }

  getJson1(): any[] {
    const repeticoes = this.randomIntFromInterval(5, 40);
    for (let i = 0; i <= repeticoes; i++) {
      this.Json1.push({ ano: this.randomIntFromInterval(2000, 2020), resultado: this.randomIntFromInterval(100, 10000) });
    }
    return this.Json1;
  }

  getArray(): number[]{
    this.array = [];
    const repeticoes = this.randomIntFromInterval(5, 40);
    // console.log({repeticoes});
    for (let i = 0; i <= repeticoes; i++) {
      this.array.push(this.randomIntFromInterval(1, 30));
    }
    return this.array;
  }

  randomIntFromInterval(min: number, max: number): number {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    if (result < min) {
      // console.log({min});
      result = min;
    }
    else if (result > max) {
      // console.log({max});
      result = max;
    }
    // console.log({result});
    return result;
  }



}
