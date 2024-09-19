(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["777"],{9935:function(e,n,t){"use strict";t.r(n);var s=t("5893"),r=t("65");function a(e){let n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"understanding-act-function",children:["Understanding ",(0,s.jsx)(n.code,{children:"act"})," function",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#understanding-act-function",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When writing RNTL tests one of the things that confuses developers the most are cryptic ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/testing-recipes.html#act",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"act()"})})," function errors logged into console. In this article I will try to build an understanding of the purpose and behaviour of ",(0,s.jsx)(n.code,{children:"act()"})," so you can build your tests with more confidence."]}),"\n",(0,s.jsxs)(n.h2,{id:"act-warnings",children:[(0,s.jsx)(n.code,{children:"act"})," warnings",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#act-warnings",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s start with typical ",(0,s.jsx)(n.code,{children:"act()"}),' warnings logged to console. There are two kinds of these issues, let\u2019s call the first one the "sync ',(0,s.jsx)(n.code,{children:"act()"}),'" warning:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Warning: An update to Component inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The second one relates to async usage of ",(0,s.jsx)(n.code,{children:"act"}),' so let\u2019s call it the "async ',(0,s.jsx)(n.code,{children:"act"}),'" error:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Warning: You called act(async () => ...) without await. This could lead to unexpected\ntesting behaviour, interleaving multiple act calls and mixing their scopes. You should\n- await act(async () => ...);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"synchronous-act",children:["Synchronous ",(0,s.jsx)(n.code,{children:"act"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#synchronous-act",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"responsibility",children:["Responsibility",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#responsibility",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This function is intended only for using in automated tests and works only in development mode. Attempting to use it in production build will throw an error."}),"\n",(0,s.jsxs)(n.p,{children:["The responsibility for ",(0,s.jsx)(n.code,{children:"act"})," function is to make React renders and updates work in tests in a similar way they work in real application by grouping and executing related units of interaction (e.g. renders, effects, etc) together."]}),"\n",(0,s.jsxs)(n.p,{children:["To showcase that behaviour let make a small experiment. First we define a function component that uses ",(0,s.jsx)(n.code,{children:"useEffect"})," hook in a trivial way."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function TestComponent() {\n  const [count, setCount] = React.useState(0);\n  React.useEffect(() => {\n    setCount((c) => c + 1);\n  }, []);\n\n  return <Text>Count {count}</Text>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the following tests we will directly use ",(0,s.jsx)(n.code,{children:"ReactTestRenderer"})," instead of RNTL ",(0,s.jsx)(n.code,{children:"render"})," function to render our component for tests. In order to expose familiar queries like ",(0,s.jsx)(n.code,{children:"getByText"})," we will use ",(0,s.jsx)(n.code,{children:"within"})," function from RNTL."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render without act', () => {\n  const renderer = TestRenderer.create(<TestComponent />);\n\n  // Bind RNTL queries for root element.\n  const view = within(renderer.root);\n  expect(view.getByText('Count 0')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When testing without ",(0,s.jsx)(n.code,{children:"act"})," call wrapping rendering call, we see that the assertion runs just after the rendering but before ",(0,s.jsx)(n.code,{children:"useEffect"}),"hooks effects are applied. Which is not what we expected in our tests."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render with act', () => {\n  let renderer: ReactTestRenderer;\n  act(() => {\n    renderer = TestRenderer.create(<TestComponent />);\n  });\n\n  // Bind RNTL queries for root element.\n  const view = within(renderer!.root);\n  expect(view.getByText('Count 1')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When wrapping rendering call with ",(0,s.jsx)(n.code,{children:"act"})," we see that the changes caused by ",(0,s.jsx)(n.code,{children:"useEffect"})," hook have been applied as we would expect."]}),"\n",(0,s.jsxs)(n.h3,{id:"when-to-use-act",children:["When to use act",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#when-to-use-act",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The name ",(0,s.jsx)(n.code,{children:"act"})," comes from ",(0,s.jsx)(n.a,{href:"http://wiki.c2.com/?ArrangeActAssert",target:"_blank",rel:"noopener noreferrer",children:"Arrange-Act-Assert"})," unit testing pattern. Which means it\u2019s related to part of the test when we execute some actions on the component tree."]}),"\n",(0,s.jsxs)(n.p,{children:["So far we learned that ",(0,s.jsx)(n.code,{children:"act"})," function allows tests to wait for all pending React interactions to be applied before we make our assertions. When using ",(0,s.jsx)(n.code,{children:"act"})," we get guarantee that any state updates will be executed as well as any enqueued effects will be executed."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, we should use ",(0,s.jsx)(n.code,{children:"act"})," whenever there is some action that causes element tree to render, particularly:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["initial render call - ",(0,s.jsx)(n.code,{children:"ReactTestRenderer.create"})," call"]}),"\n",(0,s.jsxs)(n.li,{children:["re-rendering of component -",(0,s.jsx)(n.code,{children:"renderer.update"})," call"]}),"\n",(0,s.jsx)(n.li,{children:"triggering any event handlers that cause component tree render"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Thankfully, for these basic cases RNTL has got you covered as our ",(0,s.jsx)(n.code,{children:"render"}),", ",(0,s.jsx)(n.code,{children:"update"})," and ",(0,s.jsx)(n.code,{children:"fireEvent"})," methods already wrap their calls in sync ",(0,s.jsx)(n.code,{children:"act"})," so that you do not have to do it explicitly."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"act"})," calls can be safely nested and internally form a stack of calls. However, overlapping ",(0,s.jsx)(n.code,{children:"act"})," calls, which can be achieved using async version of ",(0,s.jsx)(n.code,{children:"act"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/main/packages/react/src/ReactAct.js#L161",target:"_blank",rel:"noopener noreferrer",children:"are not supported"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"implementation",children:["Implementation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implementation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["As of React version of 18.1.0, the ",(0,s.jsx)(n.code,{children:"act"})," implementation is defined in the ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/main/packages/react/src/ReactAct.js",target:"_blank",rel:"noopener noreferrer",children:"ReactAct.js source file"})," inside React repository. This implementation has been fairly stable since React 17.0."]}),"\n",(0,s.jsxs)(n.p,{children:["RNTL exports ",(0,s.jsx)(n.code,{children:"act"})," for convenience of the users as defined in the ",(0,s.jsx)(n.a,{href:"https://github.com/callstack/react-native-testing-library/blob/main/src/act.ts",target:"_blank",rel:"noopener noreferrer",children:"act.ts source file"}),". That file refers to ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/ce13860281f833de8a3296b7a3dad9caced102e9/packages/react-test-renderer/src/ReactTestRenderer.js#L52",target:"_blank",rel:"noopener noreferrer",children:"ReactTestRenderer.js source"})," file from React Test Renderer package, which finally leads to React act implementation in ReactAct.js (already mentioned above)."]}),"\n",(0,s.jsxs)(n.h2,{id:"asynchronous-act",children:["Asynchronous ",(0,s.jsx)(n.code,{children:"act"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asynchronous-act",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["So far we have seen synchronous version of ",(0,s.jsx)(n.code,{children:"act"})," which runs its callback immediately. This can deal with things like synchronous effects or mocks using already resolved promises. However, not all component code is synchronous. Frequently our components or mocks contain some asynchronous behaviours like ",(0,s.jsx)(n.code,{children:"setTimeout"})," calls or network calls. Starting from React 16.9, ",(0,s.jsx)(n.code,{children:"act"})," can also be called in asynchronous mode. In such case ",(0,s.jsx)(n.code,{children:"act"})," implementation checks that the passed callback returns ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/ce13860281f833de8a3296b7a3dad9caced102e9/packages/react/src/ReactAct.js#L60",target:"_blank",rel:"noopener noreferrer",children:"object resembling promise"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"asynchronous-code",children:["Asynchronous code",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asynchronous-code",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Asynchronous version of ",(0,s.jsx)(n.code,{children:"act"})," also is executed immediately, but the callback is not yet completed because of some asynchronous operations inside."]}),"\n",(0,s.jsxs)(n.p,{children:["Lets look at a simple example with component using ",(0,s.jsx)(n.code,{children:"setTimeout"})," call to simulate asynchronous behaviour:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function TestAsyncComponent() {\n  const [count, setCount] = React.useState(0);\n  React.useEffect(() => {\n    setTimeout(() => {\n      setCount((c) => c + 1);\n    }, 50);\n  }, []);\n\n  return <Text>Count {count}</Text>;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { render, screen } from '@testing-library/react-native';\n\ntest('render async natively', () => {\n  render(<TestAsyncComponent />);\n  expect(screen.getByText('Count 0')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"If we test our component in a native way without handling its asynchronous behaviour we will end up with sync act warning:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Warning: An update to TestAsyncComponent inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that this is not yet the infamous async act warning. It only asks us to wrap our event code with ",(0,s.jsx)(n.code,{children:"act"})," calls. However, this time our immediate state change does not originate from externally triggered events but rather forms an internal part of the component. So how can we apply ",(0,s.jsx)(n.code,{children:"act"})," in such scenario?"]}),"\n",(0,s.jsxs)(n.h3,{id:"solution-with-fake-timers",children:["Solution with fake timers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution-with-fake-timers",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"First solution is to use Jest's fake timers inside out tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render with fake timers', () => {\n  jest.useFakeTimers();\n  render(<TestAsyncComponent />);\n\n  act(() => {\n    jest.runAllTimers();\n  });\n  expect(screen.getByText('Count 1')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That way we can wrap ",(0,s.jsx)(n.code,{children:"jest.runAllTimers()"})," call which triggers the ",(0,s.jsx)(n.code,{children:"setTimeout"})," updates inside an ",(0,s.jsx)(n.code,{children:"act"})," call, hence resolving the act warning. Note that this whole code is synchronous thanks to usage of Jest fake timers."]}),"\n",(0,s.jsxs)(n.h3,{id:"solution-with-real-timers",children:["Solution with real timers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution-with-real-timers",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If we wanted to stick with real timers then things get a bit more complex. Let\u2019s start by applying a crude solution of opening async ",(0,s.jsx)(n.code,{children:"act()"})," call for the expected duration of components updates:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render with real timers - sleep', async () => {\n  render(<TestAsyncComponent />);\n  await act(async () => {\n    await sleep(100); // Wait a bit longer than setTimeout in `TestAsyncComponent`\n  });\n\n  expect(screen.getByText('Count 1')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This works correctly as we use an explicit async ",(0,s.jsx)(n.code,{children:"act()"})," call that resolves the console error. However, it relies on our knowledge of exact implementation details which is a bad practice."]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s try more elegant solution using ",(0,s.jsx)(n.code,{children:"waitFor"})," that will wait for our desired state:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render with real timers - waitFor', async () => {\n  render(<TestAsyncComponent />);\n\n  await waitFor(() => screen.getByText('Count 1'));\n  expect(screen.getByText('Count 1')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This also works correctly, because ",(0,s.jsx)(n.code,{children:"waitFor"})," call executes async ",(0,s.jsx)(n.code,{children:"act()"})," call internally."]}),"\n",(0,s.jsxs)(n.p,{children:["The above code can be simplified using ",(0,s.jsx)(n.code,{children:"findBy"})," query:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"test('render with real timers - findBy', async () => {\n  render(<TestAsyncComponent />);\n\n  expect(await screen.findByText('Count 1')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This also works since ",(0,s.jsx)(n.code,{children:"findByText"})," internally calls ",(0,s.jsx)(n.code,{children:"waitFor"})," which uses async ",(0,s.jsx)(n.code,{children:"act()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that all of the above examples are async tests using & awaiting async ",(0,s.jsx)(n.code,{children:"act()"})," function call."]}),"\n",(0,s.jsxs)(n.h3,{id:"async-act-warning",children:["Async act warning",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#async-act-warning",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If we modify any of the above async tests and remove ",(0,s.jsx)(n.code,{children:"await"})," keyword, then we will trigger the notorious async ",(0,s.jsx)(n.code,{children:"act()"}),"warning:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"Warning: You called act(async () => ...) without await. This could lead to unexpected\ntesting behaviour, interleaving multiple act calls and mixing their scopes. You should\n- await act(async () => ...);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["React decides to show this error whenever it detects that async ",(0,s.jsx)(n.code,{children:"act()"}),"call ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/ce13860281f833de8a3296b7a3dad9caced102e9/packages/react/src/ReactAct.js#L93",target:"_blank",rel:"noopener noreferrer",children:"has not been awaited"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The exact reasons why you might see async ",(0,s.jsx)(n.code,{children:"act()"})," warnings vary, but finally it means that ",(0,s.jsx)(n.code,{children:"act()"})," has been called with callback that returns ",(0,s.jsx)(n.code,{children:"Promise"}),"-like object, but it has not been waited on."]}),"\n",(0,s.jsxs)(n.h2,{id:"references",children:["References",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#references",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://github.com/facebook/react/blob/main/packages/react/src/ReactAct.js",target:"_blank",rel:"noopener noreferrer",children:["React ",(0,s.jsx)(n.code,{children:"act"})," implementation source"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://reactjs.org/docs/testing-recipes.html#act",target:"_blank",rel:"noopener noreferrer",children:["React testing recipes: ",(0,s.jsx)(n.code,{children:"act()"})]})}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fadvanced%2Funderstanding-act.mdx"]={toc:[{text:"`act` warnings",id:"act-warnings",depth:2},{text:"Synchronous `act`",id:"synchronous-act",depth:2},{text:"Responsibility",id:"responsibility",depth:3},{text:"When to use act",id:"when-to-use-act",depth:3},{text:"Implementation",id:"implementation",depth:3},{text:"Asynchronous `act`",id:"asynchronous-act",depth:2},{text:"Asynchronous code",id:"asynchronous-code",depth:3},{text:"Solution with fake timers",id:"solution-with-fake-timers",depth:3},{text:"Solution with real timers",id:"solution-with-real-timers",depth:3},{text:"Async act warning",id:"async-act-warning",depth:3},{text:"References",id:"references",depth:2}],title:"Understanding `act` function",frontmatter:{}}}}]);