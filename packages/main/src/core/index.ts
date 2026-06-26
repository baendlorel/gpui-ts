declare global {
  interface HTMLElement {
    jpui: true;

    id_(id: string): this;
    attr_(attr: string, value: any): this;
    name_(name: string): this;
    child_(...nodes: any[]): this;
    text_(text: string): this;

    class_(classList: string[]): this;
    class_(className: string): this;
    w_(w: string): this;
    h_(h: string): this;
    size_(w: string, h: string): this;
    minW_(w: string): this;
    minH_(h: string): this;
    maxW_(w: string): this;
    maxH_(h: string): this;
    flex_(): this;
    flexFlex_(): this;
    flexNone_(): this;
    flexAuto_(): this;
    flexGrow_(grow: number): this;
    flexShrink_(shrink: number): this;
    flexBasis_(basis: string): this;
    flexDirection_(direction: string): this;
    flexWrap_(wrap: string): this;
    grid_(): this;
    gridTemplateColumns_(columns: string): this;
    gridTemplateRows_(rows: string): this;
    gridColumn_(column: string): this;
    gridRow_(row: string): this;
    gap_(gap: string): this;
    gapX_(gap: string): this;
    gapY_(gap: string): this;
    justify_(justify: string): this;
    items_(items: string): this;
    content_(content: string): this;
    self_(alignSelf: string): this;
    justifySelf_(justifySelf: string): this;
    px_(px: string): this;
    py_(py: string): this;
    pt_(pt: string): this;
    pr_(pr: string): this;
    pb_(pb: string): this;
    pl_(pl: string): this;
    p_(p: string): this;
    mx_(mx: string): this;
    my_(my: string): this;
    mt_(mt: string): this;
    mr_(mr: string): this;
    mb_(mb: string): this;
    ml_(ml: string): this;
    m_(m: string): this;
    border_(): this;
    borderW_(width: string): this;
    borderT_(width: string): this;
    borderR_(width: string): this;
    borderB_(width: string): this;
    borderL_(width: string): this;
    borderColor_(color: string): this;
    borderStyle_(style: string): this;
    rounded_(radius: string): this;
    roundedTL_(radius: string): this;
    roundedTR_(radius: string): this;
    roundedBL_(radius: string): this;
    roundedBR_(radius: string): this;
    bg_(color: string): this;
    bgColor_(color: string): this;
    bgImage_(image: string): this;
    bgSize_(size: string): this;
    bgPosition_(position: string): this;
    bgRepeat_(repeat: string): this;
    shadow_(shadow: string): this;
    shadowMd_(): this;
    shadowLg_(): this;
    shadowNone_(): this;
    opacity_(value: number): this;
    textColor_(color: string): this;
    textSize_(size: string): this;
    textAlign_(align: string): this;
    fontWeight_(weight: string): this;
    lineHeight_(height: string): this;
    letterSpacing_(spacing: string): this;
    textOverflow_(overflow: string): this;
    whitespace_(value: string): this;
    truncate_(): this;
    lineClamp_(lines: number): this;
    relative_(): this;
    absolute_(): this;
    fixed_(): this;
    sticky_(): this;
    static_(): this;
    inset_(value: string): this;
    insetY_(value: string): this;
    insetX_(value: string): this;
    top_(value: string): this;
    right_(value: string): this;
    bottom_(value: string): this;
    left_(value: string): this;
    z_(value: number): this;
    zIndex_(value: number): this;
    overflow_(value: string): this;
    overflowX_(value: string): this;
    overflowY_(value: string): this;
    overflowHidden_(): this;
    overflowScroll_(): this;
    overflowAuto_(): this;
    overflowVisible_(): this;
    cursor_(cursor: string): this;
    cursorPointer_(): this;
    cursorDefault_(): this;
    cursorMove_(): this;
    cursorGrab_(): this;
    cursorGrabbing_(): this;
    pointerEvents_(value: string): this;
    pointerEventsNone_(): this;
    pointerEventsAuto_(): this;
    userSelect_(value: string): this;
    selectNone_(): this;
    selectText_(): this;
    selectAll_(): this;
    block_(): this;
    inlineBlock_(): this;
    inline_(): this;
    hide_(): this;
    visible_(): this;
    invisible_(): this;
    rotate_(deg: number): this;
    scale_(x: number, y?: number): this;
    transformTranslate_(x: string, y: string): this;
    transition_(property: string): this;
    transitionDuration_(duration: string): this;
    transitionTimingFunction_(timing: string): this;
    transitionDelay_(delay: string): this;

    onClick_(handler: (event: MouseEvent) => void): this;
    onDoubleClick_(handler: (event: MouseEvent) => void): this;
    onMouseDown_(handler: (event: MouseEvent) => void): this;
    onMouseUp_(handler: (event: MouseEvent) => void): this;
    onMouseMove_(handler: (event: MouseEvent) => void): this;
    onMouseEnter_(handler: (event: MouseEvent) => void): this;
    onMouseLeave_(handler: (event: MouseEvent) => void): this;
    onMouseOver_(handler: (event: MouseEvent) => void): this;
    onMouseOut_(handler: (event: MouseEvent) => void): this;
    onMouseWheel_(handler: (event: WheelEvent) => void): this;
    onKeyDown_(handler: (event: KeyboardEvent) => void): this;
    onKeyUp_(handler: (event: KeyboardEvent) => void): this;
    onKeyPress_(handler: (event: KeyboardEvent) => void): this;
    onFocus_(handler: (event: FocusEvent) => void): this;
    onBlur_(handler: (event: FocusEvent) => void): this;
    onFocusIn_(handler: (event: FocusEvent) => void): this;
    onFocusOut_(handler: (event: FocusEvent) => void): this;
    onChange_(handler: (event: Event) => void): this;
    onInput_(handler: (event: Event) => void): this;
    onSubmit_(handler: (event: SubmitEvent) => void): this;
    onReset_(handler: (event: Event) => void): this;
    onTouchStart_(handler: (event: TouchEvent) => void): this;
    onTouchEnd_(handler: (event: TouchEvent) => void): this;
    onTouchMove_(handler: (event: TouchEvent) => void): this;
    onTouchCancel_(handler: (event: TouchEvent) => void): this;
    onDrag_(handler: (event: DragEvent) => void): this;
    onDragStart_(handler: (event: DragEvent) => void): this;
    onDragEnd_(handler: (event: DragEvent) => void): this;
    onDragEnter_(handler: (event: DragEvent) => void): this;
    onDragLeave_(handler: (event: DragEvent) => void): this;
    onDragOver_(handler: (event: DragEvent) => void): this;
    onDragDrop_(handler: (event: DragEvent) => void): this;
    onCopy_(handler: (event: ClipboardEvent) => void): this;
    onCut_(handler: (event: ClipboardEvent) => void): this;
    onPaste_(handler: (event: ClipboardEvent) => void): this;
    onScroll_(handler: (event: Event) => void): this;
    onResize_(handler: (event: UIEvent) => void): this;
    onPlay_(handler: (event: Event) => void): this;
    onPause_(handler: (event: Event) => void): this;
    onEnded_(handler: (event: Event) => void): this;
    onVolumeChange_(handler: (event: Event) => void): this;
    onAnimationStart_(handler: (event: AnimationEvent) => void): this;
    onAnimationEnd_(handler: (event: AnimationEvent) => void): this;
    onAnimationIteration_(handler: (event: AnimationEvent) => void): this;
    onTransitionEnd_(handler: (event: TransitionEvent) => void): this;
    onPointerDown_(handler: (event: PointerEvent) => void): this;
    onPointerUp_(handler: (event: PointerEvent) => void): this;
    onPointerMove_(handler: (event: PointerEvent) => void): this;
    onPointerEnter_(handler: (event: PointerEvent) => void): this;
    onPointerLeave_(handler: (event: PointerEvent) => void): this;
    onPointerCancel_(handler: (event: PointerEvent) => void): this;
    on_(eventName: string, handler: EventListener): this;
    off_(eventName: string, handler: EventListener): this;
  }
}

Object.assign(HTMLElement.prototype, {
  id_(id) {
    this.id = id;
    return this;
  },
  attr_(attr, value) {
    this.setAttribute(attr, value);
    return this;
  },
  name_(name) {
    this.setAttribute('name', name);
    return this;
  },
  child_(...nodes) {
    this.append(...nodes);
    return this;
  },
  class_(c) {
    this.className = Array.isArray(c) ? c.join(' ') : c;
    return this;
  },
  w_(w) {
    this.style.width = w;
    return this;
  },
  h_(h) {
    this.style.height = h;
    return this;
  },
  size_(w, h) {
    this.style.width = w;
    this.style.height = h;
    return this;
  },
  minW_(w) {
    this.style.minWidth = w;
    return this;
  },
  minH_(h) {
    this.style.minHeight = h;
    return this;
  },
  maxW_(w) {
    this.style.maxWidth = w;
    return this;
  },
  maxH_(h) {
    this.style.maxHeight = h;
    return this;
  },
  flex_() {
    this.style.display = 'flex';
    return this;
  },
  flexFlex_() {
    this.style.display = 'flex';
    this.style.flex = '1 1 0%';
    return this;
  },
  flexNone_() {
    this.style.flex = 'none';
    return this;
  },
  flexAuto_() {
    this.style.flex = '1 1 auto';
    return this;
  },
  flexGrow_(grow) {
    this.style.flexGrow = String(grow);
    return this;
  },
  flexShrink_(shrink) {
    this.style.flexShrink = String(shrink);
    return this;
  },
  flexBasis_(basis) {
    this.style.flexBasis = basis;
    return this;
  },
  flexDirection_(direction) {
    this.style.flexDirection = direction;
    return this;
  },
  flexWrap_(wrap) {
    this.style.flexWrap = wrap;
    return this;
  },
  grid_() {
    this.style.display = 'grid';
    return this;
  },
  gridTemplateColumns_(columns) {
    this.style.gridTemplateColumns = columns;
    return this;
  },
  gridTemplateRows_(rows) {
    this.style.gridTemplateRows = rows;
    return this;
  },
  gridColumn_(column) {
    this.style.gridColumn = column;
    return this;
  },
  gridRow_(row) {
    this.style.gridRow = row;
    return this;
  },
  gap_(gap) {
    this.style.gap = gap;
    return this;
  },
  gapX_(gap) {
    this.style.columnGap = gap;
    return this;
  },
  gapY_(gap) {
    this.style.rowGap = gap;
    return this;
  },
  justify_(justify) {
    this.style.justifyContent = justify;
    return this;
  },
  items_(items) {
    this.style.alignItems = items;
    return this;
  },
  content_(content) {
    this.style.alignContent = content;
    return this;
  },
  self_(alignSelf) {
    this.style.alignSelf = alignSelf;
    return this;
  },
  justifySelf_(justifySelf) {
    this.style.justifySelf = justifySelf;
    return this;
  },
  px_(px) {
    this.style.paddingLeft = px;
    this.style.paddingRight = px;
    return this;
  },
  py_(py) {
    this.style.paddingTop = py;
    this.style.paddingBottom = py;
    return this;
  },
  pt_(pt) {
    this.style.paddingTop = pt;
    return this;
  },
  pr_(pr) {
    this.style.paddingRight = pr;
    return this;
  },
  pb_(pb) {
    this.style.paddingBottom = pb;
    return this;
  },
  pl_(pl) {
    this.style.paddingLeft = pl;
    return this;
  },
  p_(p) {
    this.style.padding = p;
    return this;
  },
  mx_(mx) {
    this.style.marginLeft = mx;
    this.style.marginRight = mx;
    return this;
  },
  my_(my) {
    this.style.marginTop = my;
    this.style.marginBottom = my;
    return this;
  },
  mt_(mt) {
    this.style.marginTop = mt;
    return this;
  },
  mr_(mr) {
    this.style.marginRight = mr;
    return this;
  },
  mb_(mb) {
    this.style.marginBottom = mb;
    return this;
  },
  ml_(ml) {
    this.style.marginLeft = ml;
    return this;
  },
  m_(m) {
    this.style.margin = m;
    return this;
  },
  border_() {
    this.style.border = '1px solid currentColor';
    return this;
  },
  borderW_(width) {
    this.style.borderWidth = width;
    return this;
  },
  borderT_(width) {
    this.style.borderTopWidth = width;
    return this;
  },
  borderR_(width) {
    this.style.borderRightWidth = width;
    return this;
  },
  borderB_(width) {
    this.style.borderBottomWidth = width;
    return this;
  },
  borderL_(width) {
    this.style.borderLeftWidth = width;
    return this;
  },
  borderColor_(color) {
    this.style.borderColor = color;
    return this;
  },
  borderStyle_(style) {
    this.style.borderStyle = style;
    return this;
  },
  rounded_(radius) {
    this.style.borderRadius = radius;
    return this;
  },
  roundedTL_(radius) {
    this.style.borderTopLeftRadius = radius;
    return this;
  },
  roundedTR_(radius) {
    this.style.borderTopRightRadius = radius;
    return this;
  },
  roundedBL_(radius) {
    this.style.borderBottomLeftRadius = radius;
    return this;
  },
  roundedBR_(radius) {
    this.style.borderBottomRightRadius = radius;
    return this;
  },
  bg_(color) {
    this.style.backgroundColor = color;
    return this;
  },
  bgColor_(color) {
    this.style.backgroundColor = color;
    return this;
  },
  bgImage_(image) {
    this.style.backgroundImage = image;
    return this;
  },
  bgSize_(size) {
    this.style.backgroundSize = size;
    return this;
  },
  bgPosition_(position) {
    this.style.backgroundPosition = position;
    return this;
  },
  bgRepeat_(repeat) {
    this.style.backgroundRepeat = repeat;
    return this;
  },
  shadow_(shadow) {
    this.style.boxShadow = shadow;
    return this;
  },
  shadowMd_() {
    this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
    return this;
  },
  shadowLg_() {
    this.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    return this;
  },
  shadowNone_() {
    this.style.boxShadow = 'none';
    return this;
  },
  opacity_(value) {
    this.style.opacity = String(value);
    return this;
  },
  text_(t) {
    this.textContent = t;
    return this;
  },
  textColor_(color) {
    this.style.color = color;
    return this;
  },
  textSize_(size) {
    this.style.fontSize = size;
    return this;
  },
  textAlign_(align) {
    this.style.textAlign = align;
    return this;
  },
  fontWeight_(weight) {
    this.style.fontWeight = weight;
    return this;
  },
  lineHeight_(height) {
    this.style.lineHeight = height;
    return this;
  },
  letterSpacing_(spacing) {
    this.style.letterSpacing = spacing;
    return this;
  },
  textOverflow_(overflow) {
    this.style.textOverflow = overflow;
    return this;
  },
  whitespace_(value) {
    this.style.whiteSpace = value;
    return this;
  },
  truncate_() {
    this.style.overflow = 'hidden';
    this.style.textOverflow = 'ellipsis';
    this.style.whiteSpace = 'nowrap';
    return this;
  },
  lineClamp_(lines) {
    this.style.display = '-webkit-box';
    this.style.webkitLineClamp = String(lines);
    this.style.webkitBoxOrient = 'vertical';
    this.style.overflow = 'hidden';
    return this;
  },
  relative_() {
    this.style.position = 'relative';
    return this;
  },
  absolute_() {
    this.style.position = 'absolute';
    return this;
  },
  fixed_() {
    this.style.position = 'fixed';
    return this;
  },
  sticky_() {
    this.style.position = 'sticky';
    return this;
  },
  static_() {
    this.style.position = 'static';
    return this;
  },
  inset_(value) {
    this.style.top = value;
    this.style.right = value;
    this.style.bottom = value;
    this.style.left = value;
    return this;
  },
  insetY_(value) {
    this.style.top = value;
    this.style.bottom = value;
    return this;
  },
  insetX_(value) {
    this.style.right = value;
    this.style.left = value;
    return this;
  },
  top_(value) {
    this.style.top = value;
    return this;
  },
  right_(value) {
    this.style.right = value;
    return this;
  },
  bottom_(value) {
    this.style.bottom = value;
    return this;
  },
  left_(value) {
    this.style.left = value;
    return this;
  },
  z_(value) {
    this.style.zIndex = String(value);
    return this;
  },
  zIndex_(value) {
    this.style.zIndex = String(value);
    return this;
  },
  overflow_(value) {
    this.style.overflow = value;
    return this;
  },
  overflowX_(value) {
    this.style.overflowX = value;
    return this;
  },
  overflowY_(value) {
    this.style.overflowY = value;
    return this;
  },
  overflowHidden_() {
    this.style.overflow = 'hidden';
    return this;
  },
  overflowScroll_() {
    this.style.overflow = 'scroll';
    return this;
  },
  overflowAuto_() {
    this.style.overflow = 'auto';
    return this;
  },
  overflowVisible_() {
    this.style.overflow = 'visible';
    return this;
  },
  cursor_(cursor) {
    this.style.cursor = cursor;
    return this;
  },
  cursorPointer_() {
    this.style.cursor = 'pointer';
    return this;
  },
  cursorDefault_() {
    this.style.cursor = 'default';
    return this;
  },
  cursorMove_() {
    this.style.cursor = 'move';
    return this;
  },
  cursorGrab_() {
    this.style.cursor = 'grab';
    return this;
  },
  cursorGrabbing_() {
    this.style.cursor = 'grabbing';
    return this;
  },
  pointerEvents_(value) {
    this.style.pointerEvents = value;
    return this;
  },
  pointerEventsNone_() {
    this.style.pointerEvents = 'none';
    return this;
  },
  pointerEventsAuto_() {
    this.style.pointerEvents = 'auto';
    return this;
  },
  userSelect_(value) {
    this.style.userSelect = value;
    return this;
  },
  selectNone_() {
    this.style.userSelect = 'none';
    return this;
  },
  selectText_() {
    this.style.userSelect = 'text';
    return this;
  },
  selectAll_() {
    this.style.userSelect = 'all';
    return this;
  },
  block_() {
    this.style.display = 'block';
    return this;
  },
  inlineBlock_() {
    this.style.display = 'inline-block';
    return this;
  },
  inline_() {
    this.style.display = 'inline';
    return this;
  },
  hide_() {
    this.style.display = 'none';
    return this;
  },
  visible_() {
    this.style.visibility = 'visible';
    return this;
  },
  invisible_() {
    this.style.visibility = 'hidden';
    return this;
  },
  rotate_(deg) {
    this.style.transform = 'rotate(' + deg + 'deg)';
    return this;
  },
  scale_(x, y) {
    this.style.transform = 'scale(' + x + ', ' + (y ?? x) + ')';
    return this;
  },
  transformTranslate_(x, y) {
    this.style.transform = 'translate(' + x + ', ' + y + ')';
    return this;
  },
  transition_(property) {
    this.style.transition = property;
    return this;
  },
  transitionDuration_(duration) {
    this.style.transitionDuration = duration;
    return this;
  },
  transitionTimingFunction_(timing) {
    this.style.transitionTimingFunction = timing;
    return this;
  },
  transitionDelay_(delay) {
    this.style.transitionDelay = delay;
    return this;
  },
  onClick_(handler) {
    return this.on_('click', handler as EventListener);
  },
  onDoubleClick_(handler) {
    return this.on_('dblclick', handler as EventListener);
  },
  onMouseDown_(handler) {
    return this.on_('mousedown', handler as EventListener);
  },
  onMouseUp_(handler) {
    return this.on_('mouseup', handler as EventListener);
  },
  onMouseMove_(handler) {
    return this.on_('mousemove', handler as EventListener);
  },
  onMouseEnter_(handler) {
    return this.on_('mouseenter', handler as EventListener);
  },
  onMouseLeave_(handler) {
    return this.on_('mouseleave', handler as EventListener);
  },
  onMouseOver_(handler) {
    return this.on_('mouseover', handler as EventListener);
  },
  onMouseOut_(handler) {
    return this.on_('mouseout', handler as EventListener);
  },
  onMouseWheel_(handler) {
    return this.on_('wheel', handler as EventListener);
  },
  onKeyDown_(handler) {
    return this.on_('keydown', handler as EventListener);
  },
  onKeyUp_(handler) {
    return this.on_('keyup', handler as EventListener);
  },
  onKeyPress_(handler) {
    return this.on_('keypress', handler as EventListener);
  },
  onFocus_(handler) {
    return this.on_('focus', handler as EventListener);
  },
  onBlur_(handler) {
    return this.on_('blur', handler as EventListener);
  },
  onFocusIn_(handler) {
    return this.on_('focusin', handler as EventListener);
  },
  onFocusOut_(handler) {
    return this.on_('focusout', handler as EventListener);
  },
  onChange_(handler) {
    return this.on_('change', handler as EventListener);
  },
  onInput_(handler) {
    return this.on_('input', handler as EventListener);
  },
  onSubmit_(handler) {
    return this.on_('submit', handler as EventListener);
  },
  onReset_(handler) {
    return this.on_('reset', handler as EventListener);
  },
  onTouchStart_(handler) {
    return this.on_('touchstart', handler as EventListener);
  },
  onTouchEnd_(handler) {
    return this.on_('touchend', handler as EventListener);
  },
  onTouchMove_(handler) {
    return this.on_('touchmove', handler as EventListener);
  },
  onTouchCancel_(handler) {
    return this.on_('touchcancel', handler as EventListener);
  },
  onDrag_(handler) {
    return this.on_('drag', handler as EventListener);
  },
  onDragStart_(handler) {
    return this.on_('dragstart', handler as EventListener);
  },
  onDragEnd_(handler) {
    return this.on_('dragend', handler as EventListener);
  },
  onDragEnter_(handler) {
    return this.on_('dragenter', handler as EventListener);
  },
  onDragLeave_(handler) {
    return this.on_('dragleave', handler as EventListener);
  },
  onDragOver_(handler) {
    return this.on_('dragover', handler as EventListener);
  },
  onDragDrop_(handler) {
    return this.on_('drop', handler as EventListener);
  },
  onCopy_(handler) {
    return this.on_('copy', handler as EventListener);
  },
  onCut_(handler) {
    return this.on_('cut', handler as EventListener);
  },
  onPaste_(handler) {
    return this.on_('paste', handler as EventListener);
  },
  onScroll_(handler) {
    return this.on_('scroll', handler as EventListener);
  },
  onResize_(handler) {
    return this.on_('resize', handler as EventListener);
  },
  onPlay_(handler) {
    return this.on_('play', handler as EventListener);
  },
  onPause_(handler) {
    return this.on_('pause', handler as EventListener);
  },
  onEnded_(handler) {
    return this.on_('ended', handler as EventListener);
  },
  onVolumeChange_(handler) {
    return this.on_('volumechange', handler as EventListener);
  },
  onAnimationStart_(handler) {
    return this.on_('animationstart', handler as EventListener);
  },
  onAnimationEnd_(handler) {
    return this.on_('animationend', handler as EventListener);
  },
  onAnimationIteration_(handler) {
    return this.on_('animationiteration', handler as EventListener);
  },
  onTransitionEnd_(handler) {
    return this.on_('transitionend', handler as EventListener);
  },
  onPointerDown_(handler) {
    return this.on_('pointerdown', handler as EventListener);
  },
  onPointerUp_(handler) {
    return this.on_('pointerup', handler as EventListener);
  },
  onPointerMove_(handler) {
    return this.on_('pointermove', handler as EventListener);
  },
  onPointerEnter_(handler) {
    return this.on_('pointerenter', handler as EventListener);
  },
  onPointerLeave_(handler) {
    return this.on_('pointerleave', handler as EventListener);
  },
  onPointerCancel_(handler) {
    return this.on_('pointercancel', handler as EventListener);
  },
  on_(eventName, handler) {
    this.addEventListener(eventName, handler);
    return this;
  },
  off_(eventName, handler) {
    this.removeEventListener(eventName, handler);
    return this;
  },
} as HTMLElement);

export {};
