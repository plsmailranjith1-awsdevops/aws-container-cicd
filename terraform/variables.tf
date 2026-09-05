variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "aws-container-cicd"
}

variable "container_port" {
  description = "Application container port"
  type        = number
  default     = 3000
}