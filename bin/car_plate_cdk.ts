#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CarPlateCdkStack } from '../lib/car_plate_cdk-stack';

const app = new cdk.App();
new CarPlateCdkStack(app, 'CarPlateCdkStack');
