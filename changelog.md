# Weavy 14.0.0 (2022-11-02)

* Added Posts app (activity feed) with embeds, polls, comments and reactions to drop-in UI.
* Added sidebar with comments and versions to the Files app.
* Added grid view with thumbnails to Files app.
* Added webhooks.
* Added API endpoint for updating users.
* Added CSS custom properties for easier styling.
* Fixed issue with missing glyphs when previewing some files with East Asian encoding.
* Fixed issue with `tz` (timezone) option not being applied in the drop-in UI.
* Optimized fulltext index.
* Updated visual style with full support for dark mode.

## Breaking changes

* New event names for hooks.
* New subscription mechanism and event names for realtime events (websockets).
* Removed dynamic loading using `stylesheet` option in dropin-js.

## Upgrade instructions

* Delete the /index folder containing the fulltext index (it will be re-created on startup).
* Backup and update your database schema by following the instructions when Weavy starts up.

# Weavy 13.0.0 (2022-09-07)

The authentication mechanism has changed in Weavy v13. 
In previous versions, authentication was handled using identity providers and self signed JSON Web Tokens (JWT). 
This has been replaced by server generated access tokens. 

We also present a fully featured file preview in uikit-react. 
You are now able to preview images, videos, pdf, office, google drive, markdown, code and more.

## Breaking changes

All authentication implementations made for earlier versions needs to be updated in order to incorporate the new authentication mechanisms. 

Refer to these articles for more information: 

* [Drop-in UI authentication](https://weavy.com/docs/frontend/drop-in/authentication)
* [React UI kit authentication](https://weavy.com/docs/frontend/uikit-react/authentication)
* [Web API authentication](https://www.weavy.com/docs/backend/api/authentication)

## Changelog

* New authentication mechanism using server generated access tokens instead of self signed JWTs.
* Added complete file preview in uikit-react.
* Improved file preview with syntax highlighting for supported file types.
* Improved file preview with Markdown rendering for .md files.
* Changed property app.id to app.uid in dropin-js.
* Removed quick app select syntax in dropin-js. Apps can now only be selected using options instead of passing a string.

## Upgrade instructions

* Delete the /index folder containing the fulltext index (it will be re-created on startup).
* Backup and update your database schema by following the instructions when Weavy starts up.

> When upgrading to v13 the `iss` and `sub` claims on your existing users will be concatenated and used as `uid`. 
> For example, a user with `iss=myissuer` and `sub=6783` will get `uid=myissuer|6783` after the upgrade. 

# Weavy 12.1.0 (2022-08-16)

* Published missing Weavy.Api nuget package.
* Removed @weavy/themes dependency.

# Weavy 12.0.1 (2022-08-05)

* Fixed invalid relative path in @weavy/themes.

# Weavy 12.0.0 (2022-08-04)

* Added Files app to Drop-in UI with support for uploading and previewing multiple file types.
* Removed the need to add a default stylesheet in Drop-in UI (default styles are now built-in).
* Added syntax highlighting to code snippets in chat messages.

# Weavy 11.2.0 (2022-07-06)

* Moved uikit-react options from MessengerProvider to WeavyProvider.
* Fixed uikit-react cloud file picker overlay incorrect position.
* Overlay scrollbars for uikit-react.

# Weavy 11.1.0 (2022-06-21)

* Removed the need for reboot stylesheet in uikit-react.
* Updated documentation.
* Changed name of url parameter for WeavyClient() in uikit-react.
* Fixed some styling in uikit-react and Weavy.Dropin.
* Fixed a bug in uikit-react when switching between conversations and the wrong page of messages was displayed

# Weavy 11.0.1 (2022-06-13)

* Added database compatibility level check for SQL Azure.

# Weavy 11.0.0 (2022-06-13)

* Added Weavy REST API.
* Added Weavy UI-kit for React.
* Moved CSS stylesheets to @weavy/themes package.

# Weavy 10.1.1 (2022-05-30)

* Fixed errors when removing an app in dropin-js.

# Weavy 10.1.0 (2022-05-05)

* Enabled config for allowed origins for postal in Weavy.Dropin.
* Improved error handling for stylesheet loading in dropin-js.
* Improved error handling for JWT tokens in dropin-js.

# Weavy 10.0.6 (2022-04-29)

* Improved SystemJS compatibility for dropin-js.

# Weavy 10.0.5 (2022-04-29)

* Fixed some issues with CORS configuration.

# Weavy 10.0.4 (2022-04-27)

* Added support for OpenID Connect Discovery when JWT issuer does not contain scheme/protocol, e.g. accounts.google.com.

# Weavy 10.0.3 (2022-04-08)

* Fixed stylesheet loading in dropin-js when using style-nodes in Firefox and Safari. 

# Weavy 10.0.2 (2022-04-06)

* Fixed stylesheet loading error in dropin-js when using CORS. 

# Weavy 10.0.1 (2022-03-18)

New major release of Weavy where the backend has been ported from .NET Framework to .NET Core. 

This release only contains the Messenger app. Other apps and features will arrive in future releases.

Upgrading from previous versions of Weavy is not yet supported.

## Weavy backend

The Weavy backend code has been ported to .NET Core. We still uses some APIs that are only available on Windows but cross-platform support is in progress.

## Weavy drop-in UI

The drop-in UI has been rewritten and is published to npmjs.org for easier installation and integration.
