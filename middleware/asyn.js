export const asynWrapper = (fn) => {
  return async (req, res, next) => {
    console.log("!!!!!!!!!", next || "no next");
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
