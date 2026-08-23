output "alb_url" {
  value = "http://${aws_lb.alb.dns_name}"
}

output "ecr_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "github_actions_role_arn" {
  value = aws_iam_role.gha.arn
}

output "ecs_cluster" {
  value = aws_ecs_cluster.c.name
}

output "ecs_service" {
  value = aws_ecs_service.svc.name
}