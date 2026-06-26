export class HTMLBuilder {
  private _tag: string;
  private _className?: string;
  private _id?: string;
  private _style: CSSStyleDeclaration = new CSSStyleDeclaration();

  constructor(tag: string) {
    this._tag = tag;
  }

  // #region styles
  class(classList: string[]): this;
  class(className: string): this;
  class(c: string | string[]) {
    if (typeof c === 'string') {
      this._className = c;
    } else if (Array.isArray(c)) {
      this._className = c.join(' ');
    } else {
      $throw('Invalid argument type');
    }
    return this;
  }

  style(style: CSSStyleDeclaration): this;
  style(style: string): this;
  style(s: string | CSSStyleDeclaration) {
    if (typeof s === 'string') {
      this._style.cssText = s;
    } else if (s instanceof CSSStyleDeclaration) {
      this._style = s;
    } else {
      $throw('style Invalid argument type');
    }
    return this;
  }

  w(w: string): this {
    this._style.width = w;
    return this;
  }

  h(h: string): this {
    this._style.height = h;
    return this;
  }

  // Size methods
  size(w: string, h: string): this {
    this._style.width = w;
    this._style.height = h;
    return this;
  }

  minW(w: string): this {
    this._style.minWidth = w;
    return this;
  }

  minH(h: string): this {
    this._style.minHeight = h;
    return this;
  }

  maxW(w: string): this {
    this._style.maxWidth = w;
    return this;
  }

  maxH(h: string): this {
    this._style.maxHeight = h;
    return this;
  }

  // ID and attributes
  id(id: string): this {
    this._id = id;
    return this;
  }

  // Layout - Flexbox
  flex(): this {
    this._style.display = 'flex';
    return this;
  }

  flexFlex(): this {
    this._style.display = 'flex';
    this._style.flex = '1 1 0%';
    return this;
  }

  flexNone(): this {
    this._style.flex = 'none';
    return this;
  }

  flexAuto(): this {
    this._style.flex = '1 1 auto';
    return this;
  }

  flexGrow(grow: number): this {
    this._style.flexGrow = String(grow);
    return this;
  }

  flexShrink(shrink: number): this {
    this._style.flexShrink = String(shrink);
    return this;
  }

  flexBasis(basis: string): this {
    this._style.flexBasis = basis;
    return this;
  }

  flexDirection(direction: string): this {
    this._style.flexDirection = direction;
    return this;
  }

  flexWrap(wrap: string): this {
    this._style.flexWrap = wrap;
    return this;
  }

  // Layout - Grid
  grid(): this {
    this._style.display = 'grid';
    return this;
  }

  gridTemplateColumns(columns: string): this {
    this._style.gridTemplateColumns = columns;
    return this;
  }

  gridTemplateRows(rows: string): this {
    this._style.gridTemplateRows = rows;
    return this;
  }

  gridColumn(column: string): this {
    this._style.gridColumn = column;
    return this;
  }

  gridRow(row: string): this {
    this._style.gridRow = row;
    return this;
  }

  gap(gap: string): this {
    this._style.gap = gap;
    return this;
  }

  gapX(gap: string): this {
    this._style.columnGap = gap;
    return this;
  }

  gapY(gap: string): this {
    this._style.rowGap = gap;
    return this;
  }

  // Alignment
  justify(justify: string): this {
    this._style.justifyContent = justify;
    return this;
  }

  items(items: string): this {
    this._style.alignItems = items;
    return this;
  }

  content(content: string): this {
    this._style.alignContent = content;
    return this;
  }

  self_(alignSelf: string): this {
    this._style.alignSelf = alignSelf;
    return this;
  }

  justifySelf(justifySelf: string): this {
    this._style.justifySelf = justifySelf;
    return this;
  }

  // Padding
  px(px: string): this {
    this._style.paddingLeft = px;
    this._style.paddingRight = px;
    return this;
  }

  py(py: string): this {
    this._style.paddingTop = py;
    this._style.paddingBottom = py;
    return this;
  }

  pt(pt: string): this {
    this._style.paddingTop = pt;
    return this;
  }

  pr(pr: string): this {
    this._style.paddingRight = pr;
    return this;
  }

  pb(pb: string): this {
    this._style.paddingBottom = pb;
    return this;
  }

  pl(pl: string): this {
    this._style.paddingLeft = pl;
    return this;
  }

  p(p: string): this {
    this._style.padding = p;
    return this;
  }

  // Margin
  mx(mx: string): this {
    this._style.marginLeft = mx;
    this._style.marginRight = mx;
    return this;
  }

  my(my: string): this {
    this._style.marginTop = my;
    this._style.marginBottom = my;
    return this;
  }

  mt(mt: string): this {
    this._style.marginTop = mt;
    return this;
  }

  mr(mr: string): this {
    this._style.marginRight = mr;
    return this;
  }

  mb(mb: string): this {
    this._style.marginBottom = mb;
    return this;
  }

  ml(ml: string): this {
    this._style.marginLeft = ml;
    return this;
  }

  m(m: string): this {
    this._style.margin = m;
    return this;
  }

  // Border
  border(): this {
    this._style.border = '1px solid currentColor';
    return this;
  }

  borderW(width: string): this {
    this._style.borderWidth = width;
    return this;
  }

  borderT(width: string): this {
    this._style.borderTopWidth = width;
    return this;
  }

  borderR(width: string): this {
    this._style.borderRightWidth = width;
    return this;
  }

  borderB(width: string): this {
    this._style.borderBottomWidth = width;
    return this;
  }

  borderL(width: string): this {
    this._style.borderLeftWidth = width;
    return this;
  }

  borderColor(color: string): this {
    this._style.borderColor = color;
    return this;
  }

  borderStyle(style: string): this {
    this._style.borderStyle = style;
    return this;
  }

  rounded(radius: string): this {
    this._style.borderRadius = radius;
    return this;
  }

  roundedTL(radius: string): this {
    this._style.borderTopLeftRadius = radius;
    return this;
  }

  roundedTR(radius: string): this {
    this._style.borderTopRightRadius = radius;
    return this;
  }

  roundedBL(radius: string): this {
    this._style.borderBottomLeftRadius = radius;
    return this;
  }

  roundedBR(radius: string): this {
    this._style.borderBottomRightRadius = radius;
    return this;
  }

  // Background
  bg(color: string): this {
    this._style.backgroundColor = color;
    return this;
  }

  bgColor(color: string): this {
    this._style.backgroundColor = color;
    return this;
  }

  bgImage(image: string): this {
    this._style.backgroundImage = image;
    return this;
  }

  bgSize(size: string): this {
    this._style.backgroundSize = size;
    return this;
  }

  bgPosition(position: string): this {
    this._style.backgroundPosition = position;
    return this;
  }

  bgRepeat(repeat: string): this {
    this._style.backgroundRepeat = repeat;
    return this;
  }

  // Shadow
  shadow(shadow: string): this {
    this._style.boxShadow = shadow;
    return this;
  }

  shadowMd(): this {
    this._style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
    return this;
  }

  shadowLg(): this {
    this._style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    return this;
  }

  shadowNone(): this {
    this._style.boxShadow = 'none';
    return this;
  }

  // Opacity
  opacity(value: number): this {
    this._style.opacity = String(value);
    return this;
  }

  // Text
  text(color: string): this {
    this._style.color = color;
    return this;
  }

  textColor(color: string): this {
    this._style.color = color;
    return this;
  }

  textSize(size: string): this {
    this._style.fontSize = size;
    return this;
  }

  textAlign(align: string): this {
    this._style.textAlign = align;
    return this;
  }

  fontWeight(weight: string): this {
    this._style.fontWeight = weight;
    return this;
  }

  lineHeight(height: string): this {
    this._style.lineHeight = height;
    return this;
  }

  letterSpacing(spacing: string): this {
    this._style.letterSpacing = spacing;
    return this;
  }

  textOverflow(overflow: string): this {
    this._style.textOverflow = overflow;
    return this;
  }

  whitespace(value: string): this {
    this._style.whiteSpace = value;
    return this;
  }

  truncate(): this {
    this._style.overflow = 'hidden';
    this._style.textOverflow = 'ellipsis';
    this._style.whiteSpace = 'nowrap';
    return this;
  }

  lineClamp(lines: number): this {
    this._style.display = '-webkit-box';
    this._style.webkitLineClamp = String(lines);
    this._style.webkitBoxOrient = 'vertical';
    this._style.overflow = 'hidden';
    return this;
  }

  // Position
  relative(): this {
    this._style.position = 'relative';
    return this;
  }

  absolute(): this {
    this._style.position = 'absolute';
    return this;
  }

  fixed(): this {
    this._style.position = 'fixed';
    return this;
  }

  sticky(): this {
    this._style.position = 'sticky';
    return this;
  }

  static_(): this {
    this._style.position = 'static';
    return this;
  }

  inset(value: string): this {
    this._style.top = value;
    this._style.right = value;
    this._style.bottom = value;
    this._style.left = value;
    return this;
  }

  insetY(value: string): this {
    this._style.top = value;
    this._style.bottom = value;
    return this;
  }

  insetX(value: string): this {
    this._style.right = value;
    this._style.left = value;
    return this;
  }

  top(value: string): this {
    this._style.top = value;
    return this;
  }

  right(value: string): this {
    this._style.right = value;
    return this;
  }

  bottom(value: string): this {
    this._style.bottom = value;
    return this;
  }

  left(value: string): this {
    this._style.left = value;
    return this;
  }

  // Z-index
  z(value: number): this {
    this._style.zIndex = String(value);
    return this;
  }

  zIndex(value: number): this {
    this._style.zIndex = String(value);
    return this;
  }

  // Overflow
  overflow(value: string): this {
    this._style.overflow = value;
    return this;
  }

  overflowX(value: string): this {
    this._style.overflowX = value;
    return this;
  }

  overflowY(value: string): this {
    this._style.overflowY = value;
    return this;
  }

  overflowHidden(): this {
    this._style.overflow = 'hidden';
    return this;
  }

  overflowScroll(): this {
    this._style.overflow = 'scroll';
    return this;
  }

  overflowAuto(): this {
    this._style.overflow = 'auto';
    return this;
  }

  overflowVisible(): this {
    this._style.overflow = 'visible';
    return this;
  }

  // Cursor
  cursor(cursor: string): this {
    this._style.cursor = cursor;
    return this;
  }

  cursorPointer(): this {
    this._style.cursor = 'pointer';
    return this;
  }

  cursorDefault(): this {
    this._style.cursor = 'default';
    return this;
  }

  cursorMove(): this {
    this._style.cursor = 'move';
    return this;
  }

  cursorGrab(): this {
    this._style.cursor = 'grab';
    return this;
  }

  cursorGrabbing(): this {
    this._style.cursor = 'grabbing';
    return this;
  }

  // Pointer events
  pointerEvents(value: string): this {
    this._style.pointerEvents = value;
    return this;
  }

  pointerEventsNone(): this {
    this._style.pointerEvents = 'none';
    return this;
  }

  pointerEventsAuto(): this {
    this._style.pointerEvents = 'auto';
    return this;
  }

  // User select
  userSelect(value: string): this {
    this._style.userSelect = value;
    return this;
  }

  selectNone(): this {
    this._style.userSelect = 'none';
    return this;
  }

  selectText(): this {
    this._style.userSelect = 'text';
    return this;
  }

  selectAll(): this {
    this._style.userSelect = 'all';
    return this;
  }

  // Display
  block(): this {
    this._style.display = 'block';
    return this;
  }

  inlineBlock(): this {
    this._style.display = 'inline-block';
    return this;
  }

  inline(): this {
    this._style.display = 'inline';
    return this;
  }

  hidden(): this {
    this._style.display = 'none';
    return this;
  }

  // Visibility
  visible(): this {
    this._style.visibility = 'visible';
    return this;
  }

  invisible(): this {
    this._style.visibility = 'hidden';
    return this;
  }

  // Transform
  rotate(deg: number): this {
    this._style.transform = `rotate(${deg}deg)`;
    return this;
  }

  scale(x: number, y?: number): this {
    const yValue = y !== undefined ? y : x;
    this._style.transform = `scale(${x}, ${yValue})`;
    return this;
  }

  translate(x: string, y: string): this {
    this._style.transform = `translate(${x}, ${y})`;
    return this;
  }

  // Transition
  transition(property: string): this {
    this._style.transition = property;
    return this;
  }

  transitionDuration(duration: string): this {
    this._style.transitionDuration = duration;
    return this;
  }

  transitionTimingFunction(timing: string): this {
    this._style.transitionTimingFunction = timing;
    return this;
  }

  transitionDelay(delay: string): this {
    this._style.transitionDelay = delay;
    return this;
  }
  // #endregion

  // #region events

  // #endregion

  build() {
    const e = document.createElement(this._tag);
    if (this._id) {
      e.id = this._id;
    }
    if (this._className) {
      e.className = this._className;
    }
    e.style.cssText = this._style.cssText;
    return e;
  }
}
