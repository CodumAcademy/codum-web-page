const getRemainingTime = deadline => {
  const now = new Date();
  const remainTime = (new Date(deadline) - now + 1000) / 1000;
  const remainMinutes = `0${Math.floor((remainTime / 60) % 60)}`.slice(-2);
  const remainHours = `0${Math.floor((remainTime / 3600) % 24)}`.slice(-2);
  const remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  };
};

export default getRemainingTime;
