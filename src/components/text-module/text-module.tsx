import * as React from 'react';
import {ImgModule} from '../img-module/img-module';

export class TextModule extends React.Component <{}> {

    private test: number = 5;

    render() {
        return (
            <div>
                <ImgModule hello="puppies.jpg"/>
                <ImgModule/>
                <p>Hello from React {this.test}</p>
            </div>
        )
    }
}