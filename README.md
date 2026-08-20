# AWS Containerized Application CI/CD

Real deployable pipeline: GitHub -> GitHub Actions -> AWS OIDC -> ECR -> ECS Fargate -> ALB.

Terraform creates the AWS environment. GitHub Actions uses short-lived OIDC credentials, builds Docker, pushes to ECR and deploys to ECS.

## Setup
1. Create this repository on GitHub.
2. Copy `terraform/terraform.tfvars.example` to `terraform/terraform.tfvars`.
3. Set `github_org` and `github_repo`.
4. Run `cd terraform && terraform init && terraform validate && terraform apply`.
5. Copy the `github_actions_role_arn` Terraform output into GitHub:
   Settings -> Secrets and variables -> Actions -> New repository secret
   Name: `AWS_ROLE_ARN`
6. Push to `main`. The workflow deploys automatically.

## Important
The first ECS service needs an image. Terraform creates the ECR repository and uses the ECR `latest` image in the task definition. Push the first image using the workflow, then ECS will stabilize.

AWS resources cost money. Run `terraform destroy` when finished. Never commit credentials or terraform.tfvars.
