import React from "react";
import { useLocation } from "react-router-dom";

import Article from "@src/layouts/Article";
import Banner from "@src/layouts/Banner";
import Post from "@src/layouts/Post";

export default function _ExampleDocument() {
  const path = useLocation().pathname;
  const basePath = "/components/button";
  const routes = {
    examples: `${basePath}/examples`,
    code: `${basePath}/code`,
    usage: `${basePath}/usage`
  };

  const selected = (_routes: string[]) => {
    return _routes.includes(path);
  };

  return (
    <Post>
      <Banner
        title="Button"
        description="An avatar is a visual representation of a user or entity."
        basePath="/components/button"
        routes={routes}
      />
      {selected([basePath, routes.examples]) && <Examples />}
      {selected([routes.code]) && <Code />}
      {selected([routes.usage]) && <Usage />}
    </Post>
  );
}

function Examples() {
  return <Article>Examples</Article>;
}

function Code() {
  return <Article>Code</Article>;
}

function Usage() {
  return <Article>Usage</Article>;
}
