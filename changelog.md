# Changelog for Weavy

## v18.0.1

<time>2023-10-04</time>

* Fixed some performance issues in uikit-react when scrolling and having many items.

## v18.0.0

<time>2023-10-03</time>

* Added API endpoints for listing comments, files, messages and posts.
* Added API endpoints for creating, updating and deleting user directories.
* Fixed occasional NullReferenceException in DateUtils.TimeZone.
* Weavy Pro is required for attachments.

## v17.2.1

<time>2023-08-30</time>

* Added option for automatic database migrations.

## v17.2.0

<time>2023-08-18</time>

* Fixed bug where name wasn't saved when creating chat room.
* Fixed some issues with pdfjs.
* Fixed some issues with chat in uikit-react.
* Fixed an issue when creating web components in uikit-js.
* Updated dependencies in uikit-js and uikit-react.
* Updated dependencies in ACME projects.

## v17.1.0

<time>2023-06-22</time>

* Exposed proper initialize and build promises in uikit-js.
* Exposed console logging options in uikit-js.
* Fixed missing version warning in logs when using uikit-js.
* Updated editor dependencies in uikit-js.
* Removed unused static methods in uikit-js.

## v17.0.4

<time>2023-06-09</time>

* Fixed some issues for css styling of apps in uikit-js via *custom elements*.

## v17.0.3 

<time>2023-06-02</time>

* Fixed some issues with HTML attributes in uikit-js using *custom elements*.
* Fixed some issues when configuring uikit-js.
* Fixed some issues with the Message API page in weavy-js-dotnet example app.

## v17.0.2 

<time>2023-05-17</time>

* Fixed some issues for HTML styling of apps in uikit-js via *custom elements*. 

## v17.0.1 

<time>2023-05-16</time>

* Fixed some issues for HTML creation of apps in uikit-js via *custom elements*. 

## v17.0.0 

<time>2023-05-10</time>

* Added support for HTML creation of apps in uikit-js via *custom elements*. 
* Changed syntax for configuration and app creation in uikit-js.
* Changed uikit-js module support from UMD to ESM, CJS and browser.
* Removed open/close functionality on apps in uikit-js.
* Removed support for deeplinks, navigation-flow and plugins in uikit-js.
* Fixed issue where searching for users across directories returned no result.

###### Breaking changes

* Dropped support for UMD/AMD module import in uikit-js in favor for modern ESM/CJS modules and browser bundle. Consider using a javascript transpiler for legacy module support.
* uikit-js browser bundle is renamed to `weavy.js`.
* New syntax for configuration and app creation in uikit-js.

###### Upgrade instructions for uikit-js

**See *Getting started* in Weavy docs for detailed instructions.**

* Change any CDN `<script>` links to end with `weavy.js` instead of `weavy-dropin.js`.
* Change any module import to `import { Weavy, Messenger, Chat, Posts, Files } from "@weavy/dropin-js";`.
* Change Weavy instantiation and options from `new Weavy({ url: value, tokenFactory: fn() })` to `Weavy.url = value; Weavy.tokenFactory = fn()`.
* Change contextual app creation from `weavy.app({ uid: value, container: element })` to `element.append(new Posts({ uid: value }))`. Available app classes are `new Posts()`, `new Chat()` and `new Files()`.
* Change non-contextual app creation from `weavy.app({ type: "messenger", container: element })` to `element.append(new Messenger())`.
* Any open/close app handling needs to be replaced with handling in your own UI.
* *Delayed app opening* is replaced with *delayed app loading* using the `{ load: false }` option together with the `app.load()` method.

###### Upgrade instructions for self-hosting

* Delete the /index folder containing the fulltext index (it will be re-created on startup).

## v16.0.2 

<time>2023-03-20</time>

* Fixed issues with styling in uikit-js.
* Fixed issues with fonts in uikit-js.

## v16.0.1 

<time>2023-03-13</time>

* Fixed issues with styling in uikit-js.

## v16.0.0 

<time>2023-03-06</time>

* Added `/api/users/:uid/sync` endpoint for syncing profile data.
* Added possibility to set tags on Comments, Messages, and Posts via Web API.
* Fixed issue with `snake_cased` query string parameters not being accepted in requests to the Web API.
* Fixed issues with icons in react.
 
###### Breaking changes

* The `/api/users/:uid:/tokens` endpoint is no longer used to sync profile data. You can instead use the `/api/users/:uid/sync` endpoint.

###### Upgrade instructions (self-hosting)

* Delete the /index folder containing the fulltext index (it will be re-created on startup).
* Backup and update your database schema by following the instructions when Weavy starts up.

## v15.0.1 

<time>2023-01-13</time>

* Fixed a problem with license registration being skipped when self-hosting Weavy.

## v15.0.0 

<time>2022-12-21</time>

* Added Posts app (activity feed) with embeds, polls, comments and reactions to React UI-kit.
* Added Files app to React UI-kit with support for uploading and previewing multiple file types.
* Added many new API endpoints for managing comments, files, posts, users etc. 

## v14.0.4 

<time>2022-11-28</time>

* Fixed CORS policy exception for static files when AllowedOrigins property was not set.

## v14.0.3 

<time>2022-11-18</time>

* Fixed autocomplete error in Safari causing Messenger and Chat to fail in drop-in UI.
* Fixed incorrect result when searching users and ordering by name.

## v14.0.2 

<time>2022-11-10</time>

* Fixed incorrect origin for filebrowser when placed in frames in dropin-js and uikit-react.
* Fixed incorrect layout for preview toolbar in uikit-react.

## v14.0.1 

<time>2022-11-08</time>

* Fixed incorrect origin for filebrowser when placed in frames in dropin-js.
* Fixed error with MutationObserver in uikit-react.
* Improved loading performance in uikit-react.

## v14.0.0 

<time>2022-11-02</time>

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

###### Breaking changes

* New event names for hooks.
* New subscription mechanism and event names for realtime events (websockets).
* Removed dynamic loading using `stylesheet` option in dropin-js.

###### Upgrade instructions (self-hosting)

* Delete the /index folder containing the fulltext index (it will be re-created on startup).
* Backup and update your database schema by following the instructions when Weavy starts up.

## v13.0.0 

<time>2022-09-07</time>

* New authentication mechanism using server generated access tokens instead of self signed JWTs.
* Added complete file preview in uikit-react.
* Improved file preview with syntax highlighting for supported file types.
* Improved file preview with Markdown rendering for .md files.
* Changed property app.id to app.uid in dropin-js.
* Removed quick app select syntax in dropin-js. Apps can now only be selected using options instead of passing a string.

###### Breaking changes

The authentication mechanism has changed in Weavy v13. In previous versions, authentication was handled using identity providers and self signed JSON Web Tokens (JWT). 
This has been replaced with api keys and access tokens. All authentication implementations made for earlier versions needs to be updated in order to incorporate the new authentication mechanisms.

###### Upgrade instructions (self-hosting)

* Delete the /index folder containing the fulltext index (it will be re-created on startup).
* Backup and update your database schema by following the instructions when Weavy starts up.

*When upgrading to v13 the `iss` and `sub` claims on your existing users will be concatenated and used as `uid`. 
For example, a user with `iss=myissuer` and `sub=6783` will get `uid=myissuer|6783` after the upgrade.*

## v12.1.0 

<time>2022-08-16</time>

* Published missing Weavy.Api nuget package.
* Removed @weavy/themes dependency.

## v12.0.1 

<time>2022-08-05</time>

* Fixed invalid relative path in @weavy/themes.

## v12.0.0 

<time>2022-08-04</time>

* Added Files app to Drop-in UI with support for uploading and previewing multiple file types.
* Removed the need to add a default stylesheet in Drop-in UI (default styles are now built-in).
* Added syntax highlighting to code snippets in chat messages.

## v11.2.0 

<time>2022-07-06</time>

* Moved uikit-react options from MessengerProvider to WeavyProvider.
* Fixed uikit-react cloud file picker overlay incorrect position.
* Overlay scrollbars for uikit-react.

## v11.1.0 

<time>2022-06-21</time>

* Removed the need for reboot stylesheet in uikit-react.
* Updated documentation.
* Changed name of url parameter for WeavyClient() in uikit-react.
* Fixed some styling in uikit-react and Weavy.Dropin.
* Fixed a bug in uikit-react when switching between conversations and the wrong page of messages was displayed

## v11.0.1 

<time>2022-06-13</time>

* Added database compatibility level check for SQL Azure.

## v11.0.0 

<time>2022-06-13</time>

* Added Weavy REST API.
* Added Weavy UI-kit for React.
* Moved CSS stylesheets to @weavy/themes package.

## v10.1.1 

<time>2022-05-30</time>

* Fixed errors when removing an app in dropin-js.

## v10.1.0 

<time>2022-05-05</time>

* Enabled config for allowed origins for postal in Weavy.Dropin.
* Improved error handling for stylesheet loading in dropin-js.
* Improved error handling for JWT tokens in dropin-js.

## v10.0.6 

<time>2022-04-29</time>

* Improved SystemJS compatibility for dropin-js.

## v10.0.5 

<time>2022-04-29</time>

* Fixed some issues with CORS configuration.

## v10.0.4 

<time>2022-04-27</time>

* Added support for OpenID Connect Discovery when JWT issuer does not contain scheme/protocol, e.g. accounts.google.com.

## v10.0.3 

<time>2022-04-08</time>

* Fixed stylesheet loading in dropin-js when using style-nodes in Firefox and Safari. 

## v10.0.2 

<time>2022-04-06</time>

* Fixed stylesheet loading error in dropin-js when using CORS. 

## v10.0.1 

<time>2022-03-18</time>

New major release of Weavy where the backend has been ported from .NET Framework to .NET Core. 
This release only contains the Messenger app. Other apps and features will arrive in future releases.
Upgrading from previous versions of Weavy is not yet supported.


The Weavy backend code has been ported to .NET Core. We still uses some APIs that are only available on Windows but cross-platform support is in progress.

The drop-in UI has been rewritten and is published to npmjs.org for easier installation and integration.
