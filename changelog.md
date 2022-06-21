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
