import * as React from "react";
import {TextModule} from './components/text-module/text-module';
import {renderToStaticMarkup} from 'react-dom/server';

console.log("Hello from TS");

console.log(renderToStaticMarkup(<TextModule/>));
