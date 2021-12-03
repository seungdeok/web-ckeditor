import React, { useState, useEffect } from 'react';

import Editor from 'components/editor';

const Home = () => {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  return (
    <div>
      <Editor
        name="description"
        onChange={(text) => {
          setData(text);
        }}
        value={data}
        isEditorLoaded={isEditorLoaded}
      />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
