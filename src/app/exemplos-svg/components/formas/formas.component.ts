import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DadosJsonService } from '../../../services/dados-json.service';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {

  constructor(private dadosJsonService: DadosJsonService) { }

  ngOnInit(): void {
    this.gerarFormas();
  }

  gerarFormas(): void {

    /** Exercício 1
     * ! 1. Gere uma variável que vai conter o elemento de escrita do svg
     * ! 1.a preste atenção nas dimenões, que podem ser utilziadas posteriormente para melhorar a estética.
     * ! 1.b Talvez seja o caso de armazená-las em uma variável.
     */
    const svg = d3.select('#chartarea1').append('svg')
      .attr('width', 300)
      .attr('height', 300);

    // ! 2. Insira uma forma (nesse caso circle)
    svg.append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 100)
      .attr('fill', 'blue');

    /** Exercício 2
     * ! Inserir formas para um array
     */
    // ! 0. pegar um conjunto de dados aleatório.
    let data = this.dadosJsonService.getArray();

    // ! 1. Gerar variável svg para conter a tag

    console.log({ data });
    const svg2 = d3.select('#chartarea2').append('svg')
      .attr('width', 3000)
      .attr('height', 400);

    // ! 2. Utilizar o selectAll e vincular dados ao elemento svg
    let circles = svg2.selectAll('circle')
      .data(data);

    // ! 3. Usar o método Enter para "entrar" dados no conjunto para cada entrada mencioanda anteriormente
    circles.enter().append('circle')
      .attr('cx', (d, i) => (i * 50) + 50)
      .attr('cy', 250)
      .attr('r', (d) => d)
      .attr('fill', 'red');

    // ! 4. alterar o conjunto de dados.
    let count = 0;
    const funcao = () => {
      count++;
      console.log('Time interval will '
        + 'stop when count is greater 5'
        + 'current count: ', count);
      data = this.dadosJsonService.getArray();
      circles = svg2.selectAll('circle')
        .data(data);
      console.log(circles.exit().remove());
      circles.exit().remove();
      circles.enter().append('circle')
        .attr('cx', (d, i) => (i * 50) + 50)
        .attr('cy', 250)
        .attr('r', (d) => d)
        .attr('fill', 'red');
      if (count > 5) { timer.stop(); }
    };
    const timer = d3.interval(() => {
      funcao();
    }, 1000);


  }

}
