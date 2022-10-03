import UseContextComponent from './components/use-context/UseContextComponent';
import UseEffectComponent from './components/useeffect-component/UseEffectComponent';
import UseReducerComponent from './components/usereducer-component/UseReducerComponent';
import UseStateComponent from './components/usestate-compnent/UseStateComponent';

function App() {
  return (
    <div>
      <UseStateComponent />
      <hr />
      <UseEffectComponent />
      <hr />
      <UseContextComponent />
      <hr />
      <UseReducerComponent />
    </div>
  );
}

export default App;
