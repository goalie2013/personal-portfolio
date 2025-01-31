#!/bin/bash
# deploy-aws.sh

# Build the project
echo "Building the React application..."
npm run build

# Upload assets first (with cache configuration)
echo "Uploading assets..."
aws s3 sync dist/assets s3://gg-portfolio-site/assets \
  --cache-control "max-age=31536000" \
  --delete

# Upload index.html (without caching)
echo "Uploading index.html..."
aws s3 cp dist/index.html s3://gg-portfolio-site/index.html \
  --cache-control "no-cache" \
  --content-type "text/html"

# Upload other files
echo "Uploading remaining files..."
aws s3 sync dist s3://gg-portfolio-site \
  --exclude "assets/*" \
  --exclude "index.html" \
  --delete

echo "Deployment complete!"