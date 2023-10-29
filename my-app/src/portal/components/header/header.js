import './header.css'

function header() {
    let list = ['首页','原创','同人']

    return (
        <div class="header-container">{
            list.map(item => {
                return <div>{item}</div>
            })
        }</div>
    );
}

export default header;
