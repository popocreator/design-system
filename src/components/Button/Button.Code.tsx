const ButtonCode = `
  const hello = '';
  const aaa = () => <Wrapper>
    <RenderView>{component}</RenderView>
    <CodeView>
      <CodeToolList>
        <CodeTool>
          <span>Open Codepen</span>
          <i className="fa-brands fa-codepen"></i>
        </CodeTool>
        <CodeTool>
          <span>Copy code</span>
          <i className="fa-regular fa-clone"></i>
        </CodeTool>
      </CodeToolList>
      <SyntaxHighlighter language="typescript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </CodeView>
  </Wrapper>
`;

export default ButtonCode;
