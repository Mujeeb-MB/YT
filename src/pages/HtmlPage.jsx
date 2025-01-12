import React from "react";

import HtmlSources from "../sources/html"; // Adjust the path as necessary
import PageStruct from "../components/PageStruct";

const HtmlPage = () => {
  return <PageStruct sources={HtmlSources} />;
};

export default HtmlPage;
