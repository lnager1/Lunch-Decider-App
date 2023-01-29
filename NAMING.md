# Quick Refernce Guide
|Type|Convention|Example|
|---|---|---|
|Naming (General)|Verbose|setSelectedUserAccount()|
|Varibles|Camel Case|firstLowerThenHigher|
|Functions|Verb Noun| UpdateUserPassword() |
|Classes|PascalCase|GoogleApiService|
|Interfaces|'I' + PascalCase|IStoreData|
|Keys/Ids|Kebab Case|current-selected-thing|
|Files/Folders|**PLEASE GO READ**|N/A|
|Comment Blocks|JsDoc|https://devhints.io/jsdoc|

# Conventions & Structure

## _Naming Conventions________________________________________
**With any type of identifier, such as classes, functions, and variables, we prefer verbose naming!**
 Verbose naming makes the intended use clearer and modernly we are all using high resolution screens that can display a *lot* of text. That said, be reasonable with your identifiers. No one wants a variable called `theNavbarOffToTheLeftThatLindseyMadeOnWednesday`.

### Variables
Variables are named using **camelCase**. This means they start with a lower case word, and subsequent words each start with an upper case letter.

Consider the following examples:

```ts
let userSelectedStore: string;
let nearByStoresList: string[];
let customDataArray: CustomType[];
```

### Functions
Functions also utilize camelCase, with a special additional rule. The first word of a function should be a verb describing what the function does. The subsequent words should describe the associated subject. We'll call this format **verbNoun**.

Consider the following examples:

```js
getGoogleApiKey();
getNearbyStoresList();
updateOnscreenStoresList();
```

### Classes
Classes utilize **PascalCase** for naming. Unlike camelCase, every word in a PascalCase identifier starts upper case.

Consider the following examples:

```ts
class ServerControl{}
class BPCManager{}
```

### Interfaces
Interfaces are named exactly like classes but should start with the capital letter **I**.

Consider the following examples:

```js
interface IStoreData{}
interface IUserData{}
interface IMockData{}
```

### Internal IDs, Keys, Signals, etc...
Identifiers in the form of strings passed around internally such as event identifiers and item ids should utilize **kebab-case** naming conventions.

Consider the following examples:

```js
signals.on('Burger-Purchase', ()=>{
    signals.emit('Purcahse-Made', data);
});
```

## _Files and Folders layout________________________________________

### Files
**Pages**:
Components meant to be used as a whole page should end their name with 'Page'.

**Classes/Interface**:
 Should share the same name and case as the class/interface they contain.

**Angular files**:
 should keep their standard naming as outlined in the framework.

**Other**:
 as a general rule source files in angular projects (even if not angular files) follow a **dot.case** format.

### Folders
**Models Folder**: Contains interfaces outlining what data should look like.

**Assets Folder**: Stores media assets for the project like images, sounds, video, ect, ect

**Services Folder**: Stores all services used throughout the app

**Pages Folder**: stores all pages of the app

**Components Folder**: stores all componenets used for pages throughout the app

**Other**: Folders generaly follow **kebab-case**.

## Comment Blocks
We utilize **JSDoc** for comment blocks. Here's a nice cheatsheet: https://devhints.io/jsdoc. However @typedef is optional since we will be using typescript which already requires its own type definition.