    import React, { useState } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import {
     decrement,
     increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
    } from './CounterSlice';
    import styles from "./counter.scss"

    export function Counter() {
     const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    return (
        <div>
            {console.log("test",incrementByAmount(typeof(incrementAmount) || 0))}
        <div className={styles.row}>
            <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
         >
            +
            </button>
            <span className={styles.value}><strong>{count}</strong></span>
            <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            -
            </button>
        </div>
        <div className={styles.row}>
            <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
            className={styles.button}
            onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
            >
             Add Amount
            </button>
            <button
            className={styles.asyncButton}
            onClick={() => 
            dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
            Add Async
            </button>
        </div>
        </div>
    );
}