import { useState } from 'react';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ onSubmitData }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const setDefaultState = () => setContact({ name: '', number: '' });

  const onChange = ({ target: { name, value } }) => {
    return setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmitData(contact);

    setDefaultState();
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <InputBox
        labelText={'Name'}
        htmlFor={'name'}
        type={'text'}
        id={'name'}
        name={'name'}
        title={
          "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        }
        pattern={'text'}
        placeholder={'Name'}
        required={true}
        value={contact.name}
        onChange={onChange}
      />

      <InputBox
        labelText={'Phone number'}
        htmlFor={'tel'}
        type={'tel'}
        id={'tel'}
        name={'number'}
        title={
          'Номер телефона должен состоять из 11-12 цифр и может содержать цифры, точки, пузатые скобки и может начинаться с +'
        }
        pattern={'phone'}
        placeholder={'Phone Number'}
        required={true}
        value={contact.number}
        onChange={onChange}
      />
      <button className={styles.Form__btn} type="submit">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default Form;

/* 
// Class Component

class Form extends Component {
  state = { name: '', number: '' };

  setDefaultState = () =>
    this.setState({
      name: '',
      number: '',
    });

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitData(this.state);

    this.setDefaultState();
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <InputBox
          labelText={'Name'}
          htmlFor={'name'}
          type={'text'}
          id={'name'}
          name={'name'}
          title={
            "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          }
          pattern={'text'}
          placeholder={'Name'}
          required={true}
          value={this.state.name}
          onChange={this.onChange}
        />

        <InputBox
          labelText={'Phone number'}
          htmlFor={'tel'}
          type={'tel'}
          id={'tel'}
          name={'number'}
          title={
            'Номер телефона должен состоять из 11-12 цифр и может содержать цифры, точки, пузатые скобки и может начинаться с +'
          }
          pattern={'phone'}
          placeholder={'Phone Number'}
          required={true}
          value={this.state.number}
          onChange={this.onChange}
        />
        <button className={styles.Form__btn} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
*/
