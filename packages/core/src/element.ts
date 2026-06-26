declare global {
  interface HTMLElement {
    jpui: true;

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
    off(eventName: string): this;

    // # utils
  }
}

const trackedEventListeners = new WeakMap<HTMLElement, Map<string, EventListener>>();

function setEventListener(element: HTMLElement, eventName: string, handler: EventListener) {
  let listeners = trackedEventListeners.get(element);
  if (!listeners) {
    listeners = new Map();
    trackedEventListeners.set(element, listeners);
  }
  const prev = listeners.get(eventName);
  if (prev) {
    element.removeEventListener(eventName, prev);
  }
  listeners.set(eventName, handler);
  element.addEventListener(eventName, handler);
}

function removeTrackedEventListener(element: HTMLElement, eventName: string) {
  const listeners = trackedEventListeners.get(element);
  const handler = listeners?.get(eventName);
  if (!handler) {
    return;
  }
  element.removeEventListener(eventName, handler);
  listeners!.delete(eventName);
  if (listeners!.size === 0) {
    trackedEventListeners.delete(element);
  }
}

let p = HTMLElement.prototype;

p.jpui = true;

p.class = function (this: HTMLElement, c: string | string[]) {
  if (typeof c === 'string') {
    this.className = c;
  } else if (Array.isArray(c)) {
    this.className = c.join(' ');
  } else {
    $throw('Invalid argument type');
  }
  return this;
};

p.w = function (this: HTMLElement, w: string) {
  this.style.width = w;
  return this;
};

p.h = function (this: HTMLElement, h: string) {
  this.style.height = h;
  return this;
};

p.size = function (this: HTMLElement, w: string, h: string) {
  this.style.width = w;
  this.style.height = h;
  return this;
};

p.minW = function (this: HTMLElement, w: string) {
  this.style.minWidth = w;
  return this;
};

p.minH = function (this: HTMLElement, h: string) {
  this.style.minHeight = h;
  return this;
};

p.maxW = function (this: HTMLElement, w: string) {
  this.style.maxWidth = w;
  return this;
};

p.maxH = function (this: HTMLElement, h: string) {
  this.style.maxHeight = h;
  return this;
};

p.flex = function (this: HTMLElement) {
  this.style.display = 'flex';
  return this;
};

p.flexFlex = function (this: HTMLElement) {
  this.style.display = 'flex';
  this.style.flex = '1 1 0%';
  return this;
};

p.flexNone = function (this: HTMLElement) {
  this.style.flex = 'none';
  return this;
};

p.flexAuto = function (this: HTMLElement) {
  this.style.flex = '1 1 auto';
  return this;
};

p.flexGrow = function (this: HTMLElement, grow: number) {
  this.style.flexGrow = String(grow);
  return this;
};

p.flexShrink = function (this: HTMLElement, shrink: number) {
  this.style.flexShrink = String(shrink);
  return this;
};

p.flexBasis = function (this: HTMLElement, basis: string) {
  this.style.flexBasis = basis;
  return this;
};

p.flexDirection = function (this: HTMLElement, direction: string) {
  this.style.flexDirection = direction;
  return this;
};

p.flexWrap = function (this: HTMLElement, wrap: string) {
  this.style.flexWrap = wrap;
  return this;
};

p.grid = function (this: HTMLElement) {
  this.style.display = 'grid';
  return this;
};

p.gridTemplateColumns = function (this: HTMLElement, columns: string) {
  this.style.gridTemplateColumns = columns;
  return this;
};

p.gridTemplateRows = function (this: HTMLElement, rows: string) {
  this.style.gridTemplateRows = rows;
  return this;
};

p.gridColumn = function (this: HTMLElement, column: string) {
  this.style.gridColumn = column;
  return this;
};

p.gridRow = function (this: HTMLElement, row: string) {
  this.style.gridRow = row;
  return this;
};

p.gap = function (this: HTMLElement, gap: string) {
  this.style.gap = gap;
  return this;
};

p.gapX = function (this: HTMLElement, gap: string) {
  this.style.columnGap = gap;
  return this;
};

p.gapY = function (this: HTMLElement, gap: string) {
  this.style.rowGap = gap;
  return this;
};

p.justify = function (this: HTMLElement, justify: string) {
  this.style.justifyContent = justify;
  return this;
};

p.items = function (this: HTMLElement, items: string) {
  this.style.alignItems = items;
  return this;
};

p.content = function (this: HTMLElement, content: string) {
  this.style.alignContent = content;
  return this;
};

p.self = function (this: HTMLElement, alignSelf: string) {
  this.style.alignSelf = alignSelf;
  return this;
};

p.justifySelf = function (this: HTMLElement, justifySelf: string) {
  this.style.justifySelf = justifySelf;
  return this;
};

p.px = function (this: HTMLElement, px: string) {
  this.style.paddingLeft = px;
  this.style.paddingRight = px;
  return this;
};

p.py = function (this: HTMLElement, py: string) {
  this.style.paddingTop = py;
  this.style.paddingBottom = py;
  return this;
};

p.pt = function (this: HTMLElement, pt: string) {
  this.style.paddingTop = pt;
  return this;
};

p.pr = function (this: HTMLElement, pr: string) {
  this.style.paddingRight = pr;
  return this;
};

p.pb = function (this: HTMLElement, pb: string) {
  this.style.paddingBottom = pb;
  return this;
};

p.pl = function (this: HTMLElement, pl: string) {
  this.style.paddingLeft = pl;
  return this;
};

p.p = function (this: HTMLElement, p: string) {
  this.style.padding = p;
  return this;
};

p.mx = function (this: HTMLElement, mx: string) {
  this.style.marginLeft = mx;
  this.style.marginRight = mx;
  return this;
};

p.my = function (this: HTMLElement, my: string) {
  this.style.marginTop = my;
  this.style.marginBottom = my;
  return this;
};

p.mt = function (this: HTMLElement, mt: string) {
  this.style.marginTop = mt;
  return this;
};

p.mr = function (this: HTMLElement, mr: string) {
  this.style.marginRight = mr;
  return this;
};

p.mb = function (this: HTMLElement, mb: string) {
  this.style.marginBottom = mb;
  return this;
};

p.ml = function (this: HTMLElement, ml: string) {
  this.style.marginLeft = ml;
  return this;
};

p.m = function (this: HTMLElement, m: string) {
  this.style.margin = m;
  return this;
};

p.border = function (this: HTMLElement) {
  this.style.border = '1px solid currentColor';
  return this;
};

p.borderW = function (this: HTMLElement, width: string) {
  this.style.borderWidth = width;
  return this;
};

p.borderT = function (this: HTMLElement, width: string) {
  this.style.borderTopWidth = width;
  return this;
};

p.borderR = function (this: HTMLElement, width: string) {
  this.style.borderRightWidth = width;
  return this;
};

p.borderB = function (this: HTMLElement, width: string) {
  this.style.borderBottomWidth = width;
  return this;
};

p.borderL = function (this: HTMLElement, width: string) {
  this.style.borderLeftWidth = width;
  return this;
};

p.borderColor = function (this: HTMLElement, color: string) {
  this.style.borderColor = color;
  return this;
};

p.borderStyle = function (this: HTMLElement, style: string) {
  this.style.borderStyle = style;
  return this;
};

p.rounded = function (this: HTMLElement, radius: string) {
  this.style.borderRadius = radius;
  return this;
};

p.roundedTL = function (this: HTMLElement, radius: string) {
  this.style.borderTopLeftRadius = radius;
  return this;
};

p.roundedTR = function (this: HTMLElement, radius: string) {
  this.style.borderTopRightRadius = radius;
  return this;
};

p.roundedBL = function (this: HTMLElement, radius: string) {
  this.style.borderBottomLeftRadius = radius;
  return this;
};

p.roundedBR = function (this: HTMLElement, radius: string) {
  this.style.borderBottomRightRadius = radius;
  return this;
};

p.bg = function (this: HTMLElement, color: string) {
  this.style.backgroundColor = color;
  return this;
};

p.bgColor = function (this: HTMLElement, color: string) {
  this.style.backgroundColor = color;
  return this;
};

p.bgImage = function (this: HTMLElement, image: string) {
  this.style.backgroundImage = image;
  return this;
};

p.bgSize = function (this: HTMLElement, size: string) {
  this.style.backgroundSize = size;
  return this;
};

p.bgPosition = function (this: HTMLElement, position: string) {
  this.style.backgroundPosition = position;
  return this;
};

p.bgRepeat = function (this: HTMLElement, repeat: string) {
  this.style.backgroundRepeat = repeat;
  return this;
};

p.shadow = function (this: HTMLElement, shadow: string) {
  this.style.boxShadow = shadow;
  return this;
};

p.shadowMd = function (this: HTMLElement) {
  this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
  return this;
};

p.shadowLg = function (this: HTMLElement) {
  this.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
  return this;
};

p.shadowNone = function (this: HTMLElement) {
  this.style.boxShadow = 'none';
  return this;
};

p.opacity = function (this: HTMLElement, value: number) {
  this.style.opacity = String(value);
  return this;
};

p.text = function (this: HTMLElement, color: string) {
  this.style.color = color;
  return this;
};

p.textColor = function (this: HTMLElement, color: string) {
  this.style.color = color;
  return this;
};

p.textSize = function (this: HTMLElement, size: string) {
  this.style.fontSize = size;
  return this;
};

p.textAlign = function (this: HTMLElement, align: string) {
  this.style.textAlign = align;
  return this;
};

p.fontWeight = function (this: HTMLElement, weight: string) {
  this.style.fontWeight = weight;
  return this;
};

p.lineHeight = function (this: HTMLElement, height: string) {
  this.style.lineHeight = height;
  return this;
};

p.letterSpacing = function (this: HTMLElement, spacing: string) {
  this.style.letterSpacing = spacing;
  return this;
};

p.textOverflow = function (this: HTMLElement, overflow: string) {
  this.style.textOverflow = overflow;
  return this;
};

p.whitespace = function (this: HTMLElement, value: string) {
  this.style.whiteSpace = value;
  return this;
};

p.truncate = function (this: HTMLElement) {
  this.style.overflow = 'hidden';
  this.style.textOverflow = 'ellipsis';
  this.style.whiteSpace = 'nowrap';
  return this;
};

p.lineClamp = function (this: HTMLElement, lines: number) {
  this.style.display = '-webkit-box';
  this.style.webkitLineClamp = String(lines);
  this.style.webkitBoxOrient = 'vertical';
  this.style.overflow = 'hidden';
  return this;
};

p.relative = function (this: HTMLElement) {
  this.style.position = 'relative';
  return this;
};

p.absolute = function (this: HTMLElement) {
  this.style.position = 'absolute';
  return this;
};

p.fixed = function (this: HTMLElement) {
  this.style.position = 'fixed';
  return this;
};

p.sticky = function (this: HTMLElement) {
  this.style.position = 'sticky';
  return this;
};

p.static = function (this: HTMLElement) {
  this.style.position = 'static';
  return this;
};

p.inset = function (this: HTMLElement, value: string) {
  this.style.top = value;
  this.style.right = value;
  this.style.bottom = value;
  this.style.left = value;
  return this;
};

p.insetY = function (this: HTMLElement, value: string) {
  this.style.top = value;
  this.style.bottom = value;
  return this;
};

p.insetX = function (this: HTMLElement, value: string) {
  this.style.right = value;
  this.style.left = value;
  return this;
};

p.top = function (this: HTMLElement, value: string) {
  this.style.top = value;
  return this;
};

p.right = function (this: HTMLElement, value: string) {
  this.style.right = value;
  return this;
};

p.bottom = function (this: HTMLElement, value: string) {
  this.style.bottom = value;
  return this;
};

p.left = function (this: HTMLElement, value: string) {
  this.style.left = value;
  return this;
};

p.z = function (this: HTMLElement, value: number) {
  this.style.zIndex = String(value);
  return this;
};

p.zIndex = function (this: HTMLElement, value: number) {
  this.style.zIndex = String(value);
  return this;
};

p.overflow = function (this: HTMLElement, value: string) {
  this.style.overflow = value;
  return this;
};

p.overflowX = function (this: HTMLElement, value: string) {
  this.style.overflowX = value;
  return this;
};

p.overflowY = function (this: HTMLElement, value: string) {
  this.style.overflowY = value;
  return this;
};

p.overflowHidden = function (this: HTMLElement) {
  this.style.overflow = 'hidden';
  return this;
};

p.overflowScroll = function (this: HTMLElement) {
  this.style.overflow = 'scroll';
  return this;
};

p.overflowAuto = function (this: HTMLElement) {
  this.style.overflow = 'auto';
  return this;
};

p.overflowVisible = function (this: HTMLElement) {
  this.style.overflow = 'visible';
  return this;
};

p.cursor = function (this: HTMLElement, cursor: string) {
  this.style.cursor = cursor;
  return this;
};

p.cursorPointer = function (this: HTMLElement) {
  this.style.cursor = 'pointer';
  return this;
};

p.cursorDefault = function (this: HTMLElement) {
  this.style.cursor = 'default';
  return this;
};

p.cursorMove = function (this: HTMLElement) {
  this.style.cursor = 'move';
  return this;
};

p.cursorGrab = function (this: HTMLElement) {
  this.style.cursor = 'grab';
  return this;
};

p.cursorGrabbing = function (this: HTMLElement) {
  this.style.cursor = 'grabbing';
  return this;
};

p.pointerEvents = function (this: HTMLElement, value: string) {
  this.style.pointerEvents = value;
  return this;
};

p.pointerEventsNone = function (this: HTMLElement) {
  this.style.pointerEvents = 'none';
  return this;
};

p.pointerEventsAuto = function (this: HTMLElement) {
  this.style.pointerEvents = 'auto';
  return this;
};

p.userSelect = function (this: HTMLElement, value: string) {
  this.style.userSelect = value;
  return this;
};

p.selectNone = function (this: HTMLElement) {
  this.style.userSelect = 'none';
  return this;
};

p.selectText = function (this: HTMLElement) {
  this.style.userSelect = 'text';
  return this;
};

p.selectAll = function (this: HTMLElement) {
  this.style.userSelect = 'all';
  return this;
};

p.block = function (this: HTMLElement) {
  this.style.display = 'block';
  return this;
};

p.inlineBlock = function (this: HTMLElement) {
  this.style.display = 'inline-block';
  return this;
};

p.inline = function (this: HTMLElement) {
  this.style.display = 'inline';
  return this;
};

p.hide = function (this: HTMLElement) {
  this.style.display = 'none';
  return this;
};

p.visible = function (this: HTMLElement) {
  this.style.visibility = 'visible';
  return this;
};

p.invisible = function (this: HTMLElement) {
  this.style.visibility = 'hidden';
  return this;
};

p.rotate = function (this: HTMLElement, deg: number) {
  this.style.transform = `rotate(${deg}deg)`;
  return this;
};

p.scale = function (this: HTMLElement, x: number, y?: number) {
  const yValue = y !== undefined ? y : x;
  this.style.transform = `scale(${x}, ${yValue})`;
  return this;
};

p.transformTranslate = function (this: HTMLElement, x: string, y: string) {
  this.style.transform = `translate(${x}, ${y})`;
  return this;
};

p.transition = function (this: HTMLElement, property: string) {
  this.style.transition = property;
  return this;
};

p.transitionDuration = function (this: HTMLElement, duration: string) {
  this.style.transitionDuration = duration;
  return this;
};

p.transitionTimingFunction = function (this: HTMLElement, timing: string) {
  this.style.transitionTimingFunction = timing;
  return this;
};

p.transitionDelay = function (this: HTMLElement, delay: string) {
  this.style.transitionDelay = delay;
  return this;
};

p.onClick = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'click', handler as EventListener);
  return this;
};

p.onDoubleClick = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'dblclick', handler as EventListener);
  return this;
};

p.onMouseDown = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mousedown', handler as EventListener);
  return this;
};

p.onMouseUp = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mouseup', handler as EventListener);
  return this;
};

p.onMouseMove = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mousemove', handler as EventListener);
  return this;
};

p.onMouseEnter = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mouseenter', handler as EventListener);
  return this;
};

p.onMouseLeave = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mouseleave', handler as EventListener);
  return this;
};

p.onMouseOver = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mouseover', handler as EventListener);
  return this;
};

p.onMouseOut = function (this: HTMLElement, handler: (event: MouseEvent) => void) {
  setEventListener(this, 'mouseout', handler as EventListener);
  return this;
};

p.onMouseWheel = function (this: HTMLElement, handler: (event: WheelEvent) => void) {
  setEventListener(this, 'wheel', handler as EventListener);
  return this;
};

p.onKeyDown = function (this: HTMLElement, handler: (event: KeyboardEvent) => void) {
  setEventListener(this, 'keydown', handler as EventListener);
  return this;
};

p.onKeyUp = function (this: HTMLElement, handler: (event: KeyboardEvent) => void) {
  setEventListener(this, 'keyup', handler as EventListener);
  return this;
};

p.onKeyPress = function (this: HTMLElement, handler: (event: KeyboardEvent) => void) {
  setEventListener(this, 'keypress', handler as EventListener);
  return this;
};

p.onFocus = function (this: HTMLElement, handler: (event: FocusEvent) => void) {
  setEventListener(this, 'focus', handler as EventListener);
  return this;
};

p.onBlur = function (this: HTMLElement, handler: (event: FocusEvent) => void) {
  setEventListener(this, 'blur', handler as EventListener);
  return this;
};

p.onFocusIn = function (this: HTMLElement, handler: (event: FocusEvent) => void) {
  setEventListener(this, 'focusin', handler as EventListener);
  return this;
};

p.onFocusOut = function (this: HTMLElement, handler: (event: FocusEvent) => void) {
  setEventListener(this, 'focusout', handler as EventListener);
  return this;
};

p.onChange = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'change', handler);
  return this;
};

p.onInput = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'input', handler);
  return this;
};

p.onSubmit = function (this: HTMLElement, handler: (event: SubmitEvent) => void) {
  setEventListener(this, 'submit', handler as EventListener);
  return this;
};

p.onReset = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'reset', handler);
  return this;
};

p.onTouchStart = function (this: HTMLElement, handler: (event: TouchEvent) => void) {
  setEventListener(this, 'touchstart', handler as EventListener);
  return this;
};

p.onTouchEnd = function (this: HTMLElement, handler: (event: TouchEvent) => void) {
  setEventListener(this, 'touchend', handler as EventListener);
  return this;
};

p.onTouchMove = function (this: HTMLElement, handler: (event: TouchEvent) => void) {
  setEventListener(this, 'touchmove', handler as EventListener);
  return this;
};

p.onTouchCancel = function (this: HTMLElement, handler: (event: TouchEvent) => void) {
  setEventListener(this, 'touchcancel', handler as EventListener);
  return this;
};

p.onDrag = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'drag', handler as EventListener);
  return this;
};

p.onDragStart = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'dragstart', handler as EventListener);
  return this;
};

p.onDragEnd = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'dragend', handler as EventListener);
  return this;
};

p.onDragEnter = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'dragenter', handler as EventListener);
  return this;
};

p.onDragLeave = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'dragleave', handler as EventListener);
  return this;
};

p.onDragOver = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'dragover', handler as EventListener);
  return this;
};

p.onDragDrop = function (this: HTMLElement, handler: (event: DragEvent) => void) {
  setEventListener(this, 'drop', handler as EventListener);
  return this;
};

p.onCopy = function (this: HTMLElement, handler: (event: ClipboardEvent) => void) {
  setEventListener(this, 'copy', handler as EventListener);
  return this;
};

p.onCut = function (this: HTMLElement, handler: (event: ClipboardEvent) => void) {
  setEventListener(this, 'cut', handler as EventListener);
  return this;
};

p.onPaste = function (this: HTMLElement, handler: (event: ClipboardEvent) => void) {
  setEventListener(this, 'paste', handler as EventListener);
  return this;
};

p.onScroll = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'scroll', handler);
  return this;
};

p.onResize = function (this: HTMLElement, handler: (event: UIEvent) => void) {
  setEventListener(this, 'resize', handler as EventListener);
  return this;
};

p.onPlay = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'play', handler);
  return this;
};

p.onPause = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'pause', handler);
  return this;
};

p.onEnded = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'ended', handler);
  return this;
};

p.onVolumeChange = function (this: HTMLElement, handler: (event: Event) => void) {
  setEventListener(this, 'volumechange', handler);
  return this;
};

p.onAnimationStart = function (this: HTMLElement, handler: (event: AnimationEvent) => void) {
  setEventListener(this, 'animationstart', handler as EventListener);
  return this;
};

p.onAnimationEnd = function (this: HTMLElement, handler: (event: AnimationEvent) => void) {
  setEventListener(this, 'animationend', handler as EventListener);
  return this;
};

p.onAnimationIteration = function (this: HTMLElement, handler: (event: AnimationEvent) => void) {
  setEventListener(this, 'animationiteration', handler as EventListener);
  return this;
};

p.onTransitionEnd = function (this: HTMLElement, handler: (event: TransitionEvent) => void) {
  setEventListener(this, 'transitionend', handler as EventListener);
  return this;
};

p.onPointerDown = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointerdown', handler as EventListener);
  return this;
};

p.onPointerUp = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointerup', handler as EventListener);
  return this;
};

p.onPointerMove = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointermove', handler as EventListener);
  return this;
};

p.onPointerEnter = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointerenter', handler as EventListener);
  return this;
};

p.onPointerLeave = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointerleave', handler as EventListener);
  return this;
};

p.onPointerCancel = function (this: HTMLElement, handler: (event: PointerEvent) => void) {
  setEventListener(this, 'pointercancel', handler as EventListener);
  return this;
};

p.on = function (this: HTMLElement, eventName: string, handler: EventListener) {
  setEventListener(this, eventName, handler);
  return this;
};

p.off = function (this: HTMLElement, eventName: string) {
  removeTrackedEventListener(this, eventName);
  return this;
};

p = null as any; // clear reference to HTMLElement prototype

export {};
