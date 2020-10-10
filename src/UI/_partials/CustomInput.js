import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {text} from '../../styles/theme/text';
import {mb} from '../../styles/misc/defaults';


class CustomInput extends Component {
    state = {
        active: false,
        value: ''
    }

    componentDidMount(){
        this.label = this.label.bind(this);
    }
    componentDidUpdate(prevProps){
        if(prevProps.value != this.props.value){
            this.setState({
                value: this.props.value
            });
        }
    }
    focus(){
        this.field.focus();
    }

    blur(){
        this.field.blur();
    }

    label()
    {
        if( this.props.label === undefined ) return null;
        if( typeof this.props.label == 'function' ) return this.props.label({isLight: this.is_light(), active: this.state.active});
        if( typeof this.props.label == 'string' )
        {
            return  (<Text style={[text.bold, text.h4, mb(7)]}>
                { this.props.label }
            </Text>);
        }
    }

    handle_on_focus(ev)
    {
        if(this.props.onFocus) this.props.onFocus(ev);
        this.setState({active: true});
    }

    handle_on_blur(ev)
    {
        if(this.props.onBlur) this.props.onBlur(ev);
        this.setState({active: false});
    }

    handle_on_change_text(input)
    {
        // update value in state
        this.setState({value: input});
        // fire on change text if specified
        if(this.props.onChangeText) this.props.onChangeText(input);
    }

    passableProps()
    {
        var props = Object.assign({}, this.props);
        if(props.ref)          delete props.ref;
        if(props.label)          delete props.label;
        if(props.onFocus)        delete props.onFocus;
        if(props.onBlur)         delete props.onBlur;
        if(props.onChangeText)   delete props.onChangeText;
        return props;
    }

    render() {
        return (
            <View>
                {this.label()}

                <TextInput
                    ref={ref => this.field = ref}
                    style={[text.textElevated]}
                    {...this.passableProps()}
                    onFocus={this.handle_on_focus.bind(this)}
                    onBlur={this.handle_on_blur.bind(this)}
                    onChangeText={this.handle_on_change_text.bind(this)}
                />

            </View>
        );
    }
}

export default CustomInput;
