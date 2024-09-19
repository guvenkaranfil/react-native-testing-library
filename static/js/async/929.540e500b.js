(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["929"],{9475:function(e,n,r){"use strict";r.r(n);var t=r("5893"),s=r("65");function o(e){let n=Object.assign({h1:"h1",code:"code",a:"a",pre:"pre",p:"p",blockquote:"blockquote",h3:"h3",h4:"h4",div:"div",strong:"strong"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"render-function",children:[(0,t.jsx)(n.code,{children:"render"})," function",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-function",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function render(\n  component: React.Element<any>,\n  options?: RenderOptions\n): RenderResult\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"render"})," function is the entry point for writing React Native Testing Library tests. It deeply renders the given React element and returns helpers to query the output components' structure."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { render, screen } from '@testing-library/react-native';\n\ntest('basic test', () => {\n  render(<MyApp />);\n  expect(screen.getAllByRole('button', { name: 'start' })).toBeOnTheScreen();\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["When using React context providers, like Redux Provider, you'll likely want to wrap rendered component with them. In such cases, it's convenient to create your own custom\xa0",(0,t.jsx)(n.code,{children:"render"}),"\xa0method. ",(0,t.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/setup#custom-render",target:"_blank",rel:"noopener noreferrer",children:"Follow this great guide on how to set this up"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"render-options",children:["Options",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-options",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The behavior of the ",(0,t.jsx)(n.code,{children:"render"})," method can be customized by passing various options as a second argument of the ",(0,t.jsx)(n.code,{children:"RenderOptions"})," type:"]}),"\n",(0,t.jsxs)(n.h4,{id:"wrapper-option",children:[(0,t.jsx)(n.code,{children:"wrapper"})," option",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#wrapper-option",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"wrapper?: React.ComponentType<any>,\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This option allows you to wrap the tested component, passed as the first option to the\xa0",(0,t.jsx)(n.code,{children:"render()"}),"\xa0function, in an additional wrapper component. This is useful for creating reusable custom render functions for common React Context providers."]}),"\n",(0,t.jsxs)(n.h4,{id:"createnodemock-option",children:[(0,t.jsx)(n.code,{children:"createNodeMock"})," option",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createnodemock-option",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"createNodeMock?: (element: React.Element) => unknown,\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This option allows you to pass ",(0,t.jsx)(n.code,{children:"createNodeMock"})," option to ",(0,t.jsx)(n.code,{children:"ReactTestRenderer.create()"})," method in order to allow for custom mock refs. You can learn more about this option from ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/test-renderer.html#ideas",target:"_blank",rel:"noopener noreferrer",children:"React Test Renderer documentation"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"unstable_validatestringsrenderedwithintext-option",children:[(0,t.jsx)(n.code,{children:"unstable_validateStringsRenderedWithinText"})," option",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#unstable_validatestringsrenderedwithintext-option",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"unstable_validateStringsRenderedWithinText?: boolean;\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["This options is experimental, in some cases it might not work as intended, and its behavior might change without observing ",(0,t.jsx)(n.a,{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer",children:"SemVer"})," requirements for breaking changes.\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.strong,{children:"experimental"})," option allows you to replicate React Native behavior of throwing ",(0,t.jsx)(n.code,{children:"Invariant Violation: Text strings must be rendered within a <Text> component"})," error when you try to render ",(0,t.jsx)(n.code,{children:"string"})," value under components different than ",(0,t.jsx)(n.code,{children:"<Text>"}),", e.g., under ",(0,t.jsx)(n.code,{children:"<View>"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"React Test Renderer does not enforce this check; hence, by default, React Native Testing Library also does not check this. That might result in runtime errors when running your code on a device, while the code works without errors in tests."}),"\n",(0,t.jsxs)(n.h3,{id:"render-result",children:["Result",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-result",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"render"})," function returns the same queries and utilities as the ",(0,t.jsx)(n.a,{href:"/docs/api/screen",children:(0,t.jsx)(n.code,{children:"screen"})})," object. We recommended using the ",(0,t.jsx)(n.code,{children:"screen"})," object as more developer-friendly way."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-screen",target:"_blank",rel:"noopener noreferrer",children:"this article"})," from Kent C. Dodds for more details."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fapi%2Frender.mdx"]={toc:[{text:"Options",id:"render-options",depth:3},{text:"`wrapper` option",id:"wrapper-option",depth:4},{text:"`createNodeMock` option",id:"createnodemock-option",depth:4},{text:"`unstable_validateStringsRenderedWithinText` option",id:"unstable_validatestringsrenderedwithintext-option",depth:4},{text:"Result",id:"render-result",depth:3}],title:"`render` function",frontmatter:{}}}}]);