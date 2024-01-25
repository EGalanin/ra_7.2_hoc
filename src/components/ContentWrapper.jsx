import PropTypes from 'prop-types';
import New from './New';
import Popular from './Popular';

export const ContentWrapper = withContentWrapper(Popular, New);

function withContentWrapper(Popular, New) {
  function OtherComponent(props) {
    switch (true) {
      case (props.views > 1000):
        return <Popular {...props} />;
      case (props.views < 100):
        return <New {...props} />;
      default:
        return <div {...props}>{props.children}</div>;
    }
  }

  OtherComponent.propTypes = {
    views: PropTypes.number.isRequired,
    children: PropTypes.node,
  };

  return OtherComponent;
}