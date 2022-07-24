import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

// bootstrap components:
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { copyTextToClipboard } from './copyToClipboard';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Form style={{
      width: 350,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <InputGroup style={{
          justifyContent: 'center',
          gap: 10
        }}>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span
          onClick={() => copyTextToClipboard(`${count}`)}
          className={styles.value}>{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </InputGroup>
      <InputGroup style={{
        justifyContent: 'center',
      }}>
        <Form.Control
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.currentTarget.value)}
        />
      </InputGroup>
      <InputGroup
        style={{
          justifyContent: 'center',
          gap: 10
        }}
      >
        <Button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </InputGroup>
    </Form>
  );
}
