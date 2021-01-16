import tw, { styled } from 'twin.macro';
import ColumnComponent from './ColumnComponent';

const PreviewStyledComponent = styled.div`
  ${tw`h-full p-5 bg-gray-50 border-2 border-gray-800 overflow-x-hidden overflow-y-auto`}
`;

const PreviewComponent = ({ __html, ...props }) => (
  <ColumnComponent>
    <PreviewStyledComponent id="preview" dangerouslySetInnerHTML={{ __html }} {...props} />
  </ColumnComponent>
);

export default PreviewComponent;
