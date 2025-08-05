var builder = DistributedApplication.CreateBuilder(args);


var redis = builder.AddRedis("redis");
var rabbit = builder.AddRabbitMQ("rabbit");
var postgres = builder.AddPostgres("postgres").WithPgAdmin()
    .WithAnnotation(new ContainerImageAnnotation
    {
        Image = "ankane/pgvector",
        Tag = "latest"
    });

var telegramdb = postgres.AddDatabase("telegramdb"); // telegramdb == 연결 문자

builder.AddProject<Projects.WebApp>("webapp")
    .WithReference(telegramdb);

builder.Build().Run();
