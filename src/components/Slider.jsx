

import styles from '../styles/Slider.module.css'
import { sliderItems } from '../data'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import{useState} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    ${(props)=>props.slideIndex*-100}vw;
`



const Slider = () => {

    // const [slideIndex,setslideIndex] = useState(0);

    // const handleClick = (direction)=>{

    //     if(direction==="left"){
    //         setslideIndex(slideIndex>0?slideIndex-1:2);
    //     }
    //     else{
    //         setslideIndex(slideIndex<2?slideIndex+1:0);
    //     }

    // }

    
  return (
    <div className={styles.Container}>
        {/* <div className={styles.ArrowLeft}direction ="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </div> */}
        <div className={styles.Wrapper}>
        {sliderItems.map(item=>(
            <div className={styles.Slide1} item={item} key={item.id}>
                <div className={styles.ImgContainer}>
                    <img className={styles.Image}src={item.img}>
                    </img>
                </div>
                <div className={styles.InfoContainer}>
                    <h1 className={styles.Title}>
                    {item.title}
                    </h1>
                    <p className={styles.Desc}>
                    {item.desc}
                    </p>
                    <button className={styles.Button}>
                        SHOP NOW
                    </button>
                </div>
            </div>
            ))}
            
            {/* <div className={styles.Slide2}>
                <div className={styles.ImgContainer}>
                    <img className={styles.Image}src="https://www.ephotozine.com/articles/7-top-creative-ways-to-use-coffee-in-your-photos-34367/images/190115_Cooph-Challenge-yourself-with-one-pbject-1.jpg">
                    </img>
                </div>
                <div className={styles.InfoContainer}>
                    <h1 className={styles.Title}>
                         EVENING OFFER
                    </h1>
                    <p className={styles.Desc}>
                        DON'T GIVE OUT YOUR MORNING COFFEE!  GET FLAT 25% OFF ON CAPPUCCINO.
                    </p>
                    <button className={styles.Button}>
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className={styles.Slide3}>
                <div className={styles.ImgContainer}>
                    <img className={styles.Image}src="https://www.ephotozine.com/articles/7-top-creative-ways-to-use-coffee-in-your-photos-34367/images/190115_Cooph-Challenge-yourself-with-one-pbject-1.jpg">
                    </img>
                </div>
                <div className={styles.InfoContainer}>
                    <h1 className={styles.Title}>
                         WEEKEND OFFER
                    </h1>
                    <p className={styles.Desc}>
                        DON'T GIVE OUT YOUR MORNING COFFEE!  GET FLAT 25% OFF ON CAPPUCCINO.
                    </p>
                    <button className={styles.Button}>
                        SHOP NOW
                    </button>
                </div>
            </div> */}
        </div>
        {/* <div className={styles.ArrowRight}direction ="right"onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </div> */}
        
      
    </div>
  )
}

export default Slider
