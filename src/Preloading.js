import React from 'react';
import PreloadingImg from './assets/preloading.png';

const Preloader = () => (
  <div className="App container">
    <h1>The average H1B in tech pays $86,164/year</h1>
    <p className="lead">
      Since 2012 the US tech industry has sponsored 176,075 H1B work visas.Most of them paid <b>$60m660 to $111,668 </b> per year (1 standard deviation). <span>The best city for H1B is <b>Kirkland, WA</b> with an average individual salary <b> $39,465 above local household medium</b>. Medium household salary is a good proxy for cost of living in an area.</span>
    </p>
    <img src={PreloadingImg} style={{width: '100%'}} role="presentation" alt="Preloader"/>
    <h2 className="text-center">Loading data...</h2>
  </div>
)
export default Preloader;