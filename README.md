# Weavy Server

An ASP.NET Core MVC application for hosting Weavy server/backend services.

## Dev environment and tools

The following is required to build and run the application.

* [Visual Studio 2022](https://visualstudio.microsoft.com/vs) (Community edition) with ASP.NET and web devopment workload
* [SQL Server 2019](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (Developer edition)
* [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

## Getting started

* Install the tools above. 
* Open SQL Server Management Studio and create a new database (we suggest you call it `weavy`).
* Go to https://www.weavy.com and sign up (for free) to get a license key.
* Create a file named `appsettings.json` in the `src` folder. Add settings for database connection string and license as described below:

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

## Build and run

Open the `weavy-server.sln` file with Visual Studio. Then select "Debug > Start Without Debugging" from the menu (or press `Ctrl+F5`) to build and run the application.
If the application does not start, or if you get an error on startup, the console should contain an error message describing the problem.
