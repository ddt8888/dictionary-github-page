import React, { Component } from "react";

class CustomInput extends Component {
    constructor(props) {
        super(props)
        // ref 생성하기
        this.textInput = React.createRef();
    }
    focusInput = () => {
        console.log(this.textInput.current)
        // ref 사용하기
        // focus는 ref가 있는 input이 클릭되고 커서가 깜빡이는걸 지정
        this.textInput.current.focus()
    }
    render() {
        return (
            <>
                {/* ref 설정하기 */}
                <input type="text" ref={this.textInput}></input>
                <button onClick={this.focusInput}>focus input</button>
            </>
        )
    }
}

export default CustomInput