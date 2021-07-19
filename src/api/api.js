import * as d3 from 'd3';
import { transition, event } from 'd3';
import { data } from '../../public/data/graph';
import { tree } from '../../public/data/graph2';

export class ScrollerAPI {
  constructor(width, height) {
    if (width <= 1000) {
      height = 850;
    }

    if (width >= 1400) {
      height = 850;
    }


    if (width <= 400) {
      height = 500;
    }

    // if (height >= 1200) {
    //   height = 1175;
    // }

    this.simulation = undefined;
    this.nodes = undefined;
    this.windowWidth = undefined;
    this.margin = { left: 170, top: 50, bottom: 50, right: 50 };
    this.width = width;
    this.height = height - this.margin.top - this.margin.bottom;
    this.svg = d3
      .select('#vis')
      .append('svg')
      .attr('width', this.width - this.margin.right)
      .attr('height', this.height)
      .attr('opacity', 1)
      .append('g')
      .attr('class', 'everything');

    this.draw1 = this.draw1.bind(this);
    this.draw2 = this.draw2.bind(this);
    this.draw3 = this.draw3.bind(this);
    this.draw4 = this.draw4.bind(this);
    this.currentScreen = 1;
    this.runBlink = false;
  }

  setWidth(width) {
    this.width = width;
    this.svg.select('#vis svg').attr('opacity', 0);
  }

  loadDrawing1() {
    var data = {
      name: 'A1',
      children: [
        {
          name: 'B1',
          children: [
            {
              name: 'C1',
              value: 50,
            },
            {
              name: 'C2',
              value: 300,
            },
            {
              name: 'C3',
              value: 300,
            },
          ],
        },
        {
          name: 'B2',
          value: 200,
          children: [
            { name: 'D3', value: 40 },
            { name: 'D4', value: 40 },
          ],
        },
        {
          name: 'B3',
          value: 300,
        },
        {
          name: 'B4',
          value: 300,
        },
      ],
    };

    var root = d3.hierarchy(data);

    const treeLayout = d3.tree();
    treeLayout.size([this.width - this.margin.right, 300]);
    treeLayout(root);

    // Links
    this.svg
      .append('g')
      .attr('transform', `translate(20,200)`)
      .attr('class', 'tree')
      .append('g')
      .attr('class', 'links')
      .selectAll('line.link')
      .data(root.links())
      .join('line')
      .classed('link', true)
      .attr('d', () => d3.line().curve(d3.curveNatural))
      .attr('x1', function (d) {
        return d.source.x;
      })
      .attr('y1', function (d) {
        return d.source.y;
      })
      .attr('x2', function (d) {
        return d.target.x;
      })
      .attr('y2', function (d) {
        return d.target.y;
      })
      .style('opacity', 0)
      .transition()
      .duration(2000)
      .attr('color', 'black')
      .style('opacity', 0.5);

    // Nodes
    const nodes = this.svg
    .select('g.tree')
    .append('g')
    .attr('class', 'nodes')
    .selectAll('circle.node')
    .data(root.descendants())
    .join('g');


    nodes
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      })
      .append("circle")
      .attr("r", 20)
      .style("fill", "#FFCA28")
      .attr("stroke", "black")
      .style("stroke-width", 2)
      .attr('x', d => d.x)
      .attr('y', d => d.y)


    // const nodes = this.svg
    //   .select('g.tree')
    //   .append('g')
    //   .attr('class', 'nodes')
    //   .selectAll('circle.node')
    //   .data(root.descendants())
    //   .join('g');

    // nodes
    //   .append('circle')
    //   .classed('node', true)
    //   .attr('x', function (d) {
    //     return d.x - 37;
    //   })
    //   .attr('y', function (d) {
    //     return d.y - 5;
    //   })
    //   .attr('r', 4)
    //   .style('opacity', 0)
    //   .transition()
    //   .duration(2000)
    //   .style('opacity', 1);

    nodes
      .append('text')
      .style('fill', 'white')
      .style('opacity', 0)
      .attr('font-size', '14px')
      .attr('font-family', 'Roboto')
      .attr('dy', '0.35em')
      .attr('x', function (d) {
        return d.x - 10;
      })
      .attr('y', function (d) {
        return d.y + 10;
      })
      .attr('color', 'white')
      .text((d) => d.data.name)
  }

  draw1() {
    d3.select('#vis')
      .selectAll('.circle1')
      .transition()
      .duration(200)
      .attr('opacity', 0);

    d3.select('#vis')
      .selectAll('.circle2')
      .transition()
      .duration(200)
      .attr('opacity', 1);

    d3.selectAll('rect.node').style('fill', '#808080');

    function triggerTransitionDelay() {
      d3.selectAll('.atoms circle')
        .transition()
        .duration(200)
        .attr('opacity', 0)
        .delay(function (i) {
          return i.x * 3;
        });

      let mode = 0;
      let start = Date.now();
      let delay = 0.1;

      if (mode === 0) {
        d3.timer(function () {
          var angle = Date.now() - start;
          d3.selectAll('.circleOuter').attr(
            'transform',
            (d) => `rotate(${angle * delay} ,${d.x}, 600)`
          );
          if (mode === 0) {
            return true;
          } else {
            return false;
          }
        });
        mode = 1;
      } else {
        mode = 0;
      }
    }

    triggerTransitionDelay();

    this.runBlink = false;
    this.currentScreen = 1;
  }

  draw2() {
    const reset = () => {
      this.svg.selectAll('.tree').attr('opacity', 1);
      this.svg.selectAll('.treeGraph').attr('opacity', 0);
      this.svg
        .selectAll('.treeCircle')
        .transition()
        .duration(200)
        .attr('opacity', 0);
      this.draw4();
    };

    if (this.currentScreen > 2) {
      reset();
    }

    function triggerTransitionDelay() {
      d3.selectAll('.atoms circle')
        .transition()
        .duration(200)
        .attr('opacity', 0.7)
        .delay(function (i) {
          return i.x * 1;
        });

      let mode = 0;
      let start = Date.now();
      let delay = 0.1;

      if (mode === 0) {
        d3.timer(function () {
          var angle = Date.now() - start;
          d3.selectAll('.circleOuter').attr(
            'transform',
            (d) => `rotate(${angle * delay} ,${d.x}, 600)`
          );
          if (mode === 0) {
            return true;
          } else {
            return false;
          }
        });
        mode = 1;
      } else {
        mode = 0;
      }
    }

    const blink = () => {
      if (this.runBlink) {
        d3.selectAll('.nodes circle')
          .filter((d) => d.data && (d.data.name === 'C2' || d.data.name === 'B2'))
          .transition()
          .duration(500)
          .style('fill', '#FFCA28')
          .transition()
          .duration(500)
          .style('fill', '#e59964')
          .on('end', blink);
      } else {
        d3.selectAll('.nodes circle').style('fill', '#FFCA28');
      }
    };

    const blink2 = () => {
      if (this.runBlink) {
        d3.selectAll('.nodes circle')
          .filter((d) => d.data && d.data.name === 'D3')
          .transition()
          .delay(1000)
          .duration(500)
          .style('fill', '#FFCA28')
          .transition()
          .duration(500)
          .style('fill', '#051522')
          .on('end', blink2);
      } else {
        d3.selectAll('.nodes circle').style('fill', '#FFCA28');
      }
    };

    triggerTransitionDelay();
    this.runBlink = true;
    blink();
    blink2();

    this.currentScreen = 2;
  }

  draw3() {
    const canvas = d3.selectAll('.everything');
    let p0 = [this.width / 2, 425, 850];
    let p1 = [this.width / 6 + 20, 600, 120];

    const center = [this.width / 2, this.height / 2];
    const i = d3.interpolateZoom(p0, p1);

    const transform = (p) => {
      var k = this.height / p[2];
      return (
        'translate(' +
        (center[0] - p[0] * k) +
        ',' +
        (center[1] - p[1] * k) +
        ')scale(' +
        k +
        ')'
      );
    };

    canvas
      .attr('transform', transform(p0))
      .transition()
      .delay(100)
      .duration(i.duration * 0.5)
      .attrTween('transform', function () {
        return function (t) {
          return transform(i(t));
        };
      })
      .on('end', () => {
        this.svg
          .selectAll('.treeCircle')
          .transition()
          .duration(200)
          .attr('opacity', 1);

        this.svg
          .selectAll('.atoms circle')
          .transition()
          .duration(200)
          .attr('opacity', 0);

        // this.svg
        //   .selectAll('.tree')
        //   .attr('transform', 'translate(0,350)')
      });

    this.currentScreen = 3;
  }

  draw4() {
    const canvas = d3.selectAll('.everything');
    let p1 = [this.width / 2, 425, 850];
    let p0 = [this.width / 6 + 20, 600, 120];

    const center = [this.width / 2, this.height / 2];
    const i = d3.interpolateZoom(p0, p1);

    const transform = (p) => {
      var k = this.height / p[2];
      return (
        'translate(' +
        (center[0] - p[0] * k) +
        ',' +
        (center[1] - p[1] * k) +
        ')scale(' +
        k +
        ')'
      );
    };
    this.svg.selectAll('.treeCircle')
    .transition()
    .duration(200)
    .attr('opacity', 0);
    this.svg
      .selectAll('.atoms circle')
      .transition()
      .duration(300)
      .attr('opacity', 1);
    this.svg
      .selectAll('.atoms circle')
      .transition()
      .duration(300)
      .attr('opacity', 1);
    this.svg
      .selectAll('.atoms circle')
      .transition()
      .duration(300)
      .attr('opacity', 1);

    canvas
      .attr('transform', transform(p0))
      .transition()
      .delay(200)
      .duration(i.duration * 0.5)
      .attrTween('transform', function () {
        return function (t) {
          return transform(i(t));
        };
      })
      .on('end', () => {
      });

    canvas.call(transition, 10, 10);

    this.currentScreen = 4;
  }

  loadDrawing2() {
    const width = this.width;
    const height = this.height;
    const radius = 20;

    const t0 = Date.now();

    const circles = [
      { x: this.width / 4, y: 600, color: '#e59964' },
      { x: this.width / 2, y: 600, color: '#051522' },
    ];

    const fullcircle = this.svg.append('g').attr('class', 'atoms');

    fullcircle
      .selectAll('mycircles')
      .data(circles)
      .enter()
      .append('circle')
      .attr('class', 'circle2')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 15)
      .style('fill', (d) => d.color)
      .attr('opacity', 0);

    fullcircle
      .selectAll('mycircles')
      .data(circles)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 29)
      .style('fill', 'none')
      .style('stroke', (d) => d.color)
      .style('stroke-width', '3')
      .attr('opacity', 0);

    fullcircle
      .selectAll('mycircles')
      .data(circles)
      .enter()
      .append('circle')
      .style('fill', 'none')
      .attr('r', 28.5)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('class', 'circleOuter')
      .attr('stroke', '#E59964')
      .attr('stroke-width', 10)
      .attr('stroke-dashoffset', 130)
      .attr('stroke-dasharray', '0 120')
      .attr('stroke-linecap', 'round')
      .attr('opacity', 0);
  }

  loadDrawing3() {
  }

  loadDrawing4() {
    const links = data.links.map((d) => Object.create(d));
    const nodes = data.nodes.map((d) => Object.create(d));

    const drag = (simulation) => {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    };

    const color = () => {
      const scale = d3.scaleOrdinal(d3.schemeCategory10);
      return (d) => scale(d.group);
    };

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id)
      )
      .force('charge', d3.forceManyBody())
      .force('x', d3.forceX())
      .force('y', d3.forceY());

    const location = this.svg
      .append('g')
      .attr('class', 'treeCircle')
      .attr('opacity', 0)
      .attr('transform', `translate(${this.width / 4},600)`);

    const link = location
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.7)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', (d) => Math.sqrt(d.value) / 15);

    const node = location
      .append('g')
      .attr('stroke', 'red')
      .attr('stroke-width', 0.05)
      .attr('fill', 'orange')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 0.28)
      .call(drag(simulation));

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x / 10)
        .attr('y1', (d) => d.source.y / 10)
        .attr('x2', (d) => d.target.x / 10)
        .attr('y2', (d) => d.target.y / 10);

      node.attr('cx', (d) => d.x / 10).attr('cy', (d) => d.y / 10);
    });
  }

  loadDrawing5() {
    const root = d3.hierarchy(tree);
    const links = root.links();
    const nodes = root.descendants();

    const drag = (simulation) => {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    };

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(0)
          .strength(1)
      )
      .force('charge', d3.forceManyBody().strength(-50))
      .force('x', d3.forceX())
      .force('y', d3.forceY());

    const location = this.svg
      .append('g')
      .attr('class', 'treeGraph')
      .attr('opacity', 0)
      .attr('transform', 'translate(600,600)');

    const link = location
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line');

    const node = location
      .append('g')
      .attr('fill', '#fff')
      .attr('stroke', '#000')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('fill', (d) => (d.children ? null : '#000'))
      .attr('stroke', (d) => (d.children ? null : '#fff'))
      .attr('r', 3.5)
      .call(drag(simulation));

    node.append('title').text((d) => d.data.name);

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
    });
  }

  loadDrawing6() {
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id(function (d) {
          return d.id;
        })
      )
      .force('charge', d3.forceManyBody())

    d3.json('public/data/miserables.json')
    .then((graph) => {
      const location = this.svg
      .append('g')
      .attr('class', 'treeGraph')
      .attr('opacity', 0)
      .attr('transform', `translate(${this.width/3},600)`);

      const link = location
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(graph.links)
        .enter()
        .append('line')
        .attr('stroke', '#999')
        .attr('stroke-width', function (d) {
          return Math.sqrt(d.value);
        });

      var node = location
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(graph.nodes)
        .enter()
        .append('circle')
        .attr('r', 5)
        .attr('fill', function (d) {
          return color(d.group);
        })
        .call(
          d3
            .drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)
        );

      node.append('title').text(function (d) {
        return d.id;
      });

      simulation.nodes(graph.nodes).on('tick', ticked);

      simulation.force('link').links(graph.links);

      function ticked() {
        link
          .attr('x1', function (d) {
            return d.source.x;
          })
          .attr('y1', function (d) {
            return d.source.y;
          })
          .attr('x2', function (d) {
            return d.target.x;
          })
          .attr('y2', function (d) {
            return d.target.y;
          });

        node
          .attr('cx', function (d) {
            return d.x;
          })
          .attr('cy', function (d) {
            return d.y;
          });
      }
    })

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  drawInitial() {
    this.loadDrawing1();
    this.loadDrawing2();
    this.loadDrawing3();
    this.loadDrawing4();
    // this.loadDrawing6();
  }
}
