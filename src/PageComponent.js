import tw, { styled } from 'twin.macro';

const PageHeaderStyledComponent = styled.div`
  ${tw`text-xl text-center mb-3`}
`;

const PageContentStyledComponent = styled.div`
  ${tw`h-4/5 flex`}
`;

const PageStyledComponent = styled.div`
  ${tw`container flex flex-col justify-center mx-auto h-screen text-gray-700`}
`;

const PageComponent = ({ children, title }) => (
  <PageStyledComponent>
    <PageHeaderStyledComponent>
      <h1>{title}</h1>
    </PageHeaderStyledComponent>
    <PageContentStyledComponent>{children}</PageContentStyledComponent>
  </PageStyledComponent>
);

export default PageComponent;
