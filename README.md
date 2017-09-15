# react-webpack-docker

### Prepare

#### Install Docker for Mac
https://docs.docker.com/docker-for-mac/

#### Install homebrew
http://brew.sh/index_ja.html

#### Install docker-sync

```sh
$ gem install docker-sync
$ brew install unison
```

### Build docker image

```sh
$ docker-compose build
```

### Run docker image

```sh
$ docker-sync start
$ docker-compose up
```

or

```sh
$ docker-sync-stack start
```

### Then

Access http://localhost:8080
