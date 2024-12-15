exports.handler = async () => {
  return {
    statusCode: 200,
    body: process.env.WEB3FORMS_ACCESS_KEY,
  };
};
