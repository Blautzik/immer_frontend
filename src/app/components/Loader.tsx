import Image from 'next/image'
import styles from './Loader.module.css'
import immerIcon from '../../../public/assets/immer_icon_white.png'
import immerLogo from '../../../public/assets/immer_logo.png'

function Loader() {
  return (
    <div className='w-full h-screen flex flex-col flex-wrap justify-center content-center bg-white gap-4'>
      <div className='flex flex-wrap justify-center content-center w-48 h-48 bg-immer-orange rounded-full ml-auto'>
        <Image src={immerIcon} alt='immer icon' width={100} height={100} className={styles.loadingRound} />
      </div>
      <Image src={immerLogo} alt='immer icon' width={200} height={200} />
    </div>
  )
}

export default Loader
