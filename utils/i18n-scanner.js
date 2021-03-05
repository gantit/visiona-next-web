module.exports = {
  options: {
    debug: true,
    removeUnusedKeys: false,
    attr: false,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx']
    },
    lngs: ['es', 'ca', 'en'],
    defaultLng: 'es',
    defaultNs: 'translations',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/locales/{{lng}}.json', // The path where resources get loaded from. Relative to current working directory.
      savePath: '{{lng}}.json', // The path to store resources. Relative to the path specified by output.
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  }
}
