import React from "react";

import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return (
    <footer>
      <p>Created by {data.site.siteMetadata.description}, © 2022</p>
    </footer>
  );
};

export default Footer;
