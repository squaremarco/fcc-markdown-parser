import tw, { styled } from 'twin.macro';
import ColumnComponent from './ColumnComponent';

const EditorStyledComponent = styled.textarea`
  ${tw`w-full h-full font-mono text-gray-200 bg-gray-800 p-1.5 resize-none`}
`;

const EditorComponent = (props) => {
  return (
    <ColumnComponent>
      <EditorStyledComponent id="editor" {...props} />
    </ColumnComponent>
  );
};

export default EditorComponent;
