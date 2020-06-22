/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Header from 'src/components/Header';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header title={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer
          css={{
            color: 'grey',
            fontSize: '0.8rem',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Matthias Aarnoutse - {process.env.GATSBY_ENVIRONMENT}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
