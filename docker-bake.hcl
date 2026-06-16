group "default" {
  targets = ["app"]
}

target "app" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["rpg-name-generator:bake-test"]
  cache-from = ["type=gha"]
  cache-to = ["type=gha,mode=max"]
}