# Weavy server

An ASP.NET Core application for hosting Weavy backend services.

## Prerequisites

The following is required to build and run the application.

* [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)
* [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or [PostgreSQL](https://www.postgresql.org/)

## Getting started

* Install the prerequisites mentioned above. 
* Create a new database on your database server (we suggest you call it `weavy`).
* Create a file named `appsettings.json` in the `src`. Add settings for database connection string and license:

*Example appsettings.json for connecting to a SQL Server database.*
```
{
  "ConnectionStrings": {
    "Weavy": "server=localhost;database=weavy;trusted_connection=true;"
  },
  "Weavy": {
    "License": "YOUR-LICENSE-KEY"
  }
}

```

*Example appsettings.json for connecting to a PostgreSQL database.*
```
{
  "ConnectionStrings": {
    "Weavy": "host=localhost;database=weavy;username=postgres;password=postgres;"
  },
  "Weavy": {
    "License": "YOUR-LICENSE-KEY"
  }
}

```

## Build and run

Open a terminal window in the `src` folder and run the following command:

`dotnet run`

That should be it. Open a browser and navigate to the endpoint displayed in the console window. If everything worked out you should see the Weavy logo on your screen.

## Create admin account

Next step is to create a local admin account for managing Weavy. Go to /admin/account and fill in the form to create an admin account and gain access to the /admin section where you can create API keys, view log files etc.
 
## Publish and deploy

To prepare Weavy for deployment you should run the `dotnet publish` command.
This compiles the app code and copies dependencies, configuration files, static assets, etc. into the `bin/Release/{TARGET FRAMEWORK}/publish` folder which you can now copy to your web server. 

For additional additional steps and details see https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy.

## Troubleshooting

If the application does not start, or if you get an error on startup, the console should contain an error message describing the problem.
You can also look at the files in the `logs`  folder. They usually contain valuable information on what went wrong. 
A common problem is missing or invalid configuration settings.

 
