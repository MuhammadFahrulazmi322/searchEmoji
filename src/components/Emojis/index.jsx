import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { filterEmojis } from '../../utils/filterEmojis'
import EmojiBox from '../EmojiBox'
import Empty from '../Empty'
import styles from './Emojis.module.css'

const Emojis = ({emojisData,searchText}) =>{

    const[filteredEmojis, setFilteredEmojis] = useState([])

    useEffect(()=>{
      setFilteredEmojis(filterEmojis({
        emojisData,
        searchText
      }))
    },[emojisData, searchText])
    
    if(filteredEmojis.length > 0 ){
      return(
        <div className={styles.emojisGrid}>
          {filteredEmojis.map((data,index) =>(
            <EmojiBox 
                key={index}
                title={data.title}
                symbol={data.symbol}
            />
          ))}
        </div>
      )
    }
    else{
      return(
        <Empty text='Oppss Zero finding, lets try another word'/>
      )
    }
}

Emojis.propTypes = {
    emojisData : PropTypes.array
}
export default Emojis