import React from 'react';
import PropTypes from 'prop-types';
import { tableTypes, tableDefaults, tableContextTypes } from './types';

const componentDefaults = tableDefaults.renderers;

export default class Provider extends React.Component {
  getChildContext() {
    const { columns, renderers } = this.props;

    return {
      columns,
      renderers: {
        table: renderers.table || componentDefaults.table,
        header: { ...componentDefaults.header, ...renderers.header },
        body: { ...componentDefaults.body, ...renderers.body }
      }
    };
  }
  render() {
    const {
      columns, // eslint-disable-line no-unused-vars
      renderers,
      children
    } = this.props;
    const defaultRenderer = tableDefaults.renderers.table;

    return (renderers.table || defaultRenderer)(children, {
      columns,
      renderer: defaultRenderer
    });
  }
}
Provider.propTypes = {
  ...tableTypes,
  children: PropTypes.any
};
Provider.defaultProps = {
  ...tableDefaults
};
Provider.childContextTypes = tableContextTypes;