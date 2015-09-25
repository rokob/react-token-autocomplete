import React from 'react';
import radium from 'radium';
import {map} from 'lodash';

const styles = {
  wrapper: {
    background: '#fff',
    width: '100%'
  }
};

const PROPS_DESCRIPTION = [
  [
    'options',
    'array',
    '[]',
    'suggestions to be displayed in autocomplete'
  ],
  [
    'placeholder',
    'string',
    '"add new tag"',
    'placeholder for empty input'
  ],
  [
    'defaultValues',
    'array',
    '[]',
    'values already selected'
  ],
  [
    'treshold',
    'number',
    '0',
    'minimal input length to display suggestions'
  ],
  [
    'focus',
    'boolean',
    'false',
    'should input be focused by default'
  ],
  [
    'processing',
    'boolean',
    'false',
    'display processing indicator'
  ],
  [
    'limitToOptions',
    'boolean',
    'false',
    'allow/disable custom tokens added by user'
  ],
  [
    'onInputChange',
    'function',
    'noop',
    'callback when input changes'
  ],
  [
    'onAdd',
    'function',
    'noop',
    'callback when new token is selected'
  ],
  [
    'onRemove',
    'function',
    'noop',
    'callback when token is removed'
  ],
  [
    'parseToken',
    'function',
    'identity',
    'parse value to token label'
  ],
  [
    'parseOption',
    'function',
    'identity',
    'parse value to suggestion label'
  ],
  [
    'parseCustom',
    'function',
    'identity',
    'parse user entered values before adding to values'
  ]

];

@radium
export default class PropTable extends React.Component {

  static displayName = 'PropTable';

  renderTableContents () {
    return map(PROPS_DESCRIPTION, row => {
      return (
        <tr>
          <td key="0">{row[0]}</td>
          <td key="1">{row[1]}</td>
          <td key="2">{row[2]}</td>
          <td key="3">{row[3]}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table ref="wrapper" style={styles.wrapper}>
        <thead>
          <th>props</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </thead>
        { this.renderTableContents() }
      </table>
    );
  }
}
