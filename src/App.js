import './components/Collapse/Collapse.css';
import Collapse from './components/Collapse/Collapse';

function App() {

  const params = {
    collapsedLabel: 'Развернуть',
    expandedLabel: 'Свернуть',
    text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
  }

  return (
    <div className='wrapper'>
      <Collapse {...params}></Collapse>
      {/* <Collapse></Collapse>
      <Collapse {...params}></Collapse> */}
    </div>
  );
}

export default App;
