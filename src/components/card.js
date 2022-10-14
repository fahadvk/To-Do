import './card.css'
function card(props)
{ 
    const classes = 'card' + props.className;
    return <div className='card'>{props.children}</div>
}
export default card