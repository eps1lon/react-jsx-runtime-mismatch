import ReactDOM from 'react-dom';

function Child() {
  const texts = [
    'React & ReactDOM are not included in the bundle.js,',
    'but jsx runtime, which is the entrypoint, is bundled.',
    'The bundled entrypoint does not match the referenced react build.',
  ];

  const textNodes = texts.map(text => (
    <div>{text}</div>
  ));

  return (
    <div>
      {textNodes}
    </div>
  );
}

function App() {
  return (
    <div className="test">
      <Child />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#react-root'),
);
