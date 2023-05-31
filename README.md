### 开发
```bash
    yarn
    yarn run dev
```


### 部署
```bash
    yarn run build:ext --name devops
    podman login docker.io
    cd extensions/devops
    podman build -t docker.io/xxx/xxx:xxx -f Dockerfile .
    podman push docker.io/xxx/xxx:xxx
```

    