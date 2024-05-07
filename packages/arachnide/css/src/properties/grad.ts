export const grad = (angle: number) => {
  if (angle < 0) {
    return 0;
  }

  if (angle > 180) {
    return 180;
  }

  return angle;
}
