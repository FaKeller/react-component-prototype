import {ImgModule} from '../img-module/img-module';
import {h, Component} from 'preact';

export class TextModule extends Component {

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