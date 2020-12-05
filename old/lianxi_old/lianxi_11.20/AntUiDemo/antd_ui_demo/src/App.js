import React from 'react'
import { Button } from 'antd';
import { Pagination } from 'antd';

function App() {
  return (
    <div className="App">  
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>

        <p></p>

        <Pagination defaultCurrent={1} total={500} />
    </div>
  );
}

export default App;
