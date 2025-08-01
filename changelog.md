# Changelog for Weavy

## v29.2.0

<time>2025-07-09</time>

* Added option to enable `web_search` for agents, allowing them to answer questions with up-to-date information beyond their knowledge cutoff.
* Added option to set `max_tokens` for agents, allowing you to specify the maximum number of output tokens an agent can generate.
* Added api endpoints for managing agent functions, allowing agents to interface with external API endpoints.
* Added api endpoint `PUT /api/agents/{agent}` for upserting agents.
* Added `annotation` setting on components in UI kit. Set `annotations="none"` to disable annotation display.
* Added `contextualData` string property on contextual components in UI kit.
* Deprecated `data` property on contextual components in UI kit. Use `contextualData`instead.
* Fixed an issue when changing `agent` in `wy-copilot` in UI kit.

## v29.1.0

<time>2025-06-19</time>

* Read receipts and typing indicators is now fully available to all chats with `access=none` and less than 10 members.
* Added support for object data in the context data property array in UI kit.
* Added support for displaying annotations in posts and comments in UI kit.
* Fixed some issues where context data wasn't working in posts and comments.
* Fixed some issues which caused a broken state when removing a conversation in UI kit.
* Fixed some issues with unread chat messages in UI kit.

## v29.0.0

<time>2025-06-11</time>

* Added option for agents to interface with external services via web functions.
* Allow agents to search multiple file apps for knowledge.
* Fixed issue that prevented the `tags` property from being updated through the Web API.
* Added annotation file list for messages in UI kit.
* Added support for displaying agent comments in UI kit.
* Added `createConversation()` method on Messenger in UI kit.
* Added a `wy-conversation-new-button` CSS part in Messenger for styling the new conversation button.
* Added a `conversation-new` slot in the Messenger to replace the new conversation button.
* Added an `actions` slot on Messenger for inserting custom buttons.
* Added `reset()` method on the Weavy instance in UI kit to reset and refetch data.
* Removed the conversation list header for the Messenger.
* Removed the `.name` property on Messenger in UI kit.
* Removed the generic `agentUser` data property in UI kit.
* Fixed an issue with searching in the conversation list in Messenger.
* Fixed an issue with the editor being read-only in UI kit.
* Fixed some issues when changing user in UI kit.

###### Breaking Changes

* The header in UI of the Messenger is now removed. This means you have to specify a header of your own in your app if you like.

## v28.0.2

<time>2025-05-21</time>

* Fixed an issue when browser storage is unavailable in UI kit.

## v28.0.1

<time>2025-05-15</time>

* Fixed an issue with initializing apps in UI kit.

## v28.0.0

<time>2025-05-14</time>

* Added AI agents with file search capabilities.
* Added `data` property to provide contextual data for agents in all Weavy components in UI kit.
* Added support for app id in `uid` property for contextual Weavy components in UI kit.
* Added `uikit-react` dist files to the backend.
* Added `placeholder` property to `<wy-comments>`, `<wy-chat>`, `<wy-copilot>`, `<wy-messenger>` and `<wy-posts>`.
* Renamed Bots API to Agents API, i.e. `/api/bots` is now `/api/agents`.
* Renamed `bot` property to `agent` when listing users in the Users API.
* Renamed `is_bot` property to `is_agent` when returning users in the Users API.
* Renamed `bot` property to `agent` for `<wy-messenger>` and `<wy-copilot>` in UI kit.
* Renamed `bot` property to `agent` in the `wy-link` event in UI kit.
* Renamed `bot` property to `agent` in the `wy-message` event in UI kit.
* Renamed `MessengerBotTypes` map to `MessengerAgentTypes` in UI kit.
* Renamed `bot_chat` app type to `agent_type` in UI kit.
* Fixed an issue with editor autocomplete in UI kit.
* Fixed an issue with conversation naming in UI kit.
* Fixed incorrect filenames for UMD files in `uikit-react`.

###### Breaking Changes

* The Bots API is now renamed to the Agents API. All names that previously used `bot` in the name now use `agent` in the name instead. This affects all API:s.

## v27.1.3

<time>2025-04-29</time>

* Fixed an issue with polls not being updated when voting in UIKit.
* Fixed an issue with media previews playing in background in UIKit.

## v27.1.2

<time>2025-04-29</time>

* Fixed an issue when changing `uid` in the `wy-posts` component.
* Fixed some issues with async handling in UIKit.
* Improved loading performance in `wy-chat`, `wy-comments`, `wy-messenger` and `wy-posts`.

## v27.1.1

<time>2025-04-15</time>

* Fixed an issue with layout for the comments panel in previews.
* Fixed an issue with deleting webhooks.
* Fixed an issue with `app.name`not being properly updated when changing `uid`.
* Fixed an issue with not being able to set `conversationId` in `wy-messenger`.

## v27.1.0

<time>2025-04-05</time>

* Fixed an issue with app name property not being registered from UIKit.
* Made the `wy-app` event available generally in all contextual Weavy components.
* Improved some event types.

## v27.0.0

<time>2025-03-27</time>

* Added Bots API for managing chat bots
* Added `<wy-copilot>` component for contextual conversations with chat bots.
* Added method to remove a user's copy of a private chat.
* Added `features` property to uikit components.
* Added feature option to enable typing indicators and read receipts on the `<wy-chat>` component.
* Added `reactions` property to configure reactions on individual components or on the `<wy-context>`.

###### Breaking Changes

* Bots are no longer managed via the Users API. You should use the dedicated Bots API instead.
* Changed how features are toggled ui the kit. Features are now opt-in using a single `features` property with a space separated list of features. It defaults to a predefined set of features when not configured. This replaces the previous opt-out properties. 
* The `<wy-comments>` component now defaults to having the meetings feature disabled. Enable it by configuring the `features` property.
* Custom reactions are now configured by setting the `reactions` property to a space separated string of unicode emojis.
* Removed unused `is_suspended` property from users.
* Removed the redundant `display_name` property from users and apps. Use the `name` property instead.
* Replaced `directory_id` with `directory.id` in JSON responses. 

## v26.0.3

<time>2025-02-20</time>

* Fixed missing `selectConversation()` in Messenger.
* Deprecated `selectConversation()` and `clearConversation()` in Messenger. Use `conversationId` instead.
* Deprecated `conversationBelongsToMessenger()` in Messenger. Use `MessengerTypes` Map for app comparison instead.

## v26.0.2

<time>2025-02-17</time>

* Fixed an issue with the `wy-link` event not triggering sometimes for notification toasts in uikit-web.

## v26.0.1

<time>2025-02-06</time>

* Updated weavy-server hosting package to include uikit-web dist files.

## v26.0.0

<time>2025-02-03</time>

* Updated backend code and runtime to .NET 9.0.
* All contextual weavy components now support switching to empty `uid` in uikit-web.
* Added React 19 support using both React components and Web Components in uikit-react.
* Event names in uikit-web are now named using kebab-case for better compatibility with frameworks supporting web components.
* Added `--wy-font-monospace` CSS variable for code blocks font family.
* Added `--wy-transition-reveal-duration` CSS variable for delayed revealing transitions.
* Added `wy-preview-open` and `wy-preview-close` events in uikit-web.
* Added `wy-notification` event on the `<wy-notification-toasts>` component with details from incoming notifications. The event can prevent default notifications from showing. Default notifications can also be hidden using the `appearance="none"` property on the component.
* Improved code highlighting in the editor in uikit-web.
* Improved read receipts for Messenger in uikit-web.
* Notification toasts are now only showed when the corresponding Weavy component isn't visible.
* Fixed some graphic issues with dropdowns in uikit-web.
* Fixed not being able to remove failed uploads in wy-files in uikit-web.
* Fixed some issues with comments in wy-files.
* Fixed some issues with loading states in weavy components.
* Fixed an issue with keyboard navigation in preview.
* Fixed some issues when changing user in uikit-web.
* Multiple UI improvements, performance improvements and fixes in the uikit-web.

###### Breaking Changes

* Removed the Conversations API (`/api/conversations`). All relevant actions have been merged into the Apps API (`/api/apps`). 
  One important thing to note is that the *Create app* endpoint requires the app `type` to be specified, whereas the *Create conversation* endpoint could automatically infer the `type`.
* Removed the `contextual` parameter from the `/api/apps` endpoint. To find apps of a specific type you can specify the `type` parameter.
* Changed the `wy:link` event name to `wy-link`. The event detail now includes `event.detail.source` data for simplified routing. Previous link `event.detail` data is available in `event.detail.link`.
* Changed the `wy:notifications` event name to `wy-notifications`.
* Changed the `AppTypes` map to `AppTypeGuids` map and `AppTypeStrings` map which now contain all available app types.
* Renamed the `ConversationTypes` map to `MessengerTypes` and `MessengerBotTypes` in uikit-web.
* Renamed the `conversation_marked` event  to `app_marked`.
* Renamed the `version` property on files to `rev`.
* Removed the deprecated `/api/apps/init` endpoint.
* Removed the header in the UI for the Notifications component.
* Removed the deprecated Confluence components.

## v25.2.0

<time>2024-12-10</time>

* Added support for passing `null` values in options when configuring Weavy in uikit-web.
* Additional types exported in uikit-web.
* Added dependency list parameter in `useWeavy()` hook in uikit-react.
* Added autoscaling on resize for PDF Viewer.
* Fixed in-app notifications displaying incorrect data during app load in uikit-web.
* Fixed opened notification links were not being cleared when reusing app components in uikit-web.
* Fixed Shift-Enter new line in wrong place for the editor in uikit-web.
* Fixed some styling issues with overlays.
* Adjusted layout for notifications in uikit-web.
* Improved handling of empty and unchanged tokens for the `tokenFactory` in uikit-web.
* Confluence components are now deprecated.

## v25.1.0

<time>2024-11-12</time>

* Added possibility to have multiple `useWeavy()` hooks with unified config in uikit-react.
* Improved cache busting in uikit-web.

## v25.0.0

<time>2024-10-29</time>

* Fixed popover backwards compatibility for legacy browsers in Windows 8.
* Fixed problem with specifying long url as profile picture.
* Fixed an issue with realtime registration when enabling notification events.
* Added feature config for individual meeting providers.
* Added export forwarding of all uikit-web types under the `WeavyTypes` namespace in uikit-react.

###### Breaking Changes

* Removed the `noMeetings` attribute in uikit-web in favor of `noZoomMeetings`, `noMicrosoftTeams` and `noGoogleMeet`.
* Moved all exports of sub components to the `WeavyComponents` namespace in uikit-web and uikit-react. Use `import { WeavyComponents } from "@weavy/uikit-web";` to reach the sub components.
* Removed the deprecated and unused `zoomAuthenticationUrl`. See docs for Zoom configuration.

## v24.4.1

<time>2024-09-26</time>

* Fix for incorrect conversation height in Messenger when using Webkit/Chrome.

## v24.4.0

<time>2024-09-19</time>

* Added `weavy.fetch()` for working with data in the Web API using uikit-web.
* Deprecated `weavy.get()` and `weavy.post()` which are replaced by `weavy.fetch()`.
 
## v24.3.1

<time>2024-09-17</time>

* Fixed some styling issues with input height.

## v24.3.0

<time>2024-09-16</time>

* Added export of `WyNotificationsEventType` and `WyLinkEventType` in uikit-react.
* Added export of `WeavyContext` context definition in uikit-web to be used with Context Community Protocol by the W3C's Web Components Community Group.
* Added `WeavyContext` in uikit-react to be used with React Context API.
* Added `useWeavyContext()` hook in uikit-react for using Context Community Protocol with uikit-web context definitions.

## v24.2.0

<time>2024-09-10</time>

* Added export of `ConversationTypes` and `AppTypes`` in uikit-react.
* Fixed an issue where the pdf viewer was only loading when cached.

## v24.1.0

<time>2024-08-29</time>

* SSR hydration compatibility for uikit-web and uikit-react.
* Fixed an issue in uikit-web where conversations wasn't scrolled to bottom when invisible.

## v24.0.4

<time>2024-08-23</time>

* Fixed an issue where realtime connection wasn't started sometimes.
* Fixed some slow running database queries that could cause request timeouts under certain conditions.
* Fixed the `--wy-font-family` CSS variable.
* Fixed an issue where infinite scrolling wasn't working properly after using notifications.

## v24.0.3

<time>2024-08-15</time>

* Fixed some issues with component initialization, affecting realtime mainly in Messenger.
* Fixed some issues with the "New messages" label in Messenger.

## v24.0.2

<time>2024-07-18</time>

* Fixed some performance issues when searching for users.

## v24.0.1

<time>2024-07-12</time>

* Fixed incorrect positioning of modals in uikit-web.
* Fixed incorrect height on "New messages" badge in uikit-web.
* Fixed an issue with z-index stacking order in uikit-web.

## v24.0.0

<time>2024-07-10</time>

* Added `<wy-notifications>` component to view and manage notifications.
* Added `<wy-notification-toasts>` component to show notification toasts and native browser notifications.
* Added `wy:notifications` event to listen to realtime notifications. Enable notification events by setting the `notificationEvents` property on the Weavy context.
* Added `wy:link` event to handle navigation when interacting with notifications.
* Added `name` property to all contextual blocks, which will set the display name for the app. The name is widely used in notification texts and falls back to the `uid` when not set.
* Added Google Meet integration.
* Added Microsoft Teams integration.
* Fixed an issue when removing attributes on wy-context.
* Fixed an issue with the user presence indicator not being updated.
* Fixed some issues with realtime subscribe/unsubscribe.
* Fixed some issues with exports and compatibility the uikit-react package.
* Changed modals to use the Popover API. This removes the need for the `submodals` property on blocks and the `modalParent` property on the Weavy context.

###### Breaking Changes

* Removed realtime events `wy:*` on all blocks in uikit-web. Use the `wy:notifications` event for realtime updates instead.

## v23.4.0

<time>2024-06-27</time>

* Fixed an issue with mention suggestion list not being visible in the message editor.
* Fixed some issues with dropdowns not being visible or being positioned correctly.
* Fixed an issue with realtime comments not showing in wy-comments.
* Fixed an issue with Weavy context not being configured properly in acme-web sample project.
* Fixed some issues with layout in acme-web sample project.

## v23.3.0

<time>2024-06-24</time>

* Improved logging.


## v23.2.1

<time>2024-06-19</time>

* Fixed some issues with the typing indicator in Messenger.

## v23.2.0

<time>2024-06-17</time>

* Added support for defining height on all blocks.
* Added wy-conversation-new part in css.
* Fixed an authentication issue that prevented Microsoft Office from opening documents via WebDAV.
* Fixed an issue where it was not possible to add more members to an app.
* Fixed an issue with truncating text in the title in Messenger.
* Fixed an issue with empty states not showing correctly.

## v23.1.1

<time>2024-06-12</time>

* Fixed an issue with dynamic imports in weavy.js.
* Fixed incorrect position of presence indicator in Messenger.

## v23.1.0

<time>2024-05-31</time>

* Improved typing indicator in conversations.
* Fixed an issue in uikit-web where it was not possible to create conversations in Safari.
* Fixed an issue where Messenger was scrolling the document when closing a conversation.
* Updated pdfjs to v4.3.136.
 
## v23.0.0

<time>2024-05-24</time>

* Added support for claude.ai chat bots
* Added support for kapa.ai chat bots
* Added properties for disabling features in uikit-web, e.g. `noReactions` to disable reactions.
* Added compatibility with React Server Components in uikit-react.
* Added endpoint for listing all votes on a poll.
* Added CSS variable `--wy-padding` for spacing inside elements.
* Added CSS variable `--wy-gap` for spacing between elements.
* Added CSS variable `--wy-border` for border widths.
* Added CSS variables for fine-tuned customization on many components
* Added CSS Shadow Parts for some components to support external styling.
* Added possibility to set group avatar in Messenger chat rooms.
* Added bot filtering in user search.
* Fixed some issues when closing previews and modals.
* Optimized Web API for performance and consistency. 
* Deprecated `features` property on apps in favor of feature-disabling properties.
* Deprecated `zoomAuthenticationUrl` in favor of environment configured Zoom settings.

###### Breaking changes

* Changed all non-normal font weights to `bolder` for better custom font compatibility.
* Changed design of input fields with buttons to be visually separate instead of being combined for simpler styling. The previous design can be achieved through customization.
* Changed `--wy-border-radius` to affect all rounded components.
* Changed `--wy-font-size` to follow `--wy-size` when defined.
* Changed response code for trash/restore/delete endpoints from `200 OK` to `204 No Content`. 
* Changed HTTP method of upsert members endpoint (`api/apps/{app:idf}/members`) from `POST` to `PUT`.
* Removed `--wy-font-size-base`.
* Removed `--wy-border-radius-lg`.
* Removed `--wy-border-radius-xl`.
* Removed backgrounds from block components to allow external backgrounds to be visible. 
* Removed `parent` property from JSON responses for messages and posts.
* Removed `created_by`, `created_by_id`, `modified_by` and `modified_by_id` properties from JSON responses for apps and users.
* Removed `/api/users/autocomplete` endpoint. You can now use `/api/users` or `/api/apps/:app/members` which has been extended to offer the same functionality as the old autocomplete endpoint.
* Removed `/api/options/:id/voters` endpoint. Voter data is now available directly on `/api/options/:id/`.
* Renamed `--wy-rem` to `--wy-size`.
* Renamed `--wy-btn-*` to `--wy-button-*`.* 
* Renamed `modified_at` to `updated_at` in JSON responses. 
* Renamed `option.voters` to `option.votes` in JSON responses for comments, posts and messages.
* Renamed `count` properties in JSON responses, e.g. `comment_count` was changed to `comments.count`.
* Renamed `top` to `take` for setting page size in API queries. 
* Replaced `created_by_id` with `created_by.id` in JSON responses. 
* Replaced `modified_by_id` with `updated_by.id` in JSON responses. 
* Replaced `app_id` with `app.id` in JSON responses for comments, files, posts and messages. 
* Replaced `embed_id` with `embed.id` in JSON summary responses for comments, posts and messages. 
* Replaced `meeting_id` with `meeting.id` in JSON summary responses for comments, posts and messages. 

## v22.2.1

<time>2024-04-30</time>

* Fixed an issue where uikit-web sometimes believed the environment was unreachable.

## v22.2.0

<time>2024-04-16</time>

* Fixed an issue with pending uploads in the editor.
* Fixed an issue with pending link embeds in the editor.
* Fixed some issues with types in uikit-web.
* Added `submodals` property on block components in uikit-web to enable compatibility with external modals, backdrops and focus-traps.

## v22.1.0

<time>2024-04-03</time>

* Added possibility to filter conversations by name in Web API.
* Messenger bot chat conversations is now filtered by botname, which enables multiple bot chats.
* Fixed TypeError in uikit-web.
* Fixed some responsive layout issues in Messenger.
* Fixed text color in image grid.
* Fixed some issues with the UI for bot chat.
* Fixed an issue when setting modalParent in uikit-web.
* Upgraded SignalR to v8.

## v22.0.0

<time>2024-03-28</time>

* Added support for Google Gemini chat bots.
* Added Bot Chat mode in Messenger with only a single bot user using `<wy-messenger bot="mybotname">`.
* Fixed some issues with scrolling.
* Fixed `Esc` key in search input fields.
* Fixed various UI bugs.

###### Breaking changes

* The Conversations API was modified to work exclusively with non-contextual chat apps (previously it was also used for contextual chat apps). 
* API endpoint to indicate typing moved from /api/apps/:id/messages/typing to /api/conversations/:id/typing.
* The default value for the `contextual` property when searching for apps was changed from `null` to `true`.

## v21.1.2

<time>2024-03-15</time>

* Fixed some issues with dist files in uikit-react package.

## v21.1.1

<time>2024-03-12</time>

* Fixed missing dist files in uikit-react package.

## v21.1.0

<time>2024-03-12</time>

* Fixed a problem with installation of lit-modal-portal in uikit-web.
* Fixed font-sizing and UI scaling in uikit-web.
* Fixed listing of mentions according to access in uikit-web.
* Added `--wy-font-size` and `--wy-rem` CSS variables for scaling the text and the UI in uikit-web.
* Deprecated `--wy-font-size-base` CSS variable in favor for `--wy-font-size`.

## v21.0.0

<time>2024-03-06</time>

* Added Comments building block.
* Added Messenger building block.
* Added support for OpenAI chat bots.
* Added possibility for polls in chat messages.
* Added support for dynamic module loading in uikit-web.
* Added integration with Atlassian Confluence.
* Fixed ResizeObserver loop for Messenger.
* Fixed messages from self not being displayed in conversations.
* Improved default size for Messenger and conversations.
* Improved token handling in uikit-web.
* Improved destruction in uikit-web.
* Improved network state in uikit-web.
* Changed locales configuration in uikit-web.

###### Breaking changes

* Added constraint on directory name. It cannot contain whitespace and must contain at least one non-digit.
* Locales configuration has changed. The `localizedTemplates` property has been merged into the `locales` property. The `en` and `sv-SE` locales are enabled by default. The `localesUrl` has been removed. See Weavy docs for details.

## v20.0.0

<time>2024-02-08</time>

* Added simpler *and* more powerful permission system for better access control. You can now create apps that are open, read-only or closed for a group of users, while at the same time controlling individual user access by adding them as members. 
* Added `Weavy.tokenUrl` property in uikit-web. This enables you to configure authentication with an URL instead of a full async `tokenFactory`. The endpoint should provide a JSON response with an `access_token`.
* Added token validation in uikit-web.
* Added version check when connecting uikit-web.
* Enabled autocorrect in editor.
* Fixed an issue with event subscription when initializing Weavy in uikit-web.
* Fixed an issue with layout when using text-align in uikit-web.
* Fixed some issues when switching Messenger conversations in uikit-web.
* Updated most API endpoints for Apps and Users to accept both `id` or `uid` identifiers.
* Updated Weavy backend to .NET 8.
* Improved destruction and clean-up in uikit-web.
* Removed the requirement to first initialize apps through the Web API when using building blocks. Building blocks can now automatically initialize the corresponding app.
* Deprecated the `api/apps/init` endpoint. We recommend using "Upsert app" in combination with "Add member(s)" instead.
 
###### Breaking changes

* Removed the deprecated UIKit JS. **Do not** upgrade your environment until you have updated your application to use UIKit Web instead.
* UIKit Web `src` path is now named `lib`.
* UIKit React has been updated to utilize our web components. This enables all features and fixes from uikit-web in uikit-react. See https://www.weavy.com/docs/frameworks/react for detailed instructions and configuration options.
* API endpoints for managing app member(s) have been updated to support the new permission system. Review the API docs and update your code accordingly.
 
###### Upgrade instructions for uikit-react

* Remove the imported stylesheet `@weavy/uikit-react/dist/css/weavy.css` as the components now have built in styles. Refer to UIKit Web documentation for available styling options.
* Change `new WeavyClient({ ...options })` to use `new Weavy({ ...options })` or use the `useWeavy({ ...options })` hook.
* Remove `<WeavyProvider>`. May optionally be replaced with `<WyContext ...options />` in conjunction with removing `WeavyClient`.
* Change the names of imported block components to `<WyChat />`, `<WyFiles />`, `<WyMessenger />` and `<WyPosts />`.

## v19.1.2

<time>2024-01-18</time>

* Fixed some issues with cache when switching conversations in Messenger in uikit-web.

## v19.1.1

<time>2024-01-17</time>

* Fixes ANCM In-Process Start Failure on Azure.

## v19.1.0

<time>2024-01-16</time>

* Fixed issue with searching for unread conversations.
* Fixed error where Webhook delivery listing did not include all deliveries.
* Fixed an issue with the data not being updated properly in uikit-web when focusing the window or getting online.
* Fixed some styling issues with avatars.
* Fixed some issues with events in uikit-web. The incorrect Messenger events `reaction_added`, `reaction_removed` and `app_updated` was removed while `app_created` and `member_added` was added.

## v19.0.6

<time>2024-01-05</time>

* uikit-react compatibility now includes ES5, Webpack 4 and react-scripts v4.
* Fixed avatar alignment in uikit-web.

## v19.0.5

<time>2024-01-02</time>

* Minimum requirements for uikit-react now includes react v16 and optionally react-scripts v5.

## v19.0.4

<time>2024-01-02</time>

* Minimum requirements for uikit-react now includes react v16 and optionally react-scripts v5.

## v19.0.3

<time>2023-12-21</time>

* Fixed some issues with type declarations in uikit-web.
* Fixed some issues with events for Messenger in uikit-web.
* Fixed a bug with the _Mark as read_ endpoint for Conversations in the Web API.
* Fixed a bug with upload progress in uikit-web.

## v19.0.2

<time>2023-12-15</time>

* Fixed a bug with components not rendering when placed in some HTML nodes in uikit-web.
* Added `HTTPS` configuration for Weavy UIKit Web + Node.js sample project (weavy-web-node).

## v19.0.1

<time>2023-12-12</time>

* Added missing translations in uikit-web.
* Updated theme colors in uikit-web.
* Fixed bug with not beeing able to upload in the files app using the Free subscription.
* Fixed dark theme not being applied in uikit-web when using Safari and Firefox.

## v19.0.0

<time>2023-12-04</time>

* Introducing UIKit Web 🎉.
* Updated emoji to Unicode 15.0.
* Our UIKits have been updated to display user initials instead of user.svg for users without profile pictures.
* Web API no longer returns a default avatar image for users. Only users with a custom profile picture will have the `avatar_url` property. 
* Web API property `app.member_count` was replaced with `app.members.count`.
* Web API propery `app.members` was replaced with `app.members.data`.
* Web API property `user.email` is no longer required to be unique.
* Web API property `user.username` was removed.
* Web API property `user.is_admin` was removed.
* Readby status and typing indicator was removed from contextual chat to optimize multi-user performance.
* Fixed issue where Web API property `message.plain` was HTML encoded on the server causing it to be double encoded when rendered in the ui. 
  For those building their own ui, you should validate that you escape/encode all text properly beforing rendering it to html.
* Deprecated: UIKit JS aka dropin-js has been deprecated and will be removed in future releases. We recommend moving to UIKit web (uikit-web) instead.

## v18.0.2

<time>2023-11-14</time>

* Fixed an issue with frame registration in uikit-js.
* Fixed an issue with refreshed tokens affecting performance in uikit-react.

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

* Added Posts app (activity feed) with embeds, polls, comments and reactions to UIKit React.
* Added Files app to UIKit React with support for uploading and previewing multiple file types.
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
* Added UIKit for React.
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
