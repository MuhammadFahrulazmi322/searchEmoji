import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styles from './EmojiBox.module.css'
import classnames from 'classnames'

const EmojiBox = ({title, symbol}) =>{
    const[selected, setSelected] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=> setSelected(false), 600 )

        return () => clearTimeout(timer)
    },[selected])
    return(
        <div
        onClick={()=>{
            navigator.clipboard.writeText(symbol)
            setSelected(true)
        }}
         className={classnames(styles.emojiBox,{
            [styles.selected]: selected
         })}>
            <p
                className={styles.emoji}
                dangerouslySetInnerHTML={{
                    __html:`&#${symbol.codePointAt(0)}`
                }}
            />
            <p className={styles.emojiText}>
                {selected ? 'Copied!' : title}
            </p>

        </div>
    )
}

EmojiBox.propTypes = {
    title : PropTypes.string,
    symbol : PropTypes.string
}

export default EmojiBox