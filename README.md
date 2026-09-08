# AWS Container CI/CD Pipeline

## Overview

This project demonstrates an end-to-end CI/CD pipeline for deploying a containerized web application on AWS. The application is packaged into a Docker image and automatically built, pushed to Amazon ECR, and deployed to Amazon ECS using GitHub Actions.

The infrastructure is provisioned and managed using Terraform, including AWS networking, ECS, ECR, load balancing, security groups, and supporting AWS resources.

GitHub Actions securely authenticates with AWS using IAM OIDC, eliminating the need to store long-term AWS access keys in GitHub. Whenever code is pushed to the `main` branch, the CI/CD pipeline automatically builds the latest Docker image, pushes it to ECR, updates the ECS service, and waits for the deployment to become stable.

## Architecture

**Developer → GitHub → GitHub Actions → AWS IAM OIDC → Docker → Amazon ECR → Amazon ECS → Application Load Balancer → Application**

## Key Technologies

* AWS ECS
* Amazon ECR
* Docker
* GitHub Actions
* AWS IAM & OIDC
* Terraform
* Amazon VPC
* Application Load Balancer
* Amazon RDS
* Git & GitHub

## Key Features

* Automated CI/CD deployment
* Containerized application using Docker
* Secure GitHub-to-AWS authentication using OIDC
* Automated Docker image build and ECR push
* Automated ECS service deployment
* Infrastructure as Code using Terraform
* AWS networking and security configuration
* Application deployment behind an Application Load Balancer
