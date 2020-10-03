variable "website_bucket_name" {
  default = "jimmywei.co.uk"
}

variable "aws_region" {
  default = "eu-west-2"
}

variable "acm_certificate_arn" {
  description = "ARN of the certificate for cloudfront"
  type = string
}