import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    ${tw`text-2xl`}
  }

  h2 {
    ${tw`text-xl`}
  }

  h3 {
    ${tw`text-lg`}
  }

  h1, h2, h3 {
    ${tw`mb-2.5`}
  }

  h4, h5, h6 {
    ${tw`text-base mb-1.5`}
  }

  a {
    ${tw`text-blue-600 underline`}
  }

  img {
    ${tw`p-2 border-double border-gray-200 border-4 rounded block mx-auto`}
  }

  code {
    ${tw`p-1.5 bg-gray-800 text-gray-200 rounded`}
  }

  p {
    ${tw`leading-6`}
  }

  p, ol, ul, code, img {
    ${tw`mb-2`}
  }

  pre {
    code {
      ${tw`block`}
    }
  }

  ol, ul {
    ${tw`list-decimal list-inside`}
  }

  ol {
    ${tw`list-decimal`}
  }

  ul {
    ${tw`list-disc`}
  }

  blockquote {
    ${tw`p-3 bg-gray-200 border-gray-800 border-l-4 italic rounded`}
  }

  html,
  body {
    ${tw`h-full`}
  }
`;

export default GlobalStyle;
