import PropTypes from "prop-types";
import { Percentage } from "./HealthBarStyle";
import ProgressBar from "react-bootstrap/ProgressBar";

const HealthBar = ({ value, max, min }) => {
  let variant = null;
  if (value >= 50) {
    variant = "success";
  } else if (value < 50 && value >= 30) {
    variant = "warning";
  } else {
    variant = "danger";
  }
  return (
    <>
      <Percentage value={value}>{((value / max) * 100).toFixed(0)}%</Percentage>
      <ProgressBar now={value} max={max} min={min} variant={variant} />
    </>
  );
};

HealthBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
};

HealthBar.defaultProps = {
  max: 100,
  min: 0,
  value: 100,
};

export default HealthBar;
