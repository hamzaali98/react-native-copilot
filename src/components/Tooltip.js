// @flow
import React from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
                   isFirstStep,
                   isLastStep,
                   handleNext,
                   handlePrev,
                   handleStop,
                   currentStep,
                   labels,
                 }: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleStop}>
            <Button>{labels.next || I18nManager.isRTL ? "يتخطى":'Skip'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev}>
            <Button>{labels.previous ||  I18nManager.isRTL ? "سابق":'Previous'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext}>
            <Button>{labels.next || I18nManager.isRTL ? "التالى":'Next'}</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button>{labels.finish ||  I18nManager.isRTL ? "ينهي":'Finish'}</Button>
          </TouchableOpacity>
      }
    </View>
  </View>
);

export default Tooltip;
