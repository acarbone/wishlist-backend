import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from "aws-lambda";

module.exports.create = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>  => {
  // let body = qs.parse(event.body);
  // let payload = JSON.parse(body.payload);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Ciaooo!'
      },
      null,
      2
    ),
  };
};
