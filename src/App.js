import { useCallback, useState } from 'react';
import marked from 'marked';

import { defaultEditorValue } from './consts';
import GlobalStyle from './globalStyle';
import PageComponent from './PageComponent';
import EditorComponent from './EditorComponent';
import PreviewComponent from './PreviewComponent';

function App() {
  const [editorValue, setEditorValue] = useState(defaultEditorValue);
  const handleOnChange = useCallback(ev => setEditorValue(ev.target.value), [setEditorValue]);

  return (
    <PageComponent title="Markdown editor!">
      <GlobalStyle />
      <EditorComponent value={editorValue} onChange={handleOnChange} />
      <PreviewComponent __html={marked(editorValue, { breaks: true })} />
    </PageComponent>
  );
}

export default App;
