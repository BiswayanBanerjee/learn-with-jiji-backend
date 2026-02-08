export const validateQuery = (req, res, next) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Query is required"
    });
  }

  next();
};
