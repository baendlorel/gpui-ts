declare global {
  interface HTMLElement {
    jpui: true;
    id_(id: string): this;

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

    // # utils
  }
}

Object.assign(HTMLElement.prototype, {
  id_(id: string) {
    this.id = id;
    return this;
  },
  class(c: string | string[]) {
    if (Array.isArray(c)) {
      this.className = c.join(' ');
    } else {
      this.className = c;
    }
    return this;
  },
  w(this: HTMLElement, w: string) {
    this.style.width = w;
    return this;
  },

  h(this: HTMLElement, h: string) {
    this.style.height = h;
    return this;
  },

  size(this: HTMLElement, w: string, h: string) {
    this.style.width = w;
    this.style.height = h;
    return this;
  },

  minW(this: HTMLElement, w: string) {
    this.style.minWidth = w;
    return this;
  },

  minH(this: HTMLElement, h: string) {
    this.style.minHeight = h;
    return this;
  },

  maxW(this: HTMLElement, w: string) {
    this.style.maxWidth = w;
    return this;
  },

  maxH(this: HTMLElement, h: string) {
    this.style.maxHeight = h;
    return this;
  },

  flex(this: HTMLElement) {
    this.style.display = 'flex';
    return this;
  },

  flexFlex(this: HTMLElement) {
    this.style.display = 'flex';
    this.style.flex = '1 1 0%';
    return this;
  },

  flexNone(this: HTMLElement) {
    this.style.flex = 'none';
    return this;
  },

  flexAuto(this: HTMLElement) {
    this.style.flex = '1 1 auto';
    return this;
  },

  flexGrow(this: HTMLElement, grow: number) {
    this.style.flexGrow = String(grow);
    return this;
  },

  flexShrink(this: HTMLElement, shrink: number) {
    this.style.flexShrink = String(shrink);
    return this;
  },

  flexBasis(this: HTMLElement, basis: string) {
    this.style.flexBasis = basis;
    return this;
  },

  flexDirection(this: HTMLElement, direction: string) {
    this.style.flexDirection = direction;
    return this;
  },

  flexWrap(this: HTMLElement, wrap: string) {
    this.style.flexWrap = wrap;
    return this;
  },

  grid(this: HTMLElement) {
    this.style.display = 'grid';
    return this;
  },

  gridTemplateColumns(this: HTMLElement, columns: string) {
    this.style.gridTemplateColumns = columns;
    return this;
  },

  gridTemplateRows(this: HTMLElement, rows: string) {
    this.style.gridTemplateRows = rows;
    return this;
  },

  gridColumn(this: HTMLElement, column: string) {
    this.style.gridColumn = column;
    return this;
  },

  gridRow(this: HTMLElement, row: string) {
    this.style.gridRow = row;
    return this;
  },

  gap(this: HTMLElement, gap: string) {
    this.style.gap = gap;
    return this;
  },

  gapX(this: HTMLElement, gap: string) {
    this.style.columnGap = gap;
    return this;
  },

  gapY(this: HTMLElement, gap: string) {
    this.style.rowGap = gap;
    return this;
  },

  justify(this: HTMLElement, justify: string) {
    this.style.justifyContent = justify;
    return this;
  },

  items(this: HTMLElement, items: string) {
    this.style.alignItems = items;
    return this;
  },

  content(this: HTMLElement, content: string) {
    this.style.alignContent = content;
    return this;
  },

  self(this: HTMLElement, alignSelf: string) {
    this.style.alignSelf = alignSelf;
    return this;
  },

  justifySelf(this: HTMLElement, justifySelf: string) {
    this.style.justifySelf = justifySelf;
    return this;
  },

  px(this: HTMLElement, px: string) {
    this.style.paddingLeft = px;
    this.style.paddingRight = px;
    return this;
  },

  py(this: HTMLElement, py: string) {
    this.style.paddingTop = py;
    this.style.paddingBottom = py;
    return this;
  },

  pt(this: HTMLElement, pt: string) {
    this.style.paddingTop = pt;
    return this;
  },

  pr(this: HTMLElement, pr: string) {
    this.style.paddingRight = pr;
    return this;
  },

  pb(this: HTMLElement, pb: string) {
    this.style.paddingBottom = pb;
    return this;
  },

  pl(this: HTMLElement, pl: string) {
    this.style.paddingLeft = pl;
    return this;
  },

  p(this: HTMLElement, p: string) {
    this.style.padding = p;
    return this;
  },

  mx(this: HTMLElement, mx: string) {
    this.style.marginLeft = mx;
    this.style.marginRight = mx;
    return this;
  },

  my(this: HTMLElement, my: string) {
    this.style.marginTop = my;
    this.style.marginBottom = my;
    return this;
  },

  mt(this: HTMLElement, mt: string) {
    this.style.marginTop = mt;
    return this;
  },

  mr(this: HTMLElement, mr: string) {
    this.style.marginRight = mr;
    return this;
  },

  mb(this: HTMLElement, mb: string) {
    this.style.marginBottom = mb;
    return this;
  },

  ml(this: HTMLElement, ml: string) {
    this.style.marginLeft = ml;
    return this;
  },

  m(this: HTMLElement, m: string) {
    this.style.margin = m;
    return this;
  },

  border(this: HTMLElement) {
    this.style.border = '1px solid currentColor';
    return this;
  },

  borderW(this: HTMLElement, width: string) {
    this.style.borderWidth = width;
    return this;
  },

  borderT(this: HTMLElement, width: string) {
    this.style.borderTopWidth = width;
    return this;
  },

  borderR(this: HTMLElement, width: string) {
    this.style.borderRightWidth = width;
    return this;
  },

  borderB(this: HTMLElement, width: string) {
    this.style.borderBottomWidth = width;
    return this;
  },

  borderL(this: HTMLElement, width: string) {
    this.style.borderLeftWidth = width;
    return this;
  },

  borderColor(this: HTMLElement, color: string) {
    this.style.borderColor = color;
    return this;
  },

  borderStyle(this: HTMLElement, style: string) {
    this.style.borderStyle = style;
    return this;
  },

  rounded(this: HTMLElement, radius: string) {
    this.style.borderRadius = radius;
    return this;
  },

  roundedTL(this: HTMLElement, radius: string) {
    this.style.borderTopLeftRadius = radius;
    return this;
  },

  roundedTR(this: HTMLElement, radius: string) {
    this.style.borderTopRightRadius = radius;
    return this;
  },

  roundedBL(this: HTMLElement, radius: string) {
    this.style.borderBottomLeftRadius = radius;
    return this;
  },

  roundedBR(this: HTMLElement, radius: string) {
    this.style.borderBottomRightRadius = radius;
    return this;
  },

  bg(this: HTMLElement, color: string) {
    this.style.backgroundColor = color;
    return this;
  },

  bgColor(this: HTMLElement, color: string) {
    this.style.backgroundColor = color;
    return this;
  },

  bgImage(this: HTMLElement, image: string) {
    this.style.backgroundImage = image;
    return this;
  },

  bgSize(this: HTMLElement, size: string) {
    this.style.backgroundSize = size;
    return this;
  },

  bgPosition(this: HTMLElement, position: string) {
    this.style.backgroundPosition = position;
    return this;
  },

  bgRepeat(this: HTMLElement, repeat: string) {
    this.style.backgroundRepeat = repeat;
    return this;
  },

  shadow(this: HTMLElement, shadow: string) {
    this.style.boxShadow = shadow;
    return this;
  },

  shadowMd(this: HTMLElement) {
    this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
    return this;
  },

  shadowLg(this: HTMLElement) {
    this.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    return this;
  },

  shadowNone(this: HTMLElement) {
    this.style.boxShadow = 'none';
    return this;
  },

  opacity(this: HTMLElement, value: number) {
    this.style.opacity = String(value);
    return this;
  },

  text(this: HTMLElement, color: string) {
    this.style.color = color;
    return this;
  },

  textColor(this: HTMLElement, color: string) {
    this.style.color = color;
    return this;
  },

  textSize(this: HTMLElement, size: string) {
    this.style.fontSize = size;
    return this;
  },

  textAlign(this: HTMLElement, align: string) {
    this.style.textAlign = align;
    return this;
  },

  fontWeight(this: HTMLElement, weight: string) {
    this.style.fontWeight = weight;
    return this;
  },

  lineHeight(this: HTMLElement, height: string) {
    this.style.lineHeight = height;
    return this;
  },

  letterSpacing(this: HTMLElement, spacing: string) {
    this.style.letterSpacing = spacing;
    return this;
  },

  textOverflow(this: HTMLElement, overflow: string) {
    this.style.textOverflow = overflow;
    return this;
  },

  whitespace(this: HTMLElement, value: string) {
    this.style.whiteSpace = value;
    return this;
  },

  truncate(this: HTMLElement) {
    this.style.overflow = 'hidden';
    this.style.textOverflow = 'ellipsis';
    this.style.whiteSpace = 'nowrap';
    return this;
  },

  lineClamp(this: HTMLElement, lines: number) {
    this.style.display = '-webkit-box';
    this.style.webkitLineClamp = String(lines);
    this.style.webkitBoxOrient = 'vertical';
    this.style.overflow = 'hidden';
    return this;
  },

  relative(this: HTMLElement) {
    this.style.position = 'relative';
    return this;
  },

  absolute(this: HTMLElement) {
    this.style.position = 'absolute';
    return this;
  },

  fixed(this: HTMLElement) {
    this.style.position = 'fixed';
    return this;
  },

  sticky(this: HTMLElement) {
    this.style.position = 'sticky';
    return this;
  },

  static(this: HTMLElement) {
    this.style.position = 'static';
    return this;
  },

  inset(this: HTMLElement, value: string) {
    this.style.top = value;
    this.style.right = value;
    this.style.bottom = value;
    this.style.left = value;
    return this;
  },

  insetY(this: HTMLElement, value: string) {
    this.style.top = value;
    this.style.bottom = value;
    return this;
  },

  insetX(this: HTMLElement, value: string) {
    this.style.right = value;
    this.style.left = value;
    return this;
  },

  top(this: HTMLElement, value: string) {
    this.style.top = value;
    return this;
  },

  right(this: HTMLElement, value: string) {
    this.style.right = value;
    return this;
  },

  bottom(this: HTMLElement, value: string) {
    this.style.bottom = value;
    return this;
  },

  left(this: HTMLElement, value: string) {
    this.style.left = value;
    return this;
  },

  z(this: HTMLElement, value: number) {
    this.style.zIndex = String(value);
    return this;
  },

  zIndex(this: HTMLElement, value: number) {
    this.style.zIndex = String(value);
    return this;
  },

  overflow(this: HTMLElement, value: string) {
    this.style.overflow = value;
    return this;
  },

  overflowX(this: HTMLElement, value: string) {
    this.style.overflowX = value;
    return this;
  },

  overflowY(this: HTMLElement, value: string) {
    this.style.overflowY = value;
    return this;
  },

  overflowHidden(this: HTMLElement) {
    this.style.overflow = 'hidden';
    return this;
  },

  overflowScroll(this: HTMLElement) {
    this.style.overflow = 'scroll';
    return this;
  },

  overflowAuto(this: HTMLElement) {
    this.style.overflow = 'auto';
    return this;
  },

  overflowVisible(this: HTMLElement) {
    this.style.overflow = 'visible';
    return this;
  },

  cursor(this: HTMLElement, cursor: string) {
    this.style.cursor = cursor;
    return this;
  },

  cursorPointer(this: HTMLElement) {
    this.style.cursor = 'pointer';
    return this;
  },

  cursorDefault(this: HTMLElement) {
    this.style.cursor = 'default';
    return this;
  },

  cursorMove(this: HTMLElement) {
    this.style.cursor = 'move';
    return this;
  },

  cursorGrab(this: HTMLElement) {
    this.style.cursor = 'grab';
    return this;
  },

  cursorGrabbing(this: HTMLElement) {
    this.style.cursor = 'grabbing';
    return this;
  },

  pointerEvents(this: HTMLElement, value: string) {
    this.style.pointerEvents = value;
    return this;
  },

  pointerEventsNone(this: HTMLElement) {
    this.style.pointerEvents = 'none';
    return this;
  },

  pointerEventsAuto(this: HTMLElement) {
    this.style.pointerEvents = 'auto';
    return this;
  },

  userSelect(this: HTMLElement, value: string) {
    this.style.userSelect = value;
    return this;
  },

  selectNone(this: HTMLElement) {
    this.style.userSelect = 'none';
    return this;
  },

  selectText(this: HTMLElement) {
    this.style.userSelect = 'text';
    return this;
  },

  selectAll(this: HTMLElement) {
    this.style.userSelect = 'all';
    return this;
  },

  block(this: HTMLElement) {
    this.style.display = 'block';
    return this;
  },

  inlineBlock(this: HTMLElement) {
    this.style.display = 'inline-block';
    return this;
  },

  inline(this: HTMLElement) {
    this.style.display = 'inline';
    return this;
  },

  hide(this: HTMLElement) {
    this.style.display = 'none';
    return this;
  },

  visible(this: HTMLElement) {
    this.style.visibility = 'visible';
    return this;
  },

  invisible(this: HTMLElement) {
    this.style.visibility = 'hidden';
    return this;
  },

  rotate(this: HTMLElement, deg: number) {
    this.style.transform = `rotate(${deg}deg)`;
    return this;
  },

  scale(this: HTMLElement, x: number, y?: number) {
    const yValue = y !== undefined ? y : x;
    this.style.transform = `scale(${x}, ${yValue})`;
    return this;
  },

  transformTranslate(this: HTMLElement, x: string, y: string) {
    this.style.transform = `translate(${x}, ${y})`;
    return this;
  },

  transition(this: HTMLElement, property: string) {
    this.style.transition = property;
    return this;
  },

  transitionDuration(this: HTMLElement, duration: string) {
    this.style.transitionDuration = duration;
    return this;
  },

  transitionTimingFunction(this: HTMLElement, timing: string) {
    this.style.transitionTimingFunction = timing;
    return this;
  },

  transitionDelay(this: HTMLElement, delay: string) {
    this.style.transitionDelay = delay;
    return this;
  },

  onClick(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('click', handler);
    return this;
  },

  onDoubleClick(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('dblclick', handler as EventListener);
    return this;
  },

  onMouseDown(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mousedown', handler as EventListener);
    return this;
  },

  onMouseUp(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mouseup', handler as EventListener);
    return this;
  },

  onMouseMove(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mousemove', handler as EventListener);
    return this;
  },

  onMouseEnter(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mouseenter', handler as EventListener);
    return this;
  },

  onMouseLeave(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mouseleave', handler as EventListener);
    return this;
  },

  onMouseOver(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mouseover', handler as EventListener);
    return this;
  },

  onMouseOut(this: HTMLElement, handler: (event: MouseEvent) => void) {
    this.addEventListener('mouseout', handler as EventListener);
    return this;
  },

  onMouseWheel(this: HTMLElement, handler: (event: WheelEvent) => void) {
    this.addEventListener('wheel', handler as EventListener);
    return this;
  },

  onKeyDown(this: HTMLElement, handler: (event: KeyboardEvent) => void) {
    this.addEventListener('keydown', handler as EventListener);
    return this;
  },

  onKeyUp(this: HTMLElement, handler: (event: KeyboardEvent) => void) {
    this.addEventListener('keyup', handler as EventListener);
    return this;
  },

  onKeyPress(this: HTMLElement, handler: (event: KeyboardEvent) => void) {
    this.addEventListener('keypress', handler as EventListener);
    return this;
  },

  onFocus(this: HTMLElement, handler: (event: FocusEvent) => void) {
    this.addEventListener('focus', handler as EventListener);
    return this;
  },

  onBlur(this: HTMLElement, handler: (event: FocusEvent) => void) {
    this.addEventListener('blur', handler as EventListener);
    return this;
  },

  onFocusIn(this: HTMLElement, handler: (event: FocusEvent) => void) {
    this.addEventListener('focusin', handler as EventListener);
    return this;
  },

  onFocusOut(this: HTMLElement, handler: (event: FocusEvent) => void) {
    this.addEventListener('focusout', handler as EventListener);
    return this;
  },

  onChange(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('change', handler);
    return this;
  },

  onInput(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('input', handler);
    return this;
  },

  onSubmit(this: HTMLElement, handler: (event: SubmitEvent) => void) {
    this.addEventListener('submit', handler as EventListener);
    return this;
  },

  onReset(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('reset', handler);
    return this;
  },

  onTouchStart(this: HTMLElement, handler: (event: TouchEvent) => void) {
    this.addEventListener('touchstart', handler as EventListener);
    return this;
  },

  onTouchEnd(this: HTMLElement, handler: (event: TouchEvent) => void) {
    this.addEventListener('touchend', handler as EventListener);
    return this;
  },

  onTouchMove(this: HTMLElement, handler: (event: TouchEvent) => void) {
    this.addEventListener('touchmove', handler as EventListener);
    return this;
  },

  onTouchCancel(this: HTMLElement, handler: (event: TouchEvent) => void) {
    this.addEventListener('touchcancel', handler as EventListener);
    return this;
  },

  onDrag(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('drag', handler as EventListener);
    return this;
  },

  onDragStart(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('dragstart', handler as EventListener);
    return this;
  },

  onDragEnd(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('dragend', handler as EventListener);
    return this;
  },

  onDragEnter(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('dragenter', handler as EventListener);
    return this;
  },

  onDragLeave(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('dragleave', handler as EventListener);
    return this;
  },

  onDragOver(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('dragover', handler as EventListener);
    return this;
  },

  onDragDrop(this: HTMLElement, handler: (event: DragEvent) => void) {
    this.addEventListener('drop', handler as EventListener);
    return this;
  },

  onCopy(this: HTMLElement, handler: (event: ClipboardEvent) => void) {
    this.addEventListener('copy', handler as EventListener);
    return this;
  },

  onCut(this: HTMLElement, handler: (event: ClipboardEvent) => void) {
    this.addEventListener('cut', handler as EventListener);
    return this;
  },

  onPaste(this: HTMLElement, handler: (event: ClipboardEvent) => void) {
    this.addEventListener('paste', handler as EventListener);
    return this;
  },

  onScroll(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('scroll', handler);
    return this;
  },

  onResize(this: HTMLElement, handler: (event: UIEvent) => void) {
    this.addEventListener('resize', handler as EventListener);
    return this;
  },

  onPlay(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('play', handler);
    return this;
  },

  onPause(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('pause', handler);
    return this;
  },

  onEnded(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('ended', handler);
    return this;
  },

  onVolumeChange(this: HTMLElement, handler: (event: Event) => void) {
    this.addEventListener('volumechange', handler);
    return this;
  },

  onAnimationStart(this: HTMLElement, handler: (event: AnimationEvent) => void) {
    this.addEventListener('animationstart', handler as EventListener);
    return this;
  },

  onAnimationEnd(this: HTMLElement, handler: (event: AnimationEvent) => void) {
    this.addEventListener('animationend', handler as EventListener);
    return this;
  },

  onAnimationIteration(this: HTMLElement, handler: (event: AnimationEvent) => void) {
    this.addEventListener('animationiteration', handler as EventListener);
    return this;
  },

  onTransitionEnd(this: HTMLElement, handler: (event: TransitionEvent) => void) {
    this.addEventListener('transitionend', handler as EventListener);
    return this;
  },

  onPointerDown(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointerdown', handler as EventListener);
    return this;
  },

  onPointerUp(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointerup', handler as EventListener);
    return this;
  },

  onPointerMove(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointermove', handler as EventListener);
    return this;
  },

  onPointerEnter(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointerenter', handler as EventListener);
    return this;
  },

  onPointerLeave(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointerleave', handler as EventListener);
    return this;
  },

  onPointerCancel(this: HTMLElement, handler: (event: PointerEvent) => void) {
    this.addEventListener('pointercancel', handler as EventListener);
    return this;
  },

  on(this: HTMLElement, eventName: string, handler: EventListener) {
    this.addEventListener(eventName, handler);
    return this;
  },

  off(this: HTMLElement, eventName: string, handler: EventListener) {
    this.removeEventListener(eventName, handler);
    return this;
  },
} as HTMLElement);

export {};
