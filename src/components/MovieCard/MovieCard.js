import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating, Badge, Text } from 'react-native-elements';
import { View } from 'react-native';
import styles from './styles';

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
  return score * (5 / 100);
}

const MovieCard = ({ image, title, score, clasification, duration, gender }) => {
  const rating = calculateRating(score);

  return (
    <Card title={title}>
      <View style={styles.wrapper}>
        <Image source={{ uri: image }} style={styles.imageContainer} />
        <View style={styles.infoContainer}>
          <View style={styles.itemInfo}>
            <Text>Clasificación:</Text>
            <Badge
              value={clasification}
              badgeStyle={styles.badgeStyle}
              textStyle={styles.badgeText}
            />
          </View>
          <View style={styles.itemInfo}>
            <Text>Duración:</Text>
            <Badge value={duration} badgeStyle={styles.badgeStyle} textStyle={styles.badgeText} />
          </View>
          <View style={styles.itemInfo}>
            <Text>Género:</Text>
            <Badge value={gender} badgeStyle={styles.badgeStyle} textStyle={styles.badgeText} />
          </View>
          <Rating startingValue={rating} imageSize={20} fractions={1} showReadOnlyText={false} />
        </View>
      </View>
    </Card>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
