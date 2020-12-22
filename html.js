import { etches, model } from '@etchedjs/etched'
import * as dom from '@etchedjs/dom'

const setters = {
  dataset: {
    set dataset (value) {
      if (!etches(dom.dataset, value)) {
        throw new TypeError('Must be a `dom.dataset`')
      }
    }
  },
  children: {
    set children (value) {
      if (!etches(dom.children, value)) {
        throw new TypeError('Must be a `dom.children`')
      }
    }
  }
}

const attribute = model(dom.attribute)

const attributes = model({
  abbr: model(attribute, {
    set abbr (value) {}
  }),
  accept: model(attribute, {
    set accept (value) {}
  }),
  'accept-charset': model(attribute, {
    set 'accept-charset' (value) {}
  }),
  accesskey: model(attribute, {
    set accesskey (value) {}
  }),
  action: model(attribute, {
    set action (value) {}
  }),
  allow: model(attribute, {
    set allow (value) {}
  }),
  allowfullscreen: model(attribute, {
    set allowfullscreen (value) {}
  }),
  alt: model(attribute, {
    set alt (value) {}
  }),
  as: model(attribute, {
    set as (value) {}
  }),
  async: model(attribute, {
    set async (value) {}
  }),
  autocapitalize: model(attribute, {
    set autocapitalize (value) {}
  }),
  autocomplete: model(attribute, {
    set autocomplete (value) {}
  }),
  autofocus: model(attribute, {
    set autofocus (value) {}
  }),
  autoplay: model(attribute, {
    set autoplay (value) {}
  }),
  charset: model(attribute, {
    set charset (value) {}
  }),
  checked: model(attribute, {
    set checked (value) {}
  }),
  cite: model(attribute, {
    set cite (value) {}
  }),
  class: model(attribute, {
    set class (value) {}
  }),
  color: model(attribute, {
    set color (value) {}
  }),
  cols: model(attribute, {
    set cols (value) {}
  }),
  colspan: model(attribute, {
    set colspan (value) {}
  }),
  content: model(attribute, {
    set content (value) {}
  }),
  contenteditable: model(attribute, {
    set contenteditable (value) {}
  }),
  controls: model(attribute, {
    set controls (value) {}
  }),
  coords: model(attribute, {
    set coords (value) {}
  }),
  crossorigin: model(attribute, {
    set crossorigin (value) {}
  }),
  data: model(attribute, {
    set data (value) {}
  }),
  datetime: model(attribute, {
    set datetime (value) {}
  }),
  decoding: model(attribute, {
    set decoding (value) {}
  }),
  default: model(attribute, {
    set default (value) {}
  }),
  defer: model(attribute, {
    set defer (value) {}
  }),
  dir: model(attribute, {
    set dir (value) {}
  }),
  dirname: model(attribute, {
    set dirname (value) {}
  }),
  disabled: model(attribute, {
    set disabled (value) {}
  }),
  download: model(attribute, {
    set download (value) {}
  }),
  draggable: model(attribute, {
    set draggable (value) {}
  }),
  enctype: model(attribute, {
    set enctype (value) {}
  }),
  enterkeyhint: model(attribute, {
    set enterkeyhint (value) {}
  }),
  for: model(attribute, {
    set for (value) {}
  }),
  form: model(attribute, {
    set form (value) {}
  }),
  formaction: model(attribute, {
    set formaction (value) {}
  }),
  formenctype: model(attribute, {
    set formenctype (value) {}
  }),
  formmethod: model(attribute, {
    set formmethod (value) {}
  }),
  formnovalidate: model(attribute, {
    set formnovalidate (value) {}
  }),
  formtarget: model(attribute, {
    set formtarget (value) {}
  }),
  headers: model(attribute, {
    set headers (value) {}
  }),
  height: model(attribute, {
    set height (value) {}
  }),
  hidden: model(attribute, {
    set hidden (value) {}
  }),
  high: model(attribute, {
    set high (value) {}
  }),
  href: model(attribute, {
    set href (value) {}
  }),
  hreflang: model(attribute, {
    set hreflang (value) {}
  }),
  'http-equiv': model(attribute, {
    set 'http-equiv' (value) {}
  }),
  id: model(attribute, {
    set id (value) {}
  }),
  imagesizes: model(attribute, {
    set imagesizes (value) {}
  }),
  imagesrcset: model(attribute, {
    set imagesrcset (value) {}
  }),
  inputmode: model(attribute, {
    set inputmode (value) {}
  }),
  integrity: model(attribute, {
    set integrity (value) {}
  }),
  is: model(attribute, {
    set is (value) {}
  }),
  ismap: model(attribute, {
    set ismap (value) {}
  }),
  itemid: model(attribute, {
    set itemid (value) {}
  }),
  itemprop: model(attribute, {
    set itemprop (value) {}
  }),
  itemref: model(attribute, {
    set itemref (value) {}
  }),
  itemscope: model(attribute, {
    set itemscope (value) {}
  }),
  itemtype: model(attribute, {
    set itemtype (value) {}
  }),
  kind: model(attribute, {
    set kind (value) {}
  }),
  label: model(attribute, {
    set label (value) {}
  }),
  lang: model(attribute, {
    set lang (value) {}
  }),
  list: model(attribute, {
    set list (value) {}
  }),
  loading: model(attribute, {
    set loading (value) {}
  }),
  loop: model(attribute, {
    set loop (value) {}
  }),
  low: model(attribute, {
    set low (value) {}
  }),
  max: model(attribute, {
    set max (value) {}
  }),
  maxlength: model(attribute, {
    set maxlength (value) {}
  }),
  media: model(attribute, {
    set media (value) {}
  }),
  method: model(attribute, {
    set method (value) {}
  }),
  min: model(attribute, {
    set min (value) {}
  }),
  minlength: model(attribute, {
    set minlength (value) {}
  }),
  multiple: model(attribute, {
    set multiple (value) {}
  }),
  muted: model(attribute, {
    set muted (value) {}
  }),
  name: model(attribute, {
    set name (value) {}
  }),
  nomodule: model(attribute, {
    set nomodule (value) {}
  }),
  nonce: model(attribute, {
    set nonce (value) {}
  }),
  novalidate: model(attribute, {
    set novalidate (value) {}
  }),
  open: model(attribute, {
    set open (value) {}
  }),
  optimum: model(attribute, {
    set optimum (value) {}
  }),
  pattern: model(attribute, {
    set pattern (value) {}
  }),
  ping: model(attribute, {
    set ping (value) {}
  }),
  placeholder: model(attribute, {
    set placeholder (value) {}
  }),
  playsinline: model(attribute, {
    set playsinline (value) {}
  }),
  poster: model(attribute, {
    set poster (value) {}
  }),
  preload: model(attribute, {
    set preload (value) {}
  }),
  readonly: model(attribute, {
    set readonly (value) {}
  }),
  referrerpolicy: model(attribute, {
    set referrerpolicy (value) {}
  }),
  rel: model(attribute, {
    set rel (value) {}
  }),
  required: model(attribute, {
    set required (value) {}
  }),
  reversed: model(attribute, {
    set reversed (value) {}
  }),
  rows: model(attribute, {
    set rows (value) {}
  }),
  rowspan: model(attribute, {
    set rowspan (value) {}
  }),
  sandbox: model(attribute, {
    set sandbox (value) {}
  }),
  scope: model(attribute, {
    set scope (value) {}
  }),
  selected: model(attribute, {
    set selected (value) {}
  }),
  shape: model(attribute, {
    set shape (value) {}
  }),
  size: model(attribute, {
    set size (value) {}
  }),
  sizes: model(attribute, {
    set sizes (value) {}
  }),
  slot: model(attribute, {
    set slot (value) {}
  }),
  span: model(attribute, {
    set span (value) {}
  }),
  spellcheck: model(attribute, {
    set spellcheck (value) {}
  }),
  src: model(attribute, {
    set src (value) {}
  }),
  srcdoc: model(attribute, {
    set srcdoc (value) {}
  }),
  srclang: model(attribute, {
    set srclang (value) {}
  }),
  srcset: model(attribute, {
    set srcset (value) {}
  }),
  start: model(attribute, {
    set start (value) {}
  }),
  step: model(attribute, {
    set step (value) {}
  }),
  style: model(attribute, {
    set style (value) {}
  }),
  tabindex: model(attribute, {
    set tabindex (value) {}
  }),
  target: model(attribute, {
    set target (value) {}
  }),
  title: model(attribute, {
    set title (value) {}
  }),
  translate: model(attribute, {
    set translate (value) {}
  }),
  type: model(attribute, {
    set type (value) {}
  }),
  usemap: model(attribute, {
    set usemap (value) {}
  }),
  value: model(attribute, {
    set value (value) {}
  }),
  width: model(attribute, {
    set width (value) {}
  }),
  wrap: model(attribute, {
    set wrap (value) {}
  })
})

const globals = model(
  attributes.accesskey,
  attributes.autocapitalize,
  attributes.autofocus,
  attributes.class,
  attributes.contenteditable,
  attributes.dir,
  attributes.draggable,
  attributes.enterkeyhint,
  attributes.hidden,
  attributes.id,
  attributes.inputmode,
  attributes.is,
  attributes.itemid,
  attributes.itemprop,
  attributes.itemref,
  attributes.itemscope,
  attributes.itemtype,
  attributes.lang,
  attributes.nonce,
  attributes.readonly,
  attributes.slot,
  attributes.spellcheck,
  attributes.style,
  attributes.tabindex,
  attributes.title,
  attributes.translate
)

function declare (target, tag, ...models) {
  return define(model(target, ...models), tag)
}

export function define (target, tag) {
  if (!etches(closed, target) && !etches(container, target)) {
    throw new TypeError('Must be an `html.closed` or an `html.container`')
  }

  return dom.declare.bind(dom, model({ tag }, target))
}

export const element = model(dom.element, globals)

export const closed = model(element, setters.dataset)

export const container = model(element, setters.children, setters.dataset)

export const fill = dom.fill

export const fragment = dom.fragment

export function serialize (fragment) {
  const { firstElementChild } = fragment
  const serialized = [dom.serialize(fragment)]

  if (firstElementChild.nodeName === 'HTML') {
    serialized.unshift('<!doctype html>')
  }

  return serialized.join('\n')
}

export default model(((elements = {}) => {
  elements.a = declare(
    container,
    'a',
    attributes.download,
    attributes.href,
    attributes.hreflang,
    attributes.ping,
    attributes.referrerpolicy,
    attributes.rel,
    attributes.target,
    attributes.type
  )

  elements.abbr = declare(
    container,
    'abbr',
    attributes.title
  )

  elements.address = declare(
    container,
    'address'
  )

  elements.area = declare(
    closed,
    'area',
    attributes.alt,
    attributes.coords,
    attributes.download,
    attributes.href,
    attributes.ping,
    attributes.referrerpolicy,
    attributes.rel,
    attributes.shape,
    attributes.target
  )

  elements.article = declare(
    container,
    'article'
  )

  elements.aside = declare(
    container,
    'aside'
  )

  elements.audio = declare(
    container,
    'audio',
    attributes.autoplay,
    attributes.controls,
    attributes.crossorigin,
    attributes.loop,
    attributes.muted,
    attributes.preload,
    attributes.src
  )

  elements.b = declare(
    container,
    'b'
  )

  elements.base = declare(
    closed,
    'base',
    attributes.href,
    attributes.target
  )

  elements.bdi = declare(
    container,
    'bdi'
  )

  elements.bdo = declare(
    container,
    'bdo',
    attributes.dir
  )

  elements.blockquote = declare(
    container,
    'blockquote',
    attributes.cite
  )

  elements.body = declare(
    container,
    'body'
  )

  elements.br = declare(
    closed,
    'br'
  )

  elements.button = declare(
    container,
    'button',
    attributes.disabled,
    attributes.form,
    attributes.formaction,
    attributes.formenctype,
    attributes.formmethod,
    attributes.formnovalidate,
    attributes.formtarget,
    attributes.name,
    attributes.type,
    attributes.value
  )

  elements.canvas = declare(
    container,
    'canvas',
    attributes.height,
    attributes.width
  )

  elements.caption = declare(
    container,
    'caption'
  )

  elements.cite = declare(
    container,
    'cite'
  )

  elements.code = declare(
    container,
    'code'
  )

  elements.col = declare(
    closed,
    'col',
    attributes.span
  )

  elements.colgroup = declare(
    container,
    'colgroup',
    attributes.span
  )

  elements.data = declare(
    container,
    'data',
    attributes.value
  )

  elements.datalist = declare(
    container,
    'datalist'
  )

  elements.dd = declare(
    container,
    'dd'
  )

  elements.del = declare(
    container,
    'del',
    attributes.cite,
    attributes.datetime
  )

  elements.details = declare(
    container,
    'details',
    attributes.open
  )

  elements.dfn = declare(
    container,
    'dfn',
    attributes.title
  )

  elements.dialog = declare(
    container,
    'dialog',
    attributes.open
  )

  elements.div = declare(
    container,
    'div'
  )

  elements.dl = declare(
    container,
    'dl'
  )

  elements.dt = declare(
    container,
    'dt'
  )

  elements.em = declare(
    container,
    'em'
  )

  elements.embed = declare(
    closed,
    'embed',
    attributes.height,
    attributes.src,
    attributes.type,
    attributes.width
  )

  elements.fieldset = declare(
    container,
    'fieldset',
    attributes.disabled,
    attributes.form,
    attributes.name
  )

  elements.figcaption = declare(
    container,
    'figcaption'
  )

  elements.figure = declare(
    container,
    'figure'
  )

  elements.footer = declare(
    container,
    'footer'
  )

  elements.form = declare(
    container,
    'form',
    attributes['accept-charset'],
    attributes.action,
    attributes.autocomplete,
    attributes.enctype,
    attributes.method,
    attributes.name,
    attributes.novalidate,
    attributes.target
  )

  elements.h1 = declare(
    container,
    'h1'
  )

  elements.head = declare(
    container,
    'head'
  )

  elements.header = declare(
    container,
    'header'
  )

  elements.hgroup = declare(
    container,
    'hgroup'
  )

  elements.hr = declare(
    closed,
    'hr'
  )

  elements.html = declare(
    container,
    'html'
  )

  elements.i = declare(
    container,
    'i'
  )

  elements.iframe = declare(
    closed,
    'iframe',
    attributes.allow,
    attributes.allowfullscreen,
    attributes.height,
    attributes.loading,
    attributes.name,
    attributes.referrerpolicy,
    attributes.sandbox,
    attributes.src,
    attributes.srcdoc,
    attributes.width
  )

  elements.img = declare(
    closed,
    'img',
    attributes.alt,
    attributes.crossorigin,
    attributes.decoding,
    attributes.height,
    attributes.ismap,
    attributes.loading,
    attributes.referrerpolicy,
    attributes.sizes,
    attributes.src,
    attributes.srcset,
    attributes.usemap,
    attributes.width
  )

  elements.input = declare(
    closed,
    'input',
    attributes.type
  )

  const input = elements.input()
  const field = (...models) => dom.declare.bind(dom, model(input, ...models))

  elements.inputs = model({
    button: field(
      attributes.value,
      {
        type: 'button'
      }
    ),
    checkbox: field(
      attributes.checked,
      attributes.required,
      attributes.value,
      {
        type: 'checkbox'
      }
    ),
    color: field(
      attributes.autocomplete,
      attributes.list,
      attributes.value,
      {
        type: 'color'
      }
    ),
    date: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'date'
      }
    ),
    datetime: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'datetime'
      }
    ),
    email: field(
      attributes.autocomplete,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.multiple,
      attributes.pattern,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'email'
      }
    ),
    file: field(
      attributes.accept,
      attributes.multiple,
      attributes.required,
      {
        type: 'file'
      }
    ),
    hidden: field(
      attributes.autocomplete,
      attributes.value,
      {
        type: 'hidden'
      }
    ),
    image: field(
      attributes.alt,
      attributes.formaction,
      attributes.formenctype,
      attributes.formmethod,
      attributes.formnovalidate,
      attributes.formtarget,
      attributes.height,
      attributes.src,
      attributes.value,
      attributes.width,
      {
        type: 'image'
      }
    ),
    month: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'month'
      }
    ),
    number: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'number'
      }
    ),
    password: field(
      attributes.autocomplete,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.pattern,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'password'
      }
    ),
    radio: field(
      attributes.checked,
      attributes.required,
      attributes.value,
      {
        type: 'radio'
      }
    ),
    range: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.step,
      attributes.value,
      {
        type: 'range'
      }
    ),
    reset: field(
      attributes.value,
      {
        type: 'reset'
      }
    ),
    search: field(
      attributes.autocomplete,
      attributes.dirname,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.pattern,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'search'
      }
    ),
    submit: field(
      attributes.formaction,
      attributes.formenctype,
      attributes.formmethod,
      attributes.formnovalidate,
      attributes.formtarget,
      attributes.value,
      {
        type: 'submit'
      }
    ),
    tel: field(
      attributes.autocomplete,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.pattern,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'tel'
      }
    ),
    text: field(
      attributes.autocomplete,
      attributes.dirname,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.pattern,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'text'
      }
    ),
    time: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'time'
      }
    ),
    url: field(
      attributes.autocomplete,
      attributes.list,
      attributes.maxlength,
      attributes.minlength,
      attributes.pattern,
      attributes.placeholder,
      attributes.readonly,
      attributes.required,
      attributes.size,
      attributes.value,
      {
        type: 'url'
      }
    ),
    week: field(
      attributes.autocomplete,
      attributes.list,
      attributes.max,
      attributes.min,
      attributes.readonly,
      attributes.required,
      attributes.step,
      attributes.value,
      {
        type: 'week'
      }
    )
  })

  elements.ins = declare(
    container,
    'ins',
    attributes.cite,
    attributes.datetime
  )

  elements.kbd = declare(
    container,
    'kbd'
  )

  elements.label = declare(
    container,
    'label',
    attributes.for
  )

  elements.legend = declare(
    container,
    'legend'
  )

  elements.li = declare(
    container,
    'li',
    attributes.value
  )

  elements.link = declare(
    closed,
    'link',
    attributes.as,
    attributes.color,
    attributes.crossorigin,
    attributes.disabled,
    attributes.href,
    attributes.hreflang,
    attributes.imagesizes,
    attributes.imagesrcset,
    attributes.integrity,
    attributes.media,
    attributes.referrerpolicy,
    attributes.rel,
    attributes.sizes,
    attributes.title,
    attributes.title,
    attributes.type
  )

  elements.main = declare(
    container,
    'main'
  )

  elements.map = declare(
    container,
    'map',
    attributes.name
  )

  elements.mark = declare(
    container,
    'mark'
  )

  elements.math = declare(
    container,
    'math'
  )

  elements.menu = declare(
    container,
    'menu'
  )

  elements.meta = declare(
    closed,
    'meta',
    attributes.charset,
    attributes.content,
    attributes['http-equiv'],
    attributes.name
  )

  elements.meter = declare(
    container,
    'meter',
    attributes.high,
    attributes.low,
    attributes.max,
    attributes.min,
    attributes.optimum,
    attributes.value
  )

  elements.nav = declare(
    container,
    'nav'
  )

  elements.noscript = declare(
    container,
    'noscript'
  )

  elements.object = declare(
    container,
    'object',
    attributes.data,
    attributes.form,
    attributes.height,
    attributes.name,
    attributes.type,
    attributes.usemap,
    attributes.width
  )

  elements.ol = declare(
    container,
    'ol',
    attributes.reversed,
    attributes.start,
    attributes.type
  )

  elements.optgroup = declare(
    container,
    'optgroup',
    attributes.disabled,
    attributes.label
  )

  elements.option = declare(
    container,
    'option',
    attributes.disabled,
    attributes.label,
    attributes.selected,
    attributes.value
  )

  elements.output = declare(
    container,
    'output',
    attributes.for,
    attributes.form,
    attributes.name
  )

  elements.p = declare(
    container,
    'p'
  )

  elements.param = declare(
    closed,
    'param',
    attributes.name,
    attributes.value
  )

  elements.picture = declare(
    container,
    'picture'
  )

  elements.pre = declare(
    container,
    'pre'
  )

  elements.progress = declare(
    container,
    'progress',
    attributes.max,
    attributes.value
  )

  elements.q = declare(
    container,
    'q',
    attributes.cite
  )

  elements.rp = declare(
    container,
    'rp'
  )

  elements.rt = declare(
    container,
    'rt'
  )

  elements.ruby = declare(
    container,
    'ruby'
  )

  elements.s = declare(
    container,
    's'
  )

  elements.samp = declare(
    container,
    'samp'
  )

  elements.script = declare(
    container,
    'script',
    attributes.async,
    attributes.crossorigin,
    attributes.defer,
    attributes.integrity,
    attributes.nomodule,
    attributes.referrerpolicy,
    attributes.src,
    attributes.type
  )

  elements.section = declare(
    container,
    'section'
  )

  elements.select = declare(
    container,
    'select',
    attributes.autocomplete,
    attributes.disabled,
    attributes.form,
    attributes.multiple,
    attributes.name,
    attributes.required,
    attributes.size
  )

  elements.slot = declare(
    container,
    'slot',
    attributes.name
  )

  elements.small = declare(
    container,
    'small'
  )

  elements.source = declare(
    closed,
    'source',
    attributes.media,
    attributes.sizes,
    attributes.src,
    attributes.srcset,
    attributes.type
  )

  elements.span = declare(
    container,
    'span'
  )

  elements.strong = declare(
    container,
    'strong'
  )

  elements.style = declare(
    container,
    'style',
    attributes.media,
    attributes.title
  )

  elements.sub = declare(
    container,
    'sub'
  )

  elements.summary = declare(
    container,
    'summary'
  )

  elements.sup = declare(
    container,
    'sup'
  )

  elements.svg = declare(
    container,
    'svg'
  )

  elements.table = declare(
    container,
    'table'
  )

  elements.tbody = declare(
    container,
    'tbody'
  )

  elements.td = declare(
    container,
    'td',
    attributes.colspan,
    attributes.headers,
    attributes.rowspan
  )

  elements.template = declare(
    closed,
    'template'
  )

  elements.textarea = declare(
    container,
    'textarea',
    attributes.autocomplete,
    attributes.cols,
    attributes.dirname,
    attributes.disabled,
    attributes.form,
    attributes.maxlength,
    attributes.minlength,
    attributes.name,
    attributes.placeholder,
    attributes.readonly,
    attributes.required,
    attributes.rows,
    attributes.wrap
  )

  elements.tfoot = declare(
    container,
    'tfoot'
  )

  elements.th = declare(
    container,
    'th',
    attributes.abbr,
    attributes.colspan,
    attributes.headers,
    attributes.rowspan,
    attributes.scope
  )

  elements.thead = declare(
    container,
    'thead'
  )

  elements.time = declare(
    container,
    'time',
    attributes.datetime
  )

  elements.title = declare(
    container,
    'title'
  )

  elements.tr = declare(
    container,
    'tr'
  )

  elements.track = declare(
    closed,
    'track',
    attributes.default,
    attributes.kind,
    attributes.label,
    attributes.src,
    attributes.srclang
  )

  elements.u = declare(
    container,
    'u'
  )

  elements.ul = declare(
    container,
    'ul'
  )

  elements.var = declare(
    container,
    'var'
  )

  elements.video = declare(
    container,
    'video',
    attributes.autoplay,
    attributes.controls,
    attributes.crossorigin,
    attributes.height,
    attributes.loop,
    attributes.muted,
    attributes.playsinline,
    attributes.poster,
    attributes.preload,
    attributes.src,
    attributes.width
  )

  elements.wbr = declare(
    closed,
    'wbr'
  )

  return elements
})())
