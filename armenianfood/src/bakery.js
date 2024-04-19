import haykakanqufta from './images/haykakan-khohanoc.png'
import lamajun from './images/lamajun.jpg'
import './image.css';

function Bakery(){
    return <div >
    <div className='image-container'>
        <img src={haykakanqufta} alt='Image of Armenian Kofta' className='qufta image-shape'/>
        <img src={lamajun} alt='Image of Armenian Lahmajun' className='lahmajun image-shape'/>
    </div>
</div>
}

export default Bakery;