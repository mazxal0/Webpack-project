import React, {useEffect} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {

  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log('HELLO WORLD!')
  }, []);

  console.log(styles, 'styles OPA')

  return (
    <div className={styles.btn}>
      {count}
      <button onClick={() => {setCount(prevState => prevState + 1)}}>increment</button>
    </div>
  );
};
