/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import { connect } from 'react-redux';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import styled from '@emotion/styled';

import { incrementAsync, decrementAsync } from 'src/actions/count';

const Button = styled.button`
  margin: 10px;
`;

const IndexPage = ({ count, loading, onIncrement, onDecrement }) => (
  <Layout css={{ display: 'flex', alignItems: 'center' }}>
    <SEO title="Home" />
    <h2 css={{ textAlign: 'center' }}>Counter</h2>
    <p css={{ textAlign: 'center', fontSize: '2rem' }}>{count}</p>

    <div css={{ display: 'flex', justifyContent: 'center' }}>
      <Button type="button" onClick={() => onIncrement(count)} disabled={loading}>
        Increment {loading}
      </Button>
      <Button type="button" onClick={() => onDecrement(count)} disabled={loading}>
        Decrement
      </Button>
    </div>

    <Link css={{ display: 'block', textAlign: 'center', margin: '20px 0' }} to="/404/">
      Go to a non-existent page
    </Link>
  </Layout>
);

const mapStateToProps = (state) => ({ count: state.counter.count, loading: state.counter.loading });

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (count: number) => {
    dispatch(incrementAsync(count));
  },
  onDecrement: (count: number) => {
    dispatch(decrementAsync(count));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
