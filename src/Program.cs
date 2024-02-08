using System;
using Microsoft.AspNetCore.Builder;
using Serilog;
using Weavy.Core.Builder;

Log.Logger = new LoggerConfiguration().WriteTo.Console().CreateBootstrapLogger();
Log.Information("Starting up");
try {
    var builder = WebApplication.CreateBuilder(args);
    builder.AddWeavy(opts => opts
        .AddApi()
        .AddAdmin()
    );
    var app = builder.Build();
    app.UseWeavy();
    app.Run();
} catch (Exception ex) {
    Log.Fatal(ex, "Unhandled exception");
} finally {
    Log.Information("Shutdown complete");
    Log.CloseAndFlush();
}
