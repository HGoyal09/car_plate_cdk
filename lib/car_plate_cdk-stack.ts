import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class CarPlateCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let car_plate_lambda = new lambda.Function(this, 'car_plate_recog', {
      functionName: "car_plate_recog_cdk",
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: 'hello.handler'
    })
  }
}
