# Weavy server

An ASP.NET Core application for hosting Weavy backend services.

## Prerequisites

The following is required to build and run the application.

* [.NET SDK](https://dotnet.microsoft.com/en-us/download)
* [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

 We also recommend installing [Visual Studio](https://visualstudio.microsoft.com/vs) with the ASP.NET and web development workloads.

## Getting started

* Install the prerequisites mentioned above. 
* Open SQL Server Management Studio and create a new database (we suggest you call it `weavy`).
* Create a file named `appsettings.json` in the `src` folder. Add settings for database connection string and license as described below:

```
{
  "ConnectionStrings": {
    "Weavy": "server=localhost;database=weavy;trusted_connection=true;trustservercertificate=true;"
  },
  "Weavy": {
    "License": "YOUR-LICENSE-KEY"
  }
}
```

## Build and run

Open a terminal window in the `src` folder and run the following command:

`dotnet run`

Alternatively, if you have Visual Studio installed, you can also open the `weavy-server.sln` file and select "Debug > Start Without Debugging" from the menu (or press `Ctrl+F5`) to build and run the application.

That should be it. Open a browser and navigate to the endpoint displayed in the console window. If everything worked out you should see the Weavy logo on your screen.

## Publish and deploy

To prepare Weavy for deployment you should run the `dotnet publish` command.
This compiles the app code and copies dependencies, configuration files, static assets, etc. into the `bin/Release/{TARGET FRAMEWORK}/publish` folder which you can now copy to your web server. 

For additional additional steps and details see https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy.

## Troubleshooting

If the application does not start, or if you get an error on startup, the console should contain an error message describing the problem.
You can also look at the files in the `logs`  folder. They usually contain valuable information on what went wrong. 
A common problem is missing or invalid configuration settings.

 
