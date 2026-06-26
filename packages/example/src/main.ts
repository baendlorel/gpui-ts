import { div, h, btn, input } from 'zed-gpui';

// Example usage of zed-gpui - the plugin will detect these methods
const app = div()
  .flex()
  .w('100%')
  .h('100vh')
  .justify('center')
  .items('center')
  .bg('#f0f0f0')
  .gap('1rem');

const button = btn()
  .px('2rem')
  .py('1rem')
  .bg('blue')
  .textColor('white')
  .rounded('0.5rem')
  .cursorPointer()
  .onClick(() => console.log('Button clicked!'))
  .child('Click me');

const textField = input()
  .px('1rem')
  .py('0.5rem')
  .border()
  .rounded('0.25rem')
  .w('20rem')
  .attr('placeholder', 'Enter text...')
  .onChange((e: Event) => console.log('Input changed:', e));

app.child(button, textField);

document.body.appendChild(app);
