resource "aws_s3_bucket" "website" {
  bucket = var.website_bucket_name
  acl    = "public-read"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name        = "Website"
    Environment = "production"
  }

  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
        "Sid": "PublicReadForGetBucketObjects",
        "Effect": "Allow",
        "Principal": {
            "AWS": "*"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::${var.website_bucket_name}/*"
        }
    ]
}
    EOF

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

# AWS S3 bucket for www-redirect
resource "aws_s3_bucket" "website_redirect" {
  bucket = "www.${var.website_bucket_name}"
  acl    = "public-read"

  website {
    redirect_all_requests_to = var.website_bucket_name
  }
}