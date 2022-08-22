import { HpBar, Percentage } from "./HealthBarStyle";

const HealthBar = ({ healthBar, max, min }) => {
  return (
    <>
      <Percentage value={healthBar}>
        {((healthBar / max) * 100).toFixed(0)}%
      </Percentage>
      <HpBar value={healthBar} max={max} />
    </>
  );
};

HealthBar.defaultProps = {
  max: 100,
  min: 0,
  value: 100,
};

export default HealthBar;
