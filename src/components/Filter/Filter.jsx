import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ textForFilter, onChange }) => (
  <div className={styles.Filter__wrap}>
    <h3 className={styles.Filter__title}>Search</h3>

    <InputBox
      labelText={'Find Name'}
      htmlFor={'filter'}
      type={'text'}
      id={'filter'}
      name={'filter'}
      pattern={'text'}
      placeholder={'Name'}
      required={false}
      value={textForFilter}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  textForFilter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
