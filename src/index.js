import './styles/style.scss';

// change require to es6 import style
import $ from 'jquery';

let sec = 0;

setInterval(() => {
  const string = `You've been on this page for ${sec} seconds.`;
  $('#main').html(string);
  sec += 1;
  console.log('Hello world');
}, 1000);
