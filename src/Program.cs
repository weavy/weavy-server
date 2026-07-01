using System;
using Microsoft.AspNetCore.Builder;
using Serilog;
using Weavy.Core;
using Weavy.Core.Builder;
using Weavy.Admin.Builder;

namespace Weavy;

public class Program {
    public static void Main(string[] args) {
        Log.Logger = new LoggerConfiguration().WriteTo.Console().CreateBootstrapLogger();
        try {
            var builder = WebApplication.CreateBuilder(args).AddWeavy(opts => opts.AddApi().AddAdmin());
            var app = builder.Build();
            app.UseWeavy();
            app.RunWeavy();
        } catch (Exception ex) {
            Log.Fatal(ex, "Unhandled exception during startup");
        } finally {
            Log.CloseAndFlush();
        }
    }
}
