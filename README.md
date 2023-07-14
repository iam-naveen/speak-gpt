# Speak-GPT

A Chrome Extension built with Vite + Typescript, and Manifest v3

### What does it do?
This extension converts the chatGPT responses into audio and plays it when the user clicks the button. The extension is activated when the user visits the chat page of ChatGPT.<br>
There will be an audio icon next to the chatGPT response when the extension is active. Clicking the icon will play the audio.

> **Warning**<br>
This extension is still in development-beta-version and not completely bug free.

<br>

## Installing
1. Clone the repository.
2. Check if your `Node.js` version is >= **14**.
3. Run `npm install` to install the dependencies.

## Development Setup

Run these command

```shell
cd speak

npm run dev
```

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `speak/build` folder

## Packing and Usage Setup

run this command

```shell
npm build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

---
