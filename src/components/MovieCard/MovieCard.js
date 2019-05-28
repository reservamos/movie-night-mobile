import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'react-native-elements';
import { View } from 'react-native';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number,
};

const defaultProps = {
  score: 0,
};

function calculateRating (score) {
  return (score * (5 / 100));
}

const MovieCard = ({ image, title, score }) => {
  const rating = calculateRating(score);
  return (
    <Card title={title}>
      {
        <View>
          <Image source={{ uri: image }} style={{ width: 130, height: 150 }} />
          <View>
            <Rating
              readonly
              showRating
              startingValue={rating}
              imageSize={20}
              fractions={1}
              showReadOnlyText={false}
            />
          </View>
        </View>
    }
    </Card>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
