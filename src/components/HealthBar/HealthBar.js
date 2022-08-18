import { HpBar, Percentage } from "./HealthBarStyle";

const HealthBar = ({ value, max, min }) => {
  return (
    <>
      <Percentage value={value}>{((value / max) * 100).toFixed(0)}%</Percentage>
      <HpBar value={value} max={max} />
    </>
  );
};

HealthBar.defaultProps = {
  max: 100,
  min: 0,
  value: 50,
};

export default HealthBar;
