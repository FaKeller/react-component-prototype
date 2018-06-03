import {h, Component} from 'preact';

export interface ImgModuleProps {
    hello?: string
}

export class ImgModule extends Component<ImgModuleProps, any> {

    render(props: ImgModuleProps) {
        return (
            <img src={props.hello}/>
        )
    }
}