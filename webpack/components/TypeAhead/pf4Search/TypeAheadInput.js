import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';
import useEventListener from '../../../utils/useEventListener';
import { commonInputPropTypes } from '../helpers/commonPropTypes';

import './TypeAheadInput.scss';

const TypeAheadInput = ({
  onKeyPress, onInputFocus, passedProps, isDisabled, autoSearchEnabled, placeholder,
}) => {
  const inputRef = useRef(null);
  const {
    onChange, value, clearSearch, ...downshiftProps
  } = passedProps;

  // What patternfly4 expects for args and what downshift creates as a function is different,
  // downshift only expects the event handler
  const onChangeWrapper = (_userValue, event) => onChange(event);

  useEventListener('keydown', onKeyPress, inputRef.current);

  return (
    <>
      <TextInput
        isDisabled={isDisabled}
        value={value}
        {...downshiftProps}
        ref={inputRef}
        onFocus={onInputFocus}
        aria-label="text input for search"
        onChange={onChangeWrapper}
        type="search"
        iconVariant={autoSearchEnabled && 'search'}
        placeholder={placeholder}
      />
      {
        value && (
          <Button
            variant={autoSearchEnabled ? 'plain' : 'control'}
            className="search-clear"
            onClick={clearSearch}
          >
            <TimesIcon />
          </Button>)}
    </>);
};

TypeAheadInput.propTypes = {
  isDisabled: PropTypes.bool,
  autoSearchEnabled: PropTypes.bool.isRequired,
  ...commonInputPropTypes,
  placeholder: PropTypes.string,
};

TypeAheadInput.defaultProps = {
  isDisabled: undefined,
  placeholder: '',
};

export default TypeAheadInput;
