import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating, Badge, Text } from 'react-native-elements';
import { View } from 'react-native';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clasification: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  score: PropTypes.number,
};

const defaultProps = {
  score: 0,
};

function calculateRating (score) {
  return (score * (5 / 100));
}

const MovieCard = ({ image, title, score, clasification, duration, gender }) => {
  const rating = calculateRating(score);

  return (
    <Card title={title}>
      <View>
        <Image source={{ uri: image }} style={{ width: 130, height: 150 }} />

        <Text>Clasificación:</Text>
        <Badge value={clasification} />

        <Text>Duración:</Text>
        <Badge value={duration} />

        <Text>Género:</Text>
        <Badge value={gender} />

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
    </Card>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
