import React, { useEffect } from 'react';
import scroller from '../libraries/scroller';
import { ScrollerAPI } from '../api/api.js';
import * as d3 from 'd3';

const Demo = () => {
  useEffect(() => {
    const visuals = new ScrollerAPI();
    let scroll = scroller().container(d3.select('#graphic'));
    scroll();

    let lastIndex,
      activeIndex = 0;

    const activationFunctions = [
      visuals.draw1,
      visuals.draw2,
      visuals.draw3,
      visuals.draw4,
    ];

    scroll.on('active', function (index) {
      d3.selectAll('.step')
        .transition()
        .duration(500)
        .style('opacity', function (d, i) {
          return i === index ? 1 : 0.1;
        });

      activeIndex = index;
      let sign = activeIndex - lastIndex < 0 ? -1 : 1;
      let scrolledSections = d3.range(
        lastIndex + sign,
        activeIndex + sign,
        sign
      );
      scrolledSections.forEach((i) => {
        console.log(i);
        activationFunctions[i]();
      });

      lastIndex = activeIndex;
    });

    scroll.on('progress', function (index, progress) {
      if ((index === 2) & (progress > 0.7)) {
      }
    });

    visuals.drawInitial();
  }, []);

  return (
    <>
      <div id="graphic">
        <div id="sections">
          <section className="step">
            <p>
              Here’s a react component tree that represents a typical online
              e-commerce platform leveraging GraphQL.
            </p>
          </section>
          <section className="step">
            <p>
              Components rely on data props in order to properly display the
              correct information to the end user, and those subscribed to the
              React state may re-render on state updates even if the specific
              data they rely on has not changed. Using AtomiQL, components
              dependent on related data can subscribe to an independent instance
              of state.
            </p>
          </section>
          <section className="step">
            <p>
              An atom in Jotai represents a piece of state capturing an isolated
              store of data. Components can subscribe to different atoms, and
              atoms together make up the React state. Through AtomiQL, an atom
              can store data from server requests as well as local-only state.
            </p>
          </section>

          <section className="step">
            <p>
              The state of atoms can be mutated. Following a mutation,
              re-renders will be triggered for and isolated to subscribed
              components only. Unsubscribed components will not be affected by
              state updates, leading to meaningful performance and user
              experience benefits compared to other GraphQL clients.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </section>
        </div>
        <div id="vis"></div>
      </div>
    </>
  );
};

export default Demo;
