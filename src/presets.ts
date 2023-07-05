const BASE_FONT_SIZE = 16;


const fontSizeList = [
  { value: 2, varText: '--GW-FONT-SIZE-H1', text: 'title' },
  { value: 1.5, varText: '--GW-FONT-SIZE-H2', text: 'subtitle' },
  { value: 1.25, varText: '--GW-FONT-SIZE-H3', text: 'section/card title' },
  { value: 1, varText: '--GW-FONT-SIZE-H4', text: 'section/card title' },
  { value: 0.875, varText: '--GW-FONT-SIZE-H5', text: 'section/card title' },
  { value: 0.875, varText: '--GW-FONT-SIZE-BODY', text: 'body, paragragh, mainnav, footer, breadcrumb, inline notification, tables and etc.' },
  { value: 0.75, varText: '--GW-FONT-SIZE-SUBTEXT', text: 'error, help, subnav, tooltip' },
  { value: 0.875, varText: '--GW-FONT-SIZE-LABEL', text: 'label, table header' },
  { value: 0.875, varText: '--GW-ICON-FONT-SIZE-1', text: 'small icon' },
  { value: 1, varText: '--GW-ICON-FONT-SIZE-2', text: 'medium icon' },
  { value: 1.25, varText: '--GW-ICON-FONT-SIZE-3', text: 'large icon' },
].map(i => ({
  ...i,
  pxValue: i.value * BASE_FONT_SIZE
}))

const fontWeightList = [
  { value: 100, varText: '--GW-FONT-WEIGHT-THIN', text: 'thin' },
  { value: 200, varText: '--GW-FONT-WEIGHT-EXTRA-LIGHT', text: 'thin' },
  { value: 300, varText: '--GW-FONT-WEIGHT-LIGHT', text: 'light' },
  { value: 400, varText: '--GW-FONT-WEIGHT-REGULAR', text: 'regular or normal' },
  { value: 500, varText: '--GW-FONT-WEIGHT-MEDIUM', text: 'meduim' },
  { value: 600, varText: '--GW-FONT-WEIGHT-SEMI-BOLD', text: 'semi bold' },
  { value: 700, varText: '--GW-FONT-WEIGHT-BOLD', text: 'bold' },
  { value: 800, varText: '--GW-FONT-WEIGHT-EXTRA-BOLD', text: 'extra bold' },
  { value: 900, varText: '--GW-FONT-WEIGHT-BLACK', text: 'black' },
]

const spacingScales = [
  0.125,
  0.25,
  0.5,
  0.75,
  1,
  1.25,
  -1, // as placeholder to skip
  1.75,
  -1,
  2
].map((rem, i) => {
  if (rem > 0) {
    return {
      value: rem * BASE_FONT_SIZE,
      varText: `--GW-SPACING-${i + 1}`,
      text: `${rem*BASE_FONT_SIZE}px(${rem}rem)`,
      type: 'spacing'
    }
  }
}).filter(i => i);

const layoutScales = [
  0.25,
  0.5,
  0.75,
  1,
  1.25,
  1.5,
  -1,
  2,
  -1,
  2.5,
  -1,
  3
].map((rem, i) => {
  if (rem > 0) {
    return {
      value: rem * BASE_FONT_SIZE,
      varText: `--GW-LAYOUT-${i + 1}`,
      text: `${rem*BASE_FONT_SIZE}px(${rem}rem)`,
      type: 'layout'
    }
  }
}).filter(i => i);


export default {
  fontSize: fontSizeList.map(i => ({
    label: `[Jutro] font size ${i.pxValue}px`,
    insertText: `font-size: var(${i.varText});`,
    documentation: `${i.value}rem(${i.pxValue}px), most used for ${i.text}`,
  })),
  fontWeight: fontWeightList.map(i => ({
    label: `[Jutro] font weight ${i.value}`,
    insertText: `font-weight: var(${i.varText});`,
    documentation: `weight style: ${i.text}`,
  })),
  spacing: [...spacingScales, ...layoutScales].map(i => ({
    label: `[Jutro] ${i!.type} gap: ${i!.value}px`,
    insertText: `var(${i!.varText});`,
    documentation: `${i!.type} gap: ${i!.value}px`,
  })),
}
