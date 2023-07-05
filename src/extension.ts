import * as vscode from 'vscode'
import config from './presets'
import * as fs from 'fs'
import * as path from 'path'
import scssTml from './tmpl/page.module.scss.tmpl'
import jsxTml from './tmpl/page.jsx.tmpl'
import metadataTml from './tmpl/page.metadata.json5.tmpl'
import msgTml from './tmpl/page.messages.tmpl'

const pageTemplatFiles = [
  {
    generator: scssTml,
    ext: '.module.scss',
  },
  {
    generator: jsxTml,
    ext: '.jsx',
  },
  {
    generator: msgTml,
    ext: '.messages.js',
  },
  {
    generator: metadataTml,
    ext: '.metadata.json5',
  },
]

const LANGUAGES = ['css', 'scss']

function loadWorkspaceConfig() {
  const workspaceFolders = vscode.workspace.workspaceFolders
  if (!workspaceFolders) {
    vscode.window.showErrorMessage('No workspace opened!')
    return
  }
  const configFilePath = path.join(
    workspaceFolders[0].uri.fsPath,
    '.jutro.config.js'
  )
  try {
    // const configData = fs.readFileSync(configFilePath).toString('utf8');
    const configData = require(configFilePath)
    vscode.window.showInformationMessage('jutro config file loaded!')
    return configData
  } catch (error) {
    vscode.window.showInformationMessage(
      'No jutro config file found, will use default presets.'
    )
    return []
  }
}

export function activate(context: vscode.ExtensionContext) {
  const projectConfig = loadWorkspaceConfig()

  const { appPrefix } = projectConfig;


  const createPageCmd = vscode.commands.registerCommand(
    'jutror.createPage',
    async (param) => {
      const loc = param.path

      if (!loc) return;

      const inputName = await vscode.window.showInputBox({
        prompt: 'Please enter your page/component name',
        placeHolder: 'Use camel case format, eg. VehicleDetail, ClaimInfo, and etc.',
      })
      if (!inputName) return

      let count = 0;
      const basePath = `${loc}/${inputName}`;
      fs.mkdirSync(basePath);
      pageTemplatFiles.forEach((item) => {
        try {
          const fileFWithPath = `${basePath}/${inputName}${item.ext}`
          fs.writeFileSync(fileFWithPath, item.generator(inputName, appPrefix))
          count++
        } catch (error) {
          vscode.window.showErrorMessage(`Error creating file: ${inputName}${item.ext}. ${error}`)
        }
      })
      if (count === 4) {
        vscode.window.showInformationMessage('page files created!')
        vscode.window.showTextDocument(vscode.Uri.file(`${basePath}/${inputName}.jsx`), {
          preview: false,
        })
      }

    }
  )

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    LANGUAGES,
    {
      async provideCompletionItems() {
        const fontSizeItems = config.fontSize

        const fontWeightItems = config.fontWeight

        const spacingItems = config.spacing

        const { presets } = projectConfig;

        return [
          ...fontSizeItems,
          ...fontWeightItems,
          ...spacingItems,
          ...presets,
        ]
      },
    }
  )
  context.subscriptions.push(createPageCmd, completionProvider)
}
