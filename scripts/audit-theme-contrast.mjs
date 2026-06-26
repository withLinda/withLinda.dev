// WCAG contrast uses W3C relative luminance:
// https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
// Delta L* uses CIELAB lightness from CSS Color 4:
// https://www.w3.org/TR/css-color-4/#lab-colors

const themes = {
  'light-hard': {
    bg0: '#FFFBEF',
    bg1: '#F8F5E4',
    bg2: '#F2EFDF',
    textPrimary: '#1E2326',
    textSecondary: '#374145',
    textMuted: '#495156',
    accent: '#F57D26',
    accentInk: '#1E2326',
    danger: '#F85552',
  },
  'light-medium': {
    bg0: '#FDF6E3',
    bg1: '#F4F0D9',
    bg2: '#EFEBD4',
    textPrimary: '#232A2E',
    textSecondary: '#3D484D',
    textMuted: '#4F585E',
    accent: '#F57D26',
    accentInk: '#232A2E',
    danger: '#F85552',
  },
  'light-soft': {
    bg0: '#F3EAD3',
    bg1: '#EAE4CA',
    bg2: '#E5DFC5',
    textPrimary: '#293136',
    textSecondary: '#3A464C',
    textMuted: '#4D5960',
    accent: '#F57D26',
    accentInk: '#293136',
    danger: '#F85552',
  },
  'dark-hard': {
    bg0: '#272E33',
    bg1: '#2E383C',
    bg2: '#374145',
    textPrimary: '#D3C6AA',
    textSecondary: '#9DA9A0',
    textMuted: '#9DA9A0',
    accent: '#E69875',
    accentInk: '#1E2326',
    danger: '#E67E80',
  },
  'dark-medium': {
    bg0: '#2D353B',
    bg1: '#343F44',
    bg2: '#3D484D',
    textPrimary: '#D3C6AA',
    textSecondary: '#A9B2A9',
    textMuted: '#A9B2A9',
    accent: '#E69875',
    accentInk: '#232A2E',
    danger: '#E67E80',
  },
  'dark-soft': {
    bg0: '#333C43',
    bg1: '#3A464C',
    bg2: '#434F55',
    textPrimary: '#F3EAD3',
    textSecondary: '#D3C6AA',
    textMuted: '#B8B8A3',
    accent: '#E69875',
    accentInk: '#293136',
    danger: '#E67E80',
  },
}

// Each rule states the theme tier it applies to so we can express, e.g.,
// "orange is the active-rail color in DARK themes only — light themes use
// text-primary as the rail (already covered by primary-text rules)."
const DARK = ['dark-hard', 'dark-medium', 'dark-soft']
const LIGHT = ['light-hard', 'light-medium', 'light-soft']
const ALL = [...LIGHT, ...DARK]

const rules = [
  // Body text — universal contract.
  { name: 'primary text on page', fg: 'textPrimary', bg: 'bg0', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'primary text on card', fg: 'textPrimary', bg: 'bg1', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'secondary text on page', fg: 'textSecondary', bg: 'bg0', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'secondary text on card', fg: 'textSecondary', bg: 'bg1', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'muted text on page', fg: 'textMuted', bg: 'bg0', wcag: 4.5, dL: 40, themes: ALL },
  { name: 'muted text on card', fg: 'textMuted', bg: 'bg1', wcag: 4.5, dL: 40, themes: ALL },
  { name: 'selected control inverse', fg: 'bg0', bg: 'textPrimary', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'focus ring on page', fg: 'textPrimary', bg: 'bg0', wcag: 3, dL: 45, themes: ALL },

  // Primary action accent — orange is reserved for fills/rails/icons/focus.
  // In LIGHT themes the orange-on-paper contrast is too low for a thin rail,
  // so the design uses textPrimary as the active-rail color there (already
  // proven by the "primary text" rule). In DARK themes orange reads cleanly
  // and is the active-rail color.
  { name: 'primary button ink on accent fill', fg: 'accentInk', bg: 'accent', wcag: 4.5, dL: 45, themes: ALL },
  { name: 'accent rail visible on page (dark only)', fg: 'accent', bg: 'bg0', wcag: 3, dL: 30, themes: DARK },
  { name: 'accent rail visible on card (dark only)', fg: 'accent', bg: 'bg1', wcag: 3, dL: 30, themes: DARK },
]

function hexToRgb(hex) {
  const value = hex.replace('#', '')
  return {
    red: Number.parseInt(value.slice(0, 2), 16),
    green: Number.parseInt(value.slice(2, 4), 16),
    blue: Number.parseInt(value.slice(4, 6), 16),
  }
}

function linearize(value) {
  const channel = value / 255
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4
}

function relativeLuminance(hex) {
  const rgb = hexToRgb(hex)
  return (
    0.2126 * linearize(rgb.red) +
    0.7152 * linearize(rgb.green) +
    0.0722 * linearize(rgb.blue)
  )
}

function contrastRatio(foreground, background) {
  const foregroundLuminance = relativeLuminance(foreground)
  const backgroundLuminance = relativeLuminance(background)
  const lighter = Math.max(foregroundLuminance, backgroundLuminance)
  const darker = Math.min(foregroundLuminance, backgroundLuminance)
  return (lighter + 0.05) / (darker + 0.05)
}

function multiply(matrix, vector) {
  return matrix.map((row) =>
    row.reduce((sum, value, index) => sum + value * vector[index], 0)
  )
}

function labTransfer(value) {
  return value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116
}

function lStar(hex) {
  const rgb = hexToRgb(hex)
  const linearRgb = [
    linearize(rgb.red),
    linearize(rgb.green),
    linearize(rgb.blue),
  ]
  const xyzD65 = multiply(
    [
      [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
      [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
      [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
    ],
    linearRgb
  )
  const xyzD50 = multiply(
    [
      [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
      [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
      [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008],
    ],
    xyzD65
  )
  return 116 * labTransfer(xyzD50[1]) - 16
}

function deltaLStar(foreground, background) {
  return Math.abs(lStar(foreground) - lStar(background))
}

const failures = []
const lines = ['Theme contrast audit']

for (const [themeName, theme] of Object.entries(themes)) {
  for (const rule of rules) {
    if (!rule.themes.includes(themeName)) continue
    const foreground = theme[rule.fg]
    const background = theme[rule.bg]
    const ratio = contrastRatio(foreground, background)
    const delta = deltaLStar(foreground, background)
    const passes = ratio >= rule.wcag && delta >= rule.dL
    const line = [
      `[${themeName}][${passes ? 'pass' : 'fail'}]`,
      `${rule.name}:`,
      `WCAG ${ratio.toFixed(2)} / ${rule.wcag.toFixed(2)},`,
      `Delta L* ${delta.toFixed(1)} / ${rule.dL.toFixed(1)}`,
      `foreground=${foreground}`,
      `background=${background}`,
    ].join(' ')

    lines.push(line)

    if (!passes) {
      failures.push(line)
    }
  }
}

console.log(lines.join('\n'))

if (failures.length > 0) {
  console.error('\nTheme contrast audit failed.')
  process.exitCode = 1
}
