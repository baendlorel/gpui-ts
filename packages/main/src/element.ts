declare global {
  interface HTMLElement {
    jpui: true;

    // # utils
    id_(id: string): this;
    attr(attr: string, value: any): this;
    child(...nodes: any[]): this;

    // # styles
    class(classList: string[]): this;
    class(className: string): this;
    w(w: string): this;
    h(h: string): this;
    size(w: string, h: string): this;
    minW(w: string): this;
    minH(h: string): this;
    maxW(w: string): this;
    maxH(h: string): this;
    flex(): this;
    flexFlex(): this;
    flexNone(): this;
    flexAuto(): this;
    flexGrow(grow: number): this;
    flexShrink(shrink: number): this;
    flexBasis(basis: string): this;
    flexDirection(direction: string): this;
    flexWrap(wrap: string): this;
    grid(): this;
    gridTemplateColumns(columns: string): this;
    gridTemplateRows(rows: string): this;
    gridColumn(column: string): this;
    gridRow(row: string): this;
    gap(gap: string): this;
    gapX(gap: string): this;
    gapY(gap: string): this;
    justify(justify: string): this;
    items(items: string): this;
    content(content: string): this;
    self(alignSelf: string): this;
    justifySelf(justifySelf: string): this;
    px(px: string): this;
    py(py: string): this;
    pt(pt: string): this;
    pr(pr: string): this;
    pb(pb: string): this;
    pl(pl: string): this;
    p(p: string): this;
    mx(mx: string): this;
    my(my: string): this;
    mt(mt: string): this;
    mr(mr: string): this;
    mb(mb: string): this;
    ml(ml: string): this;
    m(m: string): this;
    border(): this;
    borderW(width: string): this;
    borderT(width: string): this;
    borderR(width: string): this;
    borderB(width: string): this;
    borderL(width: string): this;
    borderColor(color: string): this;
    borderStyle(style: string): this;
    rounded(radius: string): this;
    roundedTL(radius: string): this;
    roundedTR(radius: string): this;
    roundedBL(radius: string): this;
    roundedBR(radius: string): this;
    bg(color: string): this;
    bgColor(color: string): this;
    bgImage(image: string): this;
    bgSize(size: string): this;
    bgPosition(position: string): this;
    bgRepeat(repeat: string): this;
    shadow(shadow: string): this;
    shadowMd(): this;
    shadowLg(): this;
    shadowNone(): this;
    opacity(value: number): this;
    text(color: string): this;
    textColor(color: string): this;
    textSize(size: string): this;
    textAlign(align: string): this;
    fontWeight(weight: string): this;
    lineHeight(height: string): this;
    letterSpacing(spacing: string): this;
    textOverflow(overflow: string): this;
    whitespace(value: string): this;
    truncate(): this;
    lineClamp(lines: number): this;
    relative(): this;
    absolute(): this;
    fixed(): this;
    sticky(): this;
    static(): this;
    inset(value: string): this;
    insetY(value: string): this;
    insetX(value: string): this;
    top(value: string): this;
    right(value: string): this;
    bottom(value: string): this;
    left(value: string): this;
    z(value: number): this;
    zIndex(value: number): this;
    overflow(value: string): this;
    overflowX(value: string): this;
    overflowY(value: string): this;
    overflowHidden(): this;
    overflowScroll(): this;
    overflowAuto(): this;
    overflowVisible(): this;
    cursor(cursor: string): this;
    cursorPointer(): this;
    cursorDefault(): this;
    cursorMove(): this;
    cursorGrab(): this;
    cursorGrabbing(): this;
    pointerEvents(value: string): this;
    pointerEventsNone(): this;
    pointerEventsAuto(): this;
    userSelect(value: string): this;
    selectNone(): this;
    selectText(): this;
    selectAll(): this;
    block(): this;
    inlineBlock(): this;
    inline(): this;
    // renamed from hidden() to avoid clashing with HTMLElement.hidden
    hide(): this;
    visible(): this;
    invisible(): this;
    rotate(deg: number): this;
    scale(x: number, y?: number): this;
    // renamed from translate() to avoid clashing with HTMLElement.translate
    transformTranslate(x: string, y: string): this;
    transition(property: string): this;
    transitionDuration(duration: string): this;
    transitionTimingFunction(timing: string): this;
    transitionDelay(delay: string): this;

    // # events
    onClick(handler: (event: MouseEvent) => void): this;
    onDoubleClick(handler: (event: MouseEvent) => void): this;
    onMouseDown(handler: (event: MouseEvent) => void): this;
    onMouseUp(handler: (event: MouseEvent) => void): this;
    onMouseMove(handler: (event: MouseEvent) => void): this;
    onMouseEnter(handler: (event: MouseEvent) => void): this;
    onMouseLeave(handler: (event: MouseEvent) => void): this;
    onMouseOver(handler: (event: MouseEvent) => void): this;
    onMouseOut(handler: (event: MouseEvent) => void): this;
    onMouseWheel(handler: (event: WheelEvent) => void): this;
    onKeyDown(handler: (event: KeyboardEvent) => void): this;
    onKeyUp(handler: (event: KeyboardEvent) => void): this;
    onKeyPress(handler: (event: KeyboardEvent) => void): this;
    onFocus(handler: (event: FocusEvent) => void): this;
    onBlur(handler: (event: FocusEvent) => void): this;
    onFocusIn(handler: (event: FocusEvent) => void): this;
    onFocusOut(handler: (event: FocusEvent) => void): this;
    onChange(handler: (event: Event) => void): this;
    onInput(handler: (event: Event) => void): this;
    onSubmit(handler: (event: SubmitEvent) => void): this;
    onReset(handler: (event: Event) => void): this;
    onTouchStart(handler: (event: TouchEvent) => void): this;
    onTouchEnd(handler: (event: TouchEvent) => void): this;
    onTouchMove(handler: (event: TouchEvent) => void): this;
    onTouchCancel(handler: (event: TouchEvent) => void): this;
    onDrag(handler: (event: DragEvent) => void): this;
    onDragStart(handler: (event: DragEvent) => void): this;
    onDragEnd(handler: (event: DragEvent) => void): this;
    onDragEnter(handler: (event: DragEvent) => void): this;
    onDragLeave(handler: (event: DragEvent) => void): this;
    onDragOver(handler: (event: DragEvent) => void): this;
    onDragDrop(handler: (event: DragEvent) => void): this;
    onCopy(handler: (event: ClipboardEvent) => void): this;
    onCut(handler: (event: ClipboardEvent) => void): this;
    onPaste(handler: (event: ClipboardEvent) => void): this;
    onScroll(handler: (event: Event) => void): this;
    onResize(handler: (event: UIEvent) => void): this;
    onPlay(handler: (event: Event) => void): this;
    onPause(handler: (event: Event) => void): this;
    onEnded(handler: (event: Event) => void): this;
    onVolumeChange(handler: (event: Event) => void): this;
    onAnimationStart(handler: (event: AnimationEvent) => void): this;
    onAnimationEnd(handler: (event: AnimationEvent) => void): this;
    onAnimationIteration(handler: (event: AnimationEvent) => void): this;
    onTransitionEnd(handler: (event: TransitionEvent) => void): this;
    onPointerDown(handler: (event: PointerEvent) => void): this;
    onPointerUp(handler: (event: PointerEvent) => void): this;
    onPointerMove(handler: (event: PointerEvent) => void): this;
    onPointerEnter(handler: (event: PointerEvent) => void): this;
    onPointerLeave(handler: (event: PointerEvent) => void): this;
    onPointerCancel(handler: (event: PointerEvent) => void): this;
    on(eventName: string, handler: EventListener): this;
    off(eventName: string, handler: EventListener): this;
  }

  // TODO 对于input表单系列要有onChange\placeholder\setValue\type等单独扩展
}

Object.assign(HTMLElement.prototype, {
  id_(id) {
    this.id = id;
    return this;
  },
  attr(attr, value) {
    this.setAttribute(attr, value);
    return this;
  },
  child(...nodes) {
    this.append(...nodes);
    return this;
  },
  class(c) {
    if (Array.isArray(c)) {
      this.className = c.join(' ');
    } else {
      this.className = c;
    }
    return this;
  },
  w(w) {
    this.style.width = w;
    return this;
  },

  h(h) {
    this.style.height = h;
    return this;
  },

  size(w, h) {
    this.style.width = w;
    this.style.height = h;
    return this;
  },

  minW(w) {
    this.style.minWidth = w;
    return this;
  },

  minH(h) {
    this.style.minHeight = h;
    return this;
  },

  maxW(w) {
    this.style.maxWidth = w;
    return this;
  },

  maxH(h) {
    this.style.maxHeight = h;
    return this;
  },

  flex() {
    this.style.display = 'flex';
    return this;
  },

  flexFlex() {
    this.style.display = 'flex';
    this.style.flex = '1 1 0%';
    return this;
  },

  flexNone() {
    this.style.flex = 'none';
    return this;
  },

  flexAuto() {
    this.style.flex = '1 1 auto';
    return this;
  },

  flexGrow(grow) {
    this.style.flexGrow = String(grow);
    return this;
  },

  flexShrink(shrink) {
    this.style.flexShrink = String(shrink);
    return this;
  },

  flexBasis(basis) {
    this.style.flexBasis = basis;
    return this;
  },

  flexDirection(direction) {
    this.style.flexDirection = direction;
    return this;
  },

  flexWrap(wrap) {
    this.style.flexWrap = wrap;
    return this;
  },

  grid() {
    this.style.display = 'grid';
    return this;
  },

  gridTemplateColumns(columns) {
    this.style.gridTemplateColumns = columns;
    return this;
  },

  gridTemplateRows(rows) {
    this.style.gridTemplateRows = rows;
    return this;
  },

  gridColumn(column) {
    this.style.gridColumn = column;
    return this;
  },

  gridRow(row) {
    this.style.gridRow = row;
    return this;
  },

  gap(gap) {
    this.style.gap = gap;
    return this;
  },

  gapX(gap) {
    this.style.columnGap = gap;
    return this;
  },

  gapY(gap) {
    this.style.rowGap = gap;
    return this;
  },

  justify(justify) {
    this.style.justifyContent = justify;
    return this;
  },

  items(items) {
    this.style.alignItems = items;
    return this;
  },

  content(content) {
    this.style.alignContent = content;
    return this;
  },

  self(alignSelf) {
    this.style.alignSelf = alignSelf;
    return this;
  },

  justifySelf(justifySelf) {
    this.style.justifySelf = justifySelf;
    return this;
  },

  px(px) {
    this.style.paddingLeft = px;
    this.style.paddingRight = px;
    return this;
  },

  py(py) {
    this.style.paddingTop = py;
    this.style.paddingBottom = py;
    return this;
  },

  pt(pt) {
    this.style.paddingTop = pt;
    return this;
  },

  pr(pr) {
    this.style.paddingRight = pr;
    return this;
  },

  pb(pb) {
    this.style.paddingBottom = pb;
    return this;
  },

  pl(pl) {
    this.style.paddingLeft = pl;
    return this;
  },

  p(p) {
    this.style.padding = p;
    return this;
  },

  mx(mx) {
    this.style.marginLeft = mx;
    this.style.marginRight = mx;
    return this;
  },

  my(my) {
    this.style.marginTop = my;
    this.style.marginBottom = my;
    return this;
  },

  mt(mt) {
    this.style.marginTop = mt;
    return this;
  },

  mr(mr) {
    this.style.marginRight = mr;
    return this;
  },

  mb(mb) {
    this.style.marginBottom = mb;
    return this;
  },

  ml(ml) {
    this.style.marginLeft = ml;
    return this;
  },

  m(m) {
    this.style.margin = m;
    return this;
  },

  border() {
    this.style.border = '1px solid currentColor';
    return this;
  },

  borderW(width) {
    this.style.borderWidth = width;
    return this;
  },

  borderT(width) {
    this.style.borderTopWidth = width;
    return this;
  },

  borderR(width) {
    this.style.borderRightWidth = width;
    return this;
  },

  borderB(width) {
    this.style.borderBottomWidth = width;
    return this;
  },

  borderL(width) {
    this.style.borderLeftWidth = width;
    return this;
  },

  borderColor(color) {
    this.style.borderColor = color;
    return this;
  },

  borderStyle(style) {
    this.style.borderStyle = style;
    return this;
  },

  rounded(radius) {
    this.style.borderRadius = radius;
    return this;
  },

  roundedTL(radius) {
    this.style.borderTopLeftRadius = radius;
    return this;
  },

  roundedTR(radius) {
    this.style.borderTopRightRadius = radius;
    return this;
  },

  roundedBL(radius) {
    this.style.borderBottomLeftRadius = radius;
    return this;
  },

  roundedBR(radius) {
    this.style.borderBottomRightRadius = radius;
    return this;
  },

  bg(color) {
    this.style.backgroundColor = color;
    return this;
  },

  bgColor(color) {
    this.style.backgroundColor = color;
    return this;
  },

  bgImage(image) {
    this.style.backgroundImage = image;
    return this;
  },

  bgSize(size) {
    this.style.backgroundSize = size;
    return this;
  },

  bgPosition(position) {
    this.style.backgroundPosition = position;
    return this;
  },

  bgRepeat(repeat) {
    this.style.backgroundRepeat = repeat;
    return this;
  },

  shadow(shadow) {
    this.style.boxShadow = shadow;
    return this;
  },

  shadowMd() {
    this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
    return this;
  },

  shadowLg() {
    this.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    return this;
  },

  shadowNone() {
    this.style.boxShadow = 'none';
    return this;
  },

  opacity(value) {
    this.style.opacity = String(value);
    return this;
  },

  text(color) {
    this.style.color = color;
    return this;
  },

  textColor(color) {
    this.style.color = color;
    return this;
  },

  textSize(size) {
    this.style.fontSize = size;
    return this;
  },

  textAlign(align) {
    this.style.textAlign = align;
    return this;
  },

  fontWeight(weight) {
    this.style.fontWeight = weight;
    return this;
  },

  lineHeight(height) {
    this.style.lineHeight = height;
    return this;
  },

  letterSpacing(spacing) {
    this.style.letterSpacing = spacing;
    return this;
  },

  textOverflow(overflow) {
    this.style.textOverflow = overflow;
    return this;
  },

  whitespace(value) {
    this.style.whiteSpace = value;
    return this;
  },

  truncate() {
    this.style.overflow = 'hidden';
    this.style.textOverflow = 'ellipsis';
    this.style.whiteSpace = 'nowrap';
    return this;
  },

  lineClamp(lines) {
    this.style.display = '-webkit-box';
    this.style.webkitLineClamp = String(lines);
    this.style.webkitBoxOrient = 'vertical';
    this.style.overflow = 'hidden';
    return this;
  },

  relative() {
    this.style.position = 'relative';
    return this;
  },

  absolute() {
    this.style.position = 'absolute';
    return this;
  },

  fixed() {
    this.style.position = 'fixed';
    return this;
  },

  sticky() {
    this.style.position = 'sticky';
    return this;
  },

  static() {
    this.style.position = 'static';
    return this;
  },

  inset(value) {
    this.style.top = value;
    this.style.right = value;
    this.style.bottom = value;
    this.style.left = value;
    return this;
  },

  insetY(value) {
    this.style.top = value;
    this.style.bottom = value;
    return this;
  },

  insetX(value) {
    this.style.right = value;
    this.style.left = value;
    return this;
  },

  top(value) {
    this.style.top = value;
    return this;
  },

  right(value) {
    this.style.right = value;
    return this;
  },

  bottom(value) {
    this.style.bottom = value;
    return this;
  },

  left(value) {
    this.style.left = value;
    return this;
  },

  z(value) {
    this.style.zIndex = String(value);
    return this;
  },

  zIndex(value) {
    this.style.zIndex = String(value);
    return this;
  },

  overflow(value) {
    this.style.overflow = value;
    return this;
  },

  overflowX(value) {
    this.style.overflowX = value;
    return this;
  },

  overflowY(value) {
    this.style.overflowY = value;
    return this;
  },

  overflowHidden() {
    this.style.overflow = 'hidden';
    return this;
  },

  overflowScroll() {
    this.style.overflow = 'scroll';
    return this;
  },

  overflowAuto() {
    this.style.overflow = 'auto';
    return this;
  },

  overflowVisible() {
    this.style.overflow = 'visible';
    return this;
  },

  cursor(cursor) {
    this.style.cursor = cursor;
    return this;
  },

  cursorPointer() {
    this.style.cursor = 'pointer';
    return this;
  },

  cursorDefault() {
    this.style.cursor = 'default';
    return this;
  },

  cursorMove() {
    this.style.cursor = 'move';
    return this;
  },

  cursorGrab() {
    this.style.cursor = 'grab';
    return this;
  },

  cursorGrabbing() {
    this.style.cursor = 'grabbing';
    return this;
  },

  pointerEvents(value) {
    this.style.pointerEvents = value;
    return this;
  },

  pointerEventsNone() {
    this.style.pointerEvents = 'none';
    return this;
  },

  pointerEventsAuto() {
    this.style.pointerEvents = 'auto';
    return this;
  },

  userSelect(value) {
    this.style.userSelect = value;
    return this;
  },

  selectNone() {
    this.style.userSelect = 'none';
    return this;
  },

  selectText() {
    this.style.userSelect = 'text';
    return this;
  },

  selectAll() {
    this.style.userSelect = 'all';
    return this;
  },

  block() {
    this.style.display = 'block';
    return this;
  },

  inlineBlock() {
    this.style.display = 'inline-block';
    return this;
  },

  inline() {
    this.style.display = 'inline';
    return this;
  },

  hide() {
    this.style.display = 'none';
    return this;
  },

  visible() {
    this.style.visibility = 'visible';
    return this;
  },

  invisible() {
    this.style.visibility = 'hidden';
    return this;
  },

  rotate(deg) {
    this.style.transform = `rotate(${deg}deg)`;
    return this;
  },

  scale(x, y?) {
    const yValue = y !== undefined ? y : x;
    this.style.transform = `scale(${x}, ${yValue})`;
    return this;
  },

  transformTranslate(x, y) {
    this.style.transform = `translate(${x}, ${y})`;
    return this;
  },

  transition(property) {
    this.style.transition = property;
    return this;
  },

  transitionDuration(duration) {
    this.style.transitionDuration = duration;
    return this;
  },

  transitionTimingFunction(timing) {
    this.style.transitionTimingFunction = timing;
    return this;
  },

  transitionDelay(delay) {
    this.style.transitionDelay = delay;
    return this;
  },

  onClick(handler) {
    return this.on('click', handler as EventListener);
  },

  onDoubleClick(handler) {
    return this.on('dblclick', handler as EventListener);
  },

  onMouseDown(handler) {
    return this.on('mousedown', handler as EventListener);
  },

  onMouseUp(handler) {
    return this.on('mouseup', handler as EventListener);
  },

  onMouseMove(handler) {
    return this.on('mousemove', handler as EventListener);
  },

  onMouseEnter(handler) {
    return this.on('mouseenter', handler as EventListener);
  },

  onMouseLeave(handler) {
    return this.on('mouseleave', handler as EventListener);
  },

  onMouseOver(handler) {
    return this.on('mouseover', handler as EventListener);
  },

  onMouseOut(handler) {
    return this.on('mouseout', handler as EventListener);
  },

  onMouseWheel(handler) {
    return this.on('wheel', handler as EventListener);
  },

  onKeyDown(handler) {
    return this.on('keydown', handler as EventListener);
  },

  onKeyUp(handler) {
    return this.on('keyup', handler as EventListener);
  },

  onKeyPress(handler) {
    return this.on('keypress', handler as EventListener);
  },

  onFocus(handler) {
    return this.on('focus', handler as EventListener);
  },

  onBlur(handler) {
    return this.on('blur', handler as EventListener);
  },

  onFocusIn(handler) {
    return this.on('focusin', handler as EventListener);
  },

  onFocusOut(handler) {
    return this.on('focusout', handler as EventListener);
  },

  onChange(handler) {
    return this.on('change', handler as EventListener);
  },

  onInput(handler) {
    return this.on('input', handler as EventListener);
  },

  onSubmit(handler) {
    return this.on('submit', handler as EventListener);
  },

  onReset(handler) {
    return this.on('reset', handler as EventListener);
  },

  onTouchStart(handler) {
    return this.on('touchstart', handler as EventListener);
  },

  onTouchEnd(handler) {
    return this.on('touchend', handler as EventListener);
  },

  onTouchMove(handler) {
    return this.on('touchmove', handler as EventListener);
  },

  onTouchCancel(handler) {
    return this.on('touchcancel', handler as EventListener);
  },

  onDrag(handler: (event: DragEvent) => void) {
    return this.on('drag', handler as EventListener);
  },

  onDragStart(handler: (event: DragEvent) => void) {
    return this.on('dragstart', handler as EventListener);
  },

  onDragEnd(handler: (event: DragEvent) => void) {
    return this.on('dragend', handler as EventListener);
  },

  onDragEnter(handler: (event: DragEvent) => void) {
    return this.on('dragenter', handler as EventListener);
  },

  onDragLeave(handler: (event: DragEvent) => void) {
    return this.on('dragleave', handler as EventListener);
  },

  onDragOver(handler: (event: DragEvent) => void) {
    return this.on('dragover', handler as EventListener);
  },

  onDragDrop(handler: (event: DragEvent) => void) {
    return this.on('drop', handler as EventListener);
  },

  onCopy(handler: (event: ClipboardEvent) => void) {
    return this.on('copy', handler as EventListener);
  },

  onCut(handler: (event: ClipboardEvent) => void) {
    return this.on('cut', handler as EventListener);
  },

  onPaste(handler: (event: ClipboardEvent) => void) {
    return this.on('paste', handler as EventListener);
  },

  onScroll(handler) {
    return this.on('scroll', handler as EventListener);
  },

  onResize(handler: (event: UIEvent) => void) {
    return this.on('resize', handler as EventListener);
  },

  onPlay(handler) {
    return this.on('play', handler as EventListener);
  },

  onPause(handler) {
    return this.on('pause', handler as EventListener);
  },

  onEnded(handler) {
    return this.on('ended', handler as EventListener);
  },

  onVolumeChange(handler) {
    return this.on('volumechange', handler as EventListener);
  },

  onAnimationStart(handler) {
    return this.on('animationstart', handler as EventListener);
  },

  onAnimationEnd(handler) {
    return this.on('animationend', handler as EventListener);
  },

  onAnimationIteration(handler) {
    return this.on('animationiteration', handler as EventListener);
  },

  onTransitionEnd(handler) {
    return this.on('transitionend', handler as EventListener);
  },

  onPointerDown(handler) {
    return this.on('pointerdown', handler as EventListener);
  },

  onPointerUp(handler) {
    return this.on('pointerup', handler as EventListener);
  },

  onPointerMove(handler) {
    return this.on('pointermove', handler as EventListener);
  },

  onPointerEnter(handler) {
    return this.on('pointerenter', handler as EventListener);
  },

  onPointerLeave(handler) {
    return this.on('pointerleave', handler as EventListener);
  },

  onPointerCancel(handler) {
    return this.on('pointercancel', handler as EventListener);
  },

  on(eventName, handler) {
    this.addEventListener(eventName, handler);
    return this;
  },

  off(eventName, handler) {
    this.removeEventListener(eventName, handler);
    return this;
  },
} as HTMLElement);

export {};
