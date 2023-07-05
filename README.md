## This is a simple tool for Jutro users.

### V0.0.1 - Style Tool

![v0.0.1 Demo](https://img1.imgtp.com/2023/07/03/4c5qIr5Y.gif)

By typing some hints you can get the translated values base on Jutro OOTB styling vars or your project's custom config. This will speed up the css time and make the code <b>REPEAT LESS, REUSE MORE.</b>

So far it has a few frequent used ones:

- `jfs` --> jutro font size selection
- `jfw` --> jutro font weight selection
- `jgapxx` --> jutro spacing selection

> The prefix `j` is just for quicker filtering among the choices.

If you want more, you can easily extend the configuration by yourself. Just create a config file named `.jutro.config.js` and export your presets as array, for example:

```js
module.exports = {
  presets: [
    {
      label: '[Mobile App] color primary',
      insertText: 'color: #d04a02;',
      documentation: 'Primary color for app.',
    },
  ],
}
```

NOTE:
> - The config file is `commonjs` module so you can't use `export default` sytanx.

> - The alternative way is using `code snippets`, but the extension will bring more features in the future. we'll see!

### V0.0.2 - Page Files Creator

Now it support creating page files(.module.scss, .jsx, .messages.js, .metadata.json5) by one click.

You'e better define a `appPrefix` to get a better id hint in `*.messages.js` files.

![v0.0.2 Demo](https://img1.imgtp.com/2023/07/03/mjmMDe9H.gif)
