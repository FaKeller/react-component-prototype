import {h} from 'preact';
import {TextModule} from './components/text-module/text-module';
import {render} from 'preact-render-to-string';

console.log('Hello from TS');

console.log(render(<TextModule/>));
