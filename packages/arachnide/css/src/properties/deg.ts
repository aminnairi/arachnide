export const deg = (angle: number) => {
  if (angle < 0) {
    return 0;
  }

  if (angle > 360) {
    return 360;
  }

  return angle;
};
