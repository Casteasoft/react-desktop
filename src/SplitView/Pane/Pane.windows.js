import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Item from './Item/Item.window';

const styles = {
  pane: {
    width: '20%'
  }
};

@DesktopComponent
class Pane extends Component {
  static Item = Item;

  static propTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  static contextTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  filterChildren(children) {
    return Children.map(children, function (child) {
      return (
        <Item>
          {child}
        </Item>
      );
    });
  }

  render() {
    let { children, style, ...props } = this.props;

    children = this.filterChildren(children);

    return (
      <div
        style={{...styles.pane, ...style}}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Pane;