import PropTypes from 'prop-types';

const Input = props => {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input" {...rest} placeholder="Search" />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
