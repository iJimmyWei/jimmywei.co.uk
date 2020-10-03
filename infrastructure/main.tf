terraform {
  backend "s3" {
    bucket = "terraform-state-jimmywei.co.uk"
    key    = "default-infrastructure"
    region = "eu-west-2"
  }
}