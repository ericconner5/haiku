import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Haiku} from './business.js';

$(document).ready(function() {
  $("#submit").click(function() {
    parseLines();
    alert(linesSplit);
    linesSplit = [];
    console.log(haikuArray);
  });
});

let linesSplit = [];
let haikuArray = [];

function parseLines() {
  let i, line1, line2, line3, lines;




  lines = $('textarea').val().split('\n');
    for(i = 0;i <= lines.length;i++){
      linesSplit.push(lines[i]);
      console.log(lines);

  }
  let haiku = new Haiku(linesSplit[0], linesSplit[1], linesSplit[2]);
  haikuArray.push(haiku);
}
