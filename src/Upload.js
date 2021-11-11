import React, { Component } from "react";

class Upload extends Component {
    constructor(props) {
        super(props)
        // ref 생성
        this.fileInput = React.createRef();
    }
    focusInput = () => {
        console.log(this.fileInput.current)
        // ref 사용
        // click은 ref지정한 input을 클릭되게 하는 함수
        this.fileInput.current.click()
    }
    render() {
        return (
            <>
                {/* ref 설정 */}
                <div className="App">
                    <h1>File Upload</h1>
                    <button type="button" onClick={this.focusInput}>Upload</button>
                    <input type="file" style={{ visibility: 'hidden' }} ref={this.fileInput}></input>

                </div>
            </>
        )
    }
}

export default Upload