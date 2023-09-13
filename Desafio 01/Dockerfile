FROM golang:1.19 as build

WORKDIR /app

COPY ./hello.go .

RUN go build hello.go

# -----------------------
FROM scratch

WORKDIR /app

COPY --from=build /app .

CMD ["./hello"]