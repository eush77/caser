[![npm](https://nodei.co/npm/caser.png)](https://nodei.co/npm/caser/)

# caser

[![Dependency Status][david-badge]][david]

Command-line interface to string casing tools.

[david]: https://david-dm.org/eush77/caser
[david-badge]: https://david-dm.org/eush77/caser.png

## Example

```
$ echo "some kind of a title" |caser --title
Some Kind of a Title
```

## CLI

### `caser <option>`

Caser reads stdin and writes to stdout.

The only options are:

 - `--camel`
 - `--pascal`
 - `--dot`
 - `--slug`
 - `--snake`
 - `--space`
 - `--constant`
 - `--capital`
 - `--title`
 - `--sentence`
 - `--lower`
 - `--upper`
 - `--inverse`
 - `--none`

Most of these names are self-descriptive, check out [to-case] homepage for details (it is the module that actually does all heavy-lifting).

[to-case]: https://github.com/ianstormtaylor/to-case

## Install

```
npm install -g caser
```

## License

MIT
