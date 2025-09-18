import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const handleButtonClick = (type: string) => {
    alert(`${type} button clicked!`);
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Button Component Test
      </h1>

      <div className="space-x-2">
        <Button variant="primary" size="sm" onClick={() => handleButtonClick('Primary SM')}>
          Primary SM
        </Button>
        <Button variant="primary" size="md" onClick={() => handleButtonClick('Primary MD')}>
          Primary MD
        </Button>
        <Button variant="primary" size="lg" onClick={() => handleButtonClick('Primary LG')}>
          Primary LG
        </Button>
        <Button variant='primary'>Test</Button>
      </div>

      <div className="space-x-2">
        <Button variant="secondary" size="sm" onClick={() => handleButtonClick('Secondary SM')}>
          Secondary SM
        </Button>
        <Button variant="secondary" size="md" onClick={() => handleButtonClick('Secondary MD')}>
          Secondary MD
        </Button>
      </div>

      <div className="space-x-2">
        <Button variant="danger" size="lg" onClick={() => handleButtonClick('Danger LG')}>
          Danger LG
        </Button>
        <Button variant="danger" size="md" disabled>
          Danger Disabled
        </Button>
      </div>

      <div className="space-x-2">
        <Button variant="outline" size="md" onClick={() => handleButtonClick('Outline MD')}>
          Outline MD
        </Button>
        <Button variant="outline" size="sm" className="custom-hover-effect">
          Outline SM Custom
        </Button>
      </div>

      <div>
        <Button onClick={() => handleButtonClick('Default Button')}>
          Default (Primary MD)
        </Button>
      </div>
    </div>
  );
};

export default App;
