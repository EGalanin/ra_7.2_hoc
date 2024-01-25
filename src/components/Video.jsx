import PropTypes from 'prop-types';

export default function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} style={{border: 0, }} allow="autoplay; encrypted-media" allowFullScreen title={props.url}></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number,
}