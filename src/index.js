import React from 'react';
import ReactDOM from 'react-dom';


let li1  = React.createElement('li', {}, 'JavaScript')
let li2 = React.createElement('li', {}, 'React')
let li3 = React.createElement('li', {}, 'Movies')
let li4 = React.createElement('li', {}, 'Ice cream')

let meInReact = React.createElement('div', {className: 'me'}, [
  React.createElement('h1', {}, "An Awesome Person"),
  React.createElement('p', {}, "Who is learning React"),
  React.createElement('ul', {className: 'my-interests'}, [li1, li2, li3, li4])

])
// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
