import * as React from 'react';

export class ImgModule extends React.Component <{
    hello?: string
}>{

    public hello: string= "kittens.jpg";

    render() {
        return (
            <img src={this.props.hello} />
        )
    }
}